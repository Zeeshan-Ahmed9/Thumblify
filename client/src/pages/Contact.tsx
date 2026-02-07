import { motion } from "motion/react";
import { Mail, Phone, MapPin, Github } from "lucide-react";
import SoftBackdrop from "../components/SoftBackdrop";

// =====================================================
//  CONTACT PAGE (Display Only — No Form / No Backend)
//  Pink + Black Modern Glass UI
// =====================================================

export default function Contact() {
    return (
        <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden text-white">
            <SoftBackdrop />

            {/* Main Glass Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-3xl"
            >
                <div
                    className="
            rounded-3xl
            p-12
            backdrop-blur-2xl
            bg-white/5
            border border-pink-500/30
            shadow-2xl
            shadow-pink-500/20
            space-y-10
          "
                >
                    {/* Heading */}
                    <div className="text-center space-y-3">
                        <motion.h1
                            className="
        text-4xl md:text-5xl font-bold
        bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600
        bg-[length:200%_200%]
        bg-clip-text text-transparent
    "
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            Contact Us
                        </motion.h1>


                        <p className="text-gray-400 text-sm md:text-base">
                            Let’s build something amazing together
                        </p>
                    </div>

                    {/* Info Grid */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Email */}
                        <InfoItem
                            icon={<Mail />}
                            label="Email"
                            value="zeeshanahmed71210@gmail.com"
                        />

                        {/* Phone */}
                        <InfoItem
                            icon={<Phone />}
                            label="Phone"
                            value="+92 300 1234567"
                        />

                        {/* Location */}
                        <InfoItem
                            icon={<MapPin />}
                            label="Location"
                            value="Pakistan"
                        />

                        <a
                            href="https://github.com/Zeeshan-Ahmed9"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InfoItem
                                icon={<Github />}
                                label="GitHub"
                                value="Zeeshan-Ahmed9"
                            />
                        </a>

                    </div>

                    {/* Footer */}
                    <div className="text-center pt-6 border-t border-white/10 text-xs text-gray-500">
                        © 2026 Thumblify — All Rights Reserved
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

// =====================================================
// Small reusable info component
// =====================================================

function InfoItem({ icon, label, value }: any) {
    return (
        <motion.div
            whileHover={{ scale: 1.04 }}
            className="
        flex items-center gap-4
        p-5
        rounded-2xl
        bg-pink-500/10
        border border-pink-500/20
        hover:bg-pink-500/20
        transition
      "
        >
            <div className="text-pink-400">{icon}</div>

            <div>
                <p className="text-xs text-gray-400">{label}</p>
                <p className="text-sm font-medium">{value}</p>
            </div>
        </motion.div>
    );
}
