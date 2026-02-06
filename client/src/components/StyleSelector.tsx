import type React from "react";
import { CpuIcon, ImageIcon, PenToolIcon, SquareIcon, SparkleIcon, ChevronDownIcon } from "lucide-react";
import { thumbnailStyles, type ThumbnailStyle } from "../assets/assets"


const StyleSelector = ({ value, onChange, isOpen, setIsOpen }: { value: ThumbnailStyle; onChange: (style: ThumbnailStyle) => void; isOpen: boolean; setIsOpen: (open: boolean) => void }) => {
    const styleDiscriptions: Record<ThumbnailStyle, string> = {
        "Bold & Graphic": "High Contrast,bold typography, striking visuals",
        "Minimalist": "Clean, simple, and modern design",
        "Photorealistic": "Realistic photos with natural lighting",
        "Illustrated": "Hand-drawn look with artistic flair",
        "Tech/Futuristic": "Neon lights, circuits, and sci-fi elements",
    }
    const styleIcons: Record<ThumbnailStyle, React.ReactNode> = {
        "Bold & Graphic": <SparkleIcon className="w-4 h-4" />,
        "Minimalist": <SquareIcon className="w-4 h-4" />,
        "Photorealistic": <ImageIcon className="w-4 h-4" />,
        "Illustrated": <PenToolIcon className="w-4 h-4" />,
        "Tech/Futuristic": <CpuIcon className="w-4 h-4" />,
    }

    return (
        <div className="relative space-y-3 dark">
            <label className="block text-sm font-medium text-zinc-200">Thumbnail Style</label>
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between text-left px-4 py-3 transition rounded-md border border-white/10 bg-white/8 text-zinc-200 hover:bg-white/12">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 font-medium">
                        {styleIcons[value]}
                        <span>{value}</span>
                    </div>
                    <p className="text-xs text-zinc-400">{styleDiscriptions[value]}</p>
                </div>
                <ChevronDownIcon className={['h-5 w-5 transition-transform', isOpen && 'rotate-180'].join(' ')} />
            </button>
            {isOpen && (
                <div className="absolute z-50 w-full mt-1 bottom-0 rounded-md border border-white/12 bg-black/20 backdrop-blur-3xl shadow-lg">
                    {thumbnailStyles.map((style) => (
                        <button key={style} type='button' onClick={() => { onChange(style); setIsOpen(false) }} className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-black/30">
                            <div className="mt-0.5">
                                {styleIcons[style]}
                                <div>
                                    <p className="font-medium">{style}</p>
                                    <p className="text-xs text-zinc-400">{styleDiscriptions[style]}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default StyleSelector