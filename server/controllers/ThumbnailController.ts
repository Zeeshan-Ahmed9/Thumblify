import { Request, Response } from "express";
import Thumbnail from "../models/Thumbnail.js";
import { GenerateContentConfig, HarmBlockThreshold, HarmCategory } from "@google/genai";
import ai from "../configs/ai.js";
import path from "node:path";
import fs from 'fs';
import { v2 as cloudinary } from 'cloudinary';

const stylePrompts = {
    'Bold & Graphic': 'eye-catching thumbnail, bold typography, vibrant colors, expressive facial reaction, dramatic lighting,high contrast,click-worthy composition,professional style',
    'Tech/Futuristic': 'futuristic thumbnail, sleek modern design, digital UI elements, glowing assents, holographic effects, cyber-tech asthetic, sharp lighting, high-tech atmosphere',
    'Minimalist': 'minimalist thumbnail, clean design, simple composition, soft colors, subtle details, modern aesthetic',
    'Photorealistic': 'photorealistic thumbnail, realistic details, natural lighting, high quality, professional photography style',
    'Illustrated': 'illustrated thumbnail, hand-drawn style, artistic, creative, unique, vibrant colors, cartoonish style',
}
const colorSchemeDiscription = {
    vibrant: 'vibrant color scheme, bright and saturated colors, high contrast, eye-catching colors',
    sunset: 'sunset color scheme, warm and glowing colors, orange and yellow tones, soft lighting',
    ocean: 'ocean color scheme, blue and green tones, cool and refreshing colors, calm atmosphere',
    forest: 'forest color scheme, green and brown tones, earthy colors, natural atmosphere',
    purple: 'purple color scheme, purple and pink tones, royal and luxurious colors, magical atmosphere',
    monochrome: 'monochrome color scheme, black and white colors, classic and timeless colors, elegant atmosphere',
    neon: 'neon color scheme, bright and glowing colors, electric colors, futuristic atmosphere',
    pastel: 'pastel color scheme, soft and light colors, gentle colors, dreamy atmosphere',
}

export const generateThumbnail = async (req: Request, res: Response) => {
    try {
        const { userId } = req.session;
        const { title, prompt: user_prompt, aspect_ratio, color_scheme, style, text_overlay } = req.body;
        const thumbnail = await Thumbnail.create({
            userId,
            title,
            prompt_used: user_prompt,
            user_prompt,
            style,
            aspect_ratio,
            color_scheme,
            text_overlay,
            isGenerating: true,
        });
        const model = 'gemini-3-pro-image-preview';
        const generationConfig: GenerateContentConfig = {
            maxOutputTokens: 32768,
            temperature: 1,
            topP: 0.95,
            responseModalities: ['IMAGE'],
            imageConfig: {
                aspectRatio: aspect_ratio || '16:9',
                imageSize: '1k'
            },
            safetySettings: [
                {
                    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                    threshold: HarmBlockThreshold.OFF
                },
                {
                    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                    threshold: HarmBlockThreshold.OFF
                },
                {
                    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                    threshold: HarmBlockThreshold.OFF
                },
                {
                    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                    threshold: HarmBlockThreshold.OFF
                }
            ]
        }
        let prompt = `Create a ${stylePrompts[style as keyof typeof stylePrompts]} for: "${title}"`;
        if (color_scheme) {
            prompt += ` use a ${colorSchemeDiscription[color_scheme as keyof typeof colorSchemeDiscription]} color scheme.`;
        }
        if (user_prompt) {
            prompt += ` Additional details: ${user_prompt}.`;
        }
        prompt += `The thumbnail should be ${aspect_ratio}, visually appealing, high quality, and suitable for a YouTube thumbnail.Make it eye-catching and attractive, and impossible to ignore.`;
        // Generate the image using the AI model
        const response: any = await ai.models.generateContent({
            model,
            contents: [prompt],
            config: generationConfig
        });
        //Check if response is valid
        if (!response?.candidates?.[0]?.content?.parts) {
            throw new Error("Unexpected response");
        }
        const parts = response.candidates[0].content.parts;
        let finalBuffer: Buffer | null = null;
        for (const part of parts) {
            if (part.inlineData) {
                finalBuffer = Buffer.from(part.inlineData.data, 'base64')
            }
        }
        const filename = `final-output-${Date.now()}.png`;
        const filePath = path.join('images', filename)

        //Create directory if not exists
        fs.mkdirSync('images', { recursive: true });

        //Write the final image to the file
        fs.writeFileSync(filePath, finalBuffer!);

        //Upload to Cloudinary
        const uploadResult = await cloudinary.uploader.upload(filePath, { resource_type: 'image' })

        //Update the thumbnail with the image URL
        thumbnail.image_url = uploadResult.url;
        thumbnail.isGenerating = false;
        await thumbnail.save();

        res.json({ message: "Thumbnail generated successfully", thumbnail })

        //Remove image file from disk
        fs.unlinkSync(filePath)

    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
}

//Controllers for thumbnail deletion

export const deleteThumbnail = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { userId } = req.session;

        await Thumbnail.findByIdAndDelete({ _id: id, userId });
        res.json({ message: "Thumbnail deleted successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to delete thumbnail" })
    }
}
