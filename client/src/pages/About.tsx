import { motion } from "motion/react";
import SoftBackdrop from "../components/SoftBackdrop";
import { Heart, Sparkles, Code2, Rocket, Users, Globe } from "lucide-react";

export default function About() {
    const features = [
        { icon: Code2, title: "AI Thumbnail Generator", desc: "Automatically create eye-catching thumbnails in seconds using AI-powered templates." },
        { icon: Sparkles, title: "Custom Styles", desc: "Choose from modern designs, color palettes, and fonts to match your brand." },
        { icon: Rocket, title: "Fast & Efficient", desc: "Generate high-quality thumbnails quickly without wasting time on editing." },
        { icon: Heart, title: "User Friendly", desc: "Intuitive interface for everyone, no design skills required." },
        { icon: Users, title: "Community Driven", desc: "Templates inspired by top creators to maximize engagement." },
        { icon: Globe, title: "Global Access", desc: "Use our AI thumbnail generator from anywhere in the world." },
    ];

    return (
        <div className="relative min-h-screen overflow-hidden text-white font-sans">
            {/* SoftBackdrop Only */}
            <SoftBackdrop />

            {/* Main Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600 animate-text mt-6">
                        About <span className="text-pink-500">Our App</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300/90 leading-relaxed">
                        Our AI-powered Thumbnail Generator helps creators design stunning, clickable thumbnails effortlessly. Generate professional thumbnails in seconds and boost your content's engagement.
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, staggerChildren: 0.1 }}
                    className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {features.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.08, rotate: 1 }}
                                transition={{ type: 'spring', stiffness: 200 }}
                                className="group rounded-3xl border border-pink-600/30 bg-white/5 p-8 backdrop-blur-2xl shadow-2xl hover:border-pink-500/60 hover:bg-white/10"
                            >
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-pink-600/30 group-hover:bg-pink-500/50 transition-all duration-300">
                                    <Icon className="text-pink-400" size={28} />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mt-32 rounded-3xl border border-pink-600/20 bg-gradient-to-r from-pink-600/20 to-fuchsia-600/20 p-12 text-center backdrop-blur-3xl shadow-2xl"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Built with <span className="text-pink-500">AI</span> & <span className="text-Pink-400">Creativity</span>
                    </h2>
                    <p className="mt-2 text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                        Every thumbnail is generated using intelligent AI algorithms to ensure stunning visuals, optimal click-through rates, and effortless customization for creators worldwide.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}