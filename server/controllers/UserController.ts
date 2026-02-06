import { Request, Response } from "express";
import Thumbnail from "../models/Thumbnail.js";

//Controllers to get all users Thumbnails

export const getUserThumbnails = async (req: Request, res: Response) => {                  ///error occur by chance because of s
    try {
        const { userId } = req.session;
        const thumbnails = await Thumbnail.find({ userId }).sort({ createdAt: -1 });
        res.json({ thumbnails });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to get user thumbnails" });
    }
}

// Controller to get single thumbnail of user

export const getThumbnailById = async (req: Request, res: Response) => {
    try {
        const { userId } = req.session;
        const { id } = req.params;
        const thumbnail = await Thumbnail.findOne({ userId, _id: id });
        res.json({ thumbnail });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to get user thumbnail" });
    }
}
