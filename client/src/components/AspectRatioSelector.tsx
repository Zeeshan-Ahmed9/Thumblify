import { RectangleHorizontal, Square, RectangleVertical, Ratio } from 'lucide-react'
import { aspectRatios, type AspectRatio } from '../assets/assets'
import React from 'react'

const AspectRatioSelector = ({ value, onChange }: { value: AspectRatio; onChange: (ratio: AspectRatio) => void }) => {

    const iconmap = {
        '16:9': <RectangleHorizontal />,
        '1:1': <Square />,
        '9:16': <RectangleVertical />
    } as Record<AspectRatio, React.ReactNode>
    return (
        <div className='space-y-3 dark'>
            <label className='block text-sm font-medium'>
                Aspect Ratio
            </label>
            <div className='flex flex-wrap gap-2'>
                {aspectRatios.map((ratio) => {
                    const selected = value === ratio;
                    return (
                        <button key={ratio} type='button' onClick={() => onChange(ratio)} className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-sm transition border-white/10 ${selected ? 'bg-white/10' : 'hover:bg-white/6'}`}>
                            {iconmap[ratio]}
                            <span className='tracking-widest'>{ratio}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default AspectRatioSelector