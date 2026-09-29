import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import SoftBackdrop from "../components/SoftBackdrop";
import { dummyThumbnails } from "../assets/assets";
import {
    Sparkles,
    Zap,
    TrendingUp,
    Eye,
    CheckCircle2,
    XCircle,
    ArrowRight,
    Play,
    Tv,
    Sliders,
    Palette,
    Layers,
    ChevronDown,
    Rocket,
    Cpu,
    Wand2,
    ShieldCheck,
    BarChart3,
    HeartHandshake,
    ExternalLink,
    MousePointerClick,
    CopyCheck
} from "lucide-react";

export default function About() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const stats = [
        { label: "Thumbnails Created", value: "120K+", icon: Wand2, change: "+24% this month" },
        { label: "Avg CTR Increase", value: "3.4x", icon: TrendingUp, change: "Tested on 500+ channels" },
        { label: "Generation Speed", value: "< 5s", icon: Zap, change: "Sub-second inference" },
        { label: "Creator Rating", value: "4.9 / 5", icon: Sparkles, change: "Over 8,000 creators" },
    ];

    const howItWorksSteps = [
        {
            step: "01",
            title: "Describe Your Vision",
            desc: "Provide your video title, target vibe, and optional custom instructions. Our AI understands YouTube context and psychological click triggers.",
            icon: Sliders,
            badge: "Intelligent Prompting",
        },
        {
            step: "02",
            title: "Select Style & Ratio",
            desc: "Pick from signature styles like Bold & Graphic, Cyber Tech, or Photorealistic in 16:9 (YouTube), 9:16 (Shorts/Reels), or 1:1 (Socials).",
            icon: Palette,
            badge: "Format Flexibility",
        },
        {
            step: "03",
            title: "AI Synthesis & Text",
            desc: "Gemini 3 Pro + state-of-the-art vision models generate high-resolution compositions with crisp typography and striking focal points.",
            icon: Cpu,
            badge: "Neural Rendering",
        },
        {
            step: "04",
            title: "Live YouTube Feed Test",
            desc: "Instantly simulate how your thumbnail looks among real competitors in our built-in YouTube feed preview before publishing.",
            icon: Tv,
            badge: "CTR Verification",
        },
    ];

    const comparisonItems = [
        {
            old: "2-4 hours spent struggling with complex Photoshop layers",
            thumblify: "Ready-to-upload viral thumbnails in under 5 seconds",
        },
        {
            old: "Paying $30-$100+ per thumbnail to freelance designers",
            thumblify: "Unlimited rapid iterations at a fraction of the cost",
        },
        {
            old: "Guesswork on thumbnail fonts, contrast, and mobile readability",
            thumblify: "Trained on millions of top-performing high-CTR YouTube thumbnails",
        },
        {
            old: "Uploading blindly and waiting days to discover your CTR is < 2%",
            thumblify: "Built-in live YouTube dark & light mode feed simulator",
        },
    ];

    const bentoFeatures = [
        {
            title: "Trained on YouTube Visual Psychology",
            desc: "Our models don't just generate generic art—they prioritize high visual contrast, facial expressions, clear hierarchy, and bold focal points that stand out on mobile screens.",
            icon: Eye,
            colSpan: "md:col-span-2",
            gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
            tag: "Visual Science",
        },
        {
            title: "Real-Time YouTube Feed Simulator",
            desc: "Preview your creations inside a simulated YouTube desktop and mobile feed before hitting publish. See exactly how you dominate competitor thumbnails.",
            icon: Tv,
            colSpan: "md:col-span-1",
            gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
            tag: "Exclusive Feature",
        },
        {
            title: "Multi-Platform Ratios",
            desc: "One prompt adapts effortlessly across 16:9 YouTube standard, 9:16 vertical for YouTube Shorts & TikTok, and 1:1 square for podcasts & Instagram.",
            icon: Layers,
            colSpan: "md:col-span-1",
            gradient: "from-fuchsia-500/20 via-pink-500/10 to-transparent",
            tag: "Versatility",
        },
        {
            title: "Curated Designer Color Harmonies",
            desc: "Vibrant, Sunset, Ocean, Neon, Monochrome, and Forest colorways engineered specifically to cut through the sea of grey and black YouTube interfaces.",
            icon: Palette,
            colSpan: "md:col-span-2",
            gradient: "from-pink-500/20 via-violet-500/10 to-transparent",
            tag: "Color Theory",
        },
    ];

    const values = [
        {
            title: "Creator Empowerment",
            desc: "We build tools that democratize elite visual design so independent creators can compete with multi-million dollar studios.",
            icon: Rocket,
        },
        {
            title: "Relentless Speed",
            desc: "Creativity shouldn't be bottlenecked by slow tools. We optimize every millisecond of the generation and preview pipeline.",
            icon: Zap,
        },
        {
            title: "Continuous Innovation",
            desc: "We stay ahead of YouTube's algorithmic trends and continuously upgrade our AI models with next-gen image generation techniques.",
            icon: Cpu,
        },
        {
            title: "100% Commercial Freedom",
            desc: "Every thumbnail generated is yours to use commercially across all your channels, clients, and social platforms without royalties.",
            icon: ShieldCheck,
        },
    ];

    const faqs = [
        {
            q: "How does Thumblify help increase my YouTube click-through rate (CTR)?",
            a: "Thumblify combines deep learning image models with proven visual marketing principles. It optimizes for visual contrast, readable typography at small resolutions (especially on mobile), emotional facial hooks, and saturated palettes that outshine neighboring videos in the YouTube recommendation algorithm.",
        },
        {
            q: "Do I need graphic design or Photoshop experience?",
            a: "None whatsoever! You just provide your video title or concept, pick your preferred style, and our AI constructs a professional-grade thumbnail in seconds. You can easily tweak prompts and re-generate whenever needed.",
        },
        {
            q: "Can I generate thumbnails for YouTube Shorts, Reels, and TikTok?",
            a: "Yes! Thumblify natively supports 16:9 for YouTube standard videos, 9:16 for vertical Shorts/TikTok/Reels, and 1:1 square format for community posts and podcasts.",
        },
        {
            q: "What makes Thumblify different from generic AI image generators?",
            a: "General image generators produce artistic images with messy text, poor contrast, and layouts that look terrible when scaled down to a smartphone thumbnail. Thumblify is specifically engineered for YouTube video marketing with bold focal hierarchy, text overlays, and an exclusive live YouTube feed preview simulator.",
        },
        {
            q: "Are the generated thumbnails copyright and royalty-free?",
            a: "Yes. All thumbnails generated on Thumblify are 100% royalty-free for both personal and commercial use on your channels, brand accounts, and client projects.",
        },
        {
            q: "Can I preview how my thumbnail looks on the YouTube homepage before publishing?",
            a: "Absolutely! Our built-in YouTube Preview tool lets you place your generated thumbnail directly inside a realistic YouTube browse grid, switching between dark and light modes to verify your CTR dominance before you publish.",
        },
    ];

    // Filter showcase thumbnails
    const categories = ["All", "Bold & Graphic", "Photorealistic"];
    const filteredThumbnails = selectedCategory === "All"
        ? dummyThumbnails
        : dummyThumbnails.filter((t) => t.style.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <div className="relative min-h-screen overflow-hidden text-white font-poppins selection:bg-pink-600 selection:text-white pb-24">
            {/* Ambient Backdrops */}
            <SoftBackdrop />
            <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-pink-600/20 blur-[160px] rounded-full -z-10" />
            <div className="pointer-events-none absolute top-[30%] -left-32 w-[500px] h-[500px] bg-purple-600/15 blur-[180px] rounded-full -z-10" />
            <div className="pointer-events-none absolute top-[60%] -right-32 w-[600px] h-[600px] bg-pink-600/15 blur-[180px] rounded-full -z-10" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32">
                {/* 1. Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Glowing pill badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 backdrop-blur-md text-pink-300 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-pink-500/10">
                        <span className="flex h-2 w-2 rounded-full bg-pink-500 animate-ping" />
                        <span>The Story Behind Thumblify</span>
                        <span className="text-pink-400/60">•</span>
                        <span className="text-pink-200">Reinventing Thumbnail Creation</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.15] text-white">
                        Engineered for{" "}
                        <span className="move-gradient px-3 rounded-2xl text-white inline-block">Clicks.</span>
                        <br />
                        Powered by Advanced AI.
                    </h1>

                    <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        We built Thumblify to eliminate the barrier between great video content and the click-through rates it deserves. Turn prompts and titles into viral, scroll-stopping thumbnails in seconds.
                    </p>

                    {/* Hero Buttons */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <button
                            onClick={() => navigate("/generate")}
                            className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-pink-600/30 hover:scale-105 active:scale-95"
                        >
                            <span>Generate Thumbnail</span>
                            <ArrowRight size={18} />
                        </button>

                        <button
                            onClick={() => navigate("/preview")}
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-pink-500/50 text-slate-200 font-medium px-7 py-3.5 rounded-full transition-all duration-300 backdrop-blur-lg hover:scale-105 active:scale-95"
                        >
                            <Play size={16} className="text-pink-400 fill-pink-400" />
                            <span>Preview in YouTube Feed</span>
                        </button>
                    </div>
                </motion.div>

                {/* 2. Key Metrics & Impact Numbers */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                >
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={i}
                                className="group relative rounded-2xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl hover:border-pink-500/50 hover:bg-white/[0.04] transition-all duration-300 shadow-xl overflow-hidden"
                            >
                                <div className="absolute -top-12 -right-12 size-28 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/25 transition-all duration-500" />
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex size-11 items-center justify-center rounded-xl bg-pink-500/15 border border-pink-500/30 text-pink-400 group-hover:scale-110 transition-transform duration-300">
                                        <Icon size={22} />
                                    </div>
                                    <span className="text-[11px] font-medium text-pink-400/90 bg-pink-500/10 px-2.5 py-0.5 rounded-full border border-pink-500/20">
                                        Verified
                                    </span>
                                </div>
                                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-1 group-hover:text-pink-300 transition-colors">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium text-slate-300 mb-1">{stat.label}</div>
                                <div className="text-xs text-slate-400">{stat.change}</div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* 3. The Problem & Solution: Why We Built Thumblify */}
                <div className="mt-32">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-semibold uppercase tracking-widest text-pink-400 bg-pink-950/70 border border-pink-800/80 px-4 py-1.5 rounded-full">
                            The Paradigm Shift
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-bold mt-4 tracking-tight">
                            Why Creators Are Ditching The Old Workflow
                        </h2>
                        <p className="mt-3 text-slate-300 text-sm sm:text-base">
                            YouTube algorithms decide the fate of your video within the first 10,000 impressions. Here is how Thumblify transforms your channel's growth trajectory.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        {/* The Traditional Way */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-3xl border border-red-500/20 bg-red-950/10 p-8 sm:p-10 backdrop-blur-xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/20 border border-red-500/30 text-red-400">
                                        <XCircle size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">The Old Thumbnail Grind</h3>
                                        <p className="text-xs text-red-300">Slow, expensive, and unpredictable</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {comparisonItems.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3.5 rounded-xl bg-black/40 border border-red-500/10">
                                            <XCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                                            <p className="text-sm text-slate-300">{item.old}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-red-500/10 flex items-center justify-between text-xs text-red-300/80">
                                <span>Typical result: 2% – 4% CTR</span>
                                <span className="font-semibold text-red-400">Hours wasted</span>
                            </div>
                        </motion.div>

                        {/* The Thumblify Way */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative rounded-3xl border border-pink-500/40 bg-gradient-to-b from-pink-950/30 to-slate-950/60 p-8 sm:p-10 backdrop-blur-2xl shadow-2xl shadow-pink-600/10 flex flex-col justify-between overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-10 items-center justify-center rounded-xl bg-pink-500/20 border border-pink-500/40 text-pink-400">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">The Thumblify Advantage</h3>
                                            <p className="text-xs text-pink-300">Fast, scientific, and engagement-driven</p>
                                        </div>
                                    </div>
                                    <span className="hidden sm:inline-block bg-pink-600/30 text-pink-300 text-xs px-3 py-1 rounded-full border border-pink-500/30 font-medium">
                                        Supercharged
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    {comparisonItems.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-pink-500/20 shadow-sm hover:border-pink-500/40 transition">
                                            <CheckCircle2 size={18} className="text-pink-400 shrink-0 mt-0.5" />
                                            <p className="text-sm text-slate-200 font-medium">{item.thumblify}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-pink-500/20 flex items-center justify-between text-xs text-pink-300">
                                <span>Target result: 8% – 15%+ CTR</span>
                                <span className="font-semibold text-pink-400">Ready in seconds</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* 4. How It Works (Step-by-Step Pipeline) */}
                <div className="mt-36">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-semibold uppercase tracking-widest text-pink-400 bg-pink-950/70 border border-pink-800/80 px-4 py-1.5 rounded-full">
                            Workflow Pipeline
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-bold mt-4 tracking-tight">
                            From Video Concept to Viral Thumbnail in 4 Steps
                        </h2>
                        <p className="mt-3 text-slate-300 text-sm sm:text-base">
                            Designed for zero friction. No layers to merge, no complicated software installations.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {howItWorksSteps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="group relative rounded-2xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl hover:border-pink-500/50 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-4xl font-extrabold text-pink-500/30 group-hover:text-pink-500/60 transition-colors">
                                                {step.step}
                                            </span>
                                            <div className="flex size-10 items-center justify-center rounded-xl bg-pink-600/15 border border-pink-600/30 text-pink-400 group-hover:scale-110 transition-transform">
                                                <Icon size={20} />
                                            </div>
                                        </div>

                                        <span className="text-[11px] font-semibold tracking-wider uppercase text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded-md border border-pink-500/20">
                                            {step.badge}
                                        </span>

                                        <h3 className="text-lg font-bold text-white mt-3 mb-2 group-hover:text-pink-300 transition-colors">
                                            {step.title}
                                        </h3>

                                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs text-slate-400 group-hover:text-pink-300 transition-colors">
                                        <span>Next Step</span>
                                        <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* 5. Bento Grid: Core Innovation & Features */}
                <div className="mt-36">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-semibold uppercase tracking-widest text-pink-400 bg-pink-950/70 border border-pink-800/80 px-4 py-1.5 rounded-full">
                            Under the Hood
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-bold mt-4 tracking-tight">
                            Built with Cutting-Edge AI & Marketing Science
                        </h2>
                        <p className="mt-3 text-slate-300 text-sm sm:text-base">
                            Every feature is crafted to maximize viewer engagement and streamline your production schedule.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {bentoFeatures.map((bento, idx) => {
                            const Icon = bento.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className={`${bento.colSpan} relative rounded-3xl border border-white/10 bg-gradient-to-br ${bento.gradient} bg-slate-950/80 p-8 sm:p-10 backdrop-blur-2xl hover:border-pink-500/50 transition-all duration-300 overflow-hidden group shadow-xl`}
                                >
                                    <div className="absolute top-0 right-0 -mr-10 -mt-10 size-44 rounded-full bg-pink-600/10 blur-3xl group-hover:bg-pink-600/25 transition-all duration-500" />

                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex size-12 items-center justify-center rounded-2xl bg-pink-500/20 border border-pink-500/30 text-pink-400 group-hover:scale-110 transition-transform">
                                            <Icon size={26} />
                                        </div>
                                        <span className="text-xs font-medium text-pink-300 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
                                            {bento.tag}
                                        </span>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                                        {bento.title}
                                    </h3>

                                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                                        {bento.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* 6. Interactive Visual Showcase / Sample Thumbnails */}
                <div className="mt-36">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-widest text-pink-400 bg-pink-950/70 border border-pink-800/80 px-4 py-1.5 rounded-full">
                                Proven Results
                            </span>
                            <h2 className="text-3xl sm:text-5xl font-bold mt-4 tracking-tight">
                                Explore Live Generated Thumbnails
                            </h2>
                            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-xl">
                                Real samples generated using Thumblify's AI styles and color palettes. Click any card to launch the generator.
                            </p>
                        </div>

                        {/* Filter Tabs */}
                        <div className="flex items-center gap-2 p-1.5 bg-slate-950/80 border border-white/10 rounded-2xl backdrop-blur-xl shrink-0 self-start md:self-auto">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${selectedCategory === cat
                                            ? "bg-pink-600 text-white shadow-lg shadow-pink-600/30"
                                            : "text-slate-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredThumbnails.map((item, idx) => (
                            <motion.div
                                key={item._id || idx}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ y: -6 }}
                                className="group relative rounded-2xl border border-white/10 bg-slate-950/70 overflow-hidden backdrop-blur-xl hover:border-pink-500/50 transition-all duration-300 shadow-xl"
                            >
                                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                                    <img
                                        src={item.image_url}
                                        alt={item.title}
                                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <span className="bg-black/60 backdrop-blur-md text-[11px] font-medium text-pink-300 border border-pink-500/30 px-2.5 py-1 rounded-full">
                                            {item.style}
                                        </span>
                                        <span className="bg-black/60 backdrop-blur-md text-[11px] font-medium text-slate-300 border border-white/10 px-2.5 py-1 rounded-full uppercase">
                                            {item.aspect_ratio || "16:9"}
                                        </span>
                                    </div>

                                    <button
                                        onClick={() => navigate("/generate")}
                                        className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-pink-600 hover:bg-pink-500 text-white p-2.5 rounded-full shadow-lg flex items-center gap-1.5 text-xs font-medium"
                                        title="Create similar thumbnail"
                                    >
                                        <span>Remix</span>
                                        <ExternalLink size={14} />
                                    </button>
                                </div>

                                <div className="p-5">
                                    <h4 className="text-base font-semibold text-white line-clamp-1 group-hover:text-pink-300 transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="mt-1 text-xs text-slate-400 line-clamp-1">
                                        Prompt: {item.user_prompt || "AI-optimized YouTube thumbnail visual"}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <Link
                            to="/generate"
                            className="inline-flex items-center gap-2 text-sm text-pink-400 hover:text-pink-300 font-medium group transition"
                        >
                            <span>Open generator to view all styles & create your own</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* 7. Our Mission & Core Values */}
                <div className="mt-36">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-semibold uppercase tracking-widest text-pink-400 bg-pink-950/70 border border-pink-800/80 px-4 py-1.5 rounded-full">
                            Our Commitment
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-bold mt-4 tracking-tight">
                            The Principles Driving Thumblify
                        </h2>
                        <p className="mt-3 text-slate-300 text-sm sm:text-base">
                            Built by passionate creators and engineers who care deeply about creator independence and visual storytelling.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((val, idx) => {
                            const Icon = val.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl hover:border-pink-500/40 transition-all duration-300 group"
                                >
                                    <div className="flex size-11 items-center justify-center rounded-xl bg-pink-600/15 border border-pink-600/30 text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                                        <Icon size={22} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                                        {val.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                        {val.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* 8. Interactive Frequently Asked Questions */}
                <div className="mt-36 max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs font-semibold uppercase tracking-widest text-pink-400 bg-pink-950/70 border border-pink-800/80 px-4 py-1.5 rounded-full">
                            Got Questions?
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-bold mt-4 tracking-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-3 text-slate-300 text-sm sm:text-base">
                            Everything you need to know about Thumblify, licensing, and maximizing your click-through rate.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => {
                            const isOpen = openFaqIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className="rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-pink-500/40"
                                >
                                    <button
                                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                                        className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                                    >
                                        <span className="text-base sm:text-lg font-medium text-white hover:text-pink-300 transition-colors">
                                            {faq.q}
                                        </span>
                                        <div className={`p-2 rounded-xl bg-white/5 border border-white/10 text-pink-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-pink-500/20 border-pink-500/40" : ""}`}>
                                            <ChevronDown size={18} />
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 border-t border-white/5 leading-relaxed">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 9. High-Impact Call to Action Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-36 relative rounded-3xl border border-pink-500/40 bg-gradient-to-r from-pink-950/60 via-purple-950/40 to-slate-950/80 p-8 sm:p-14 text-center backdrop-blur-3xl shadow-2xl shadow-pink-600/20 overflow-hidden"
                >
                    <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-600/30 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-600/30 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider">
                            <Rocket size={14} />
                            <span>Transform Your Channel Today</span>
                        </div>

                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                            Ready to 10x Your Video <span className="move-gradient px-3 rounded-2xl text-white inline-block">Engagement?</span>
                        </h2>

                        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                            Stop letting great videos get buried by mediocre thumbnails. Join creators using Thumblify to command attention and skyrocket their views.
                        </p>

                        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                            <button
                                onClick={() => navigate("/generate")}
                                className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-pink-600/30 hover:scale-105 active:scale-95"
                            >
                                <span>Create Your Thumbnail Now</span>
                                <ArrowRight size={18} />
                            </button>

                            <button
                                onClick={() => navigate("/contact")}
                                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-pink-500/50 text-slate-200 font-medium px-7 py-4 rounded-full transition-all duration-300 backdrop-blur-lg hover:scale-105 active:scale-95"
                            >
                                <HeartHandshake size={18} className="text-pink-400" />
                                <span>Get in Touch</span>
                            </button>
                        </div>

                        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                            <span className="flex items-center gap-1.5">
                                <CheckCircle2 size={14} className="text-pink-400" /> No credit card required
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircle2 size={14} className="text-pink-400" /> High-resolution HD export
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircle2 size={14} className="text-pink-400" /> Commercial rights included
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
