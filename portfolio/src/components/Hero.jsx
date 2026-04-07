import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../assets/profileIcon.png";

export default function Hero() {
    const name = "Penkey Bharath".split("");
    const roles = ["Front-end Developer", "Back-end Developer", "Full Stack Developer"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [showRoles, setShowRoles] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowRoles(true);
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);
    // Rotate roles every 2.5s
    useEffect(() => {
        if (!showRoles) return;
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [showRoles]);

    // Framer Motion variants for letters
    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
    };

    const letter = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <section
            id="home"
            className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-12"
        >
            {/* Background blur */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-[#B06821]/20 blur-[120px]"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#9E2C21]/20 blur-[140px]"></div>
            </div>

     
            <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1"
            >
                <div className="relative bg-gradient-to-br from-[#305853]/20 via-[#1B2A30]/30 to-[#511B18]/30 backdrop-blur-xl border border-[#305853]/30 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(176,104,33,0.25)]">
                    <div className="absolute top-4 right-4 flex items-center gap-2 text-sm text-[#C2B0A3]">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Available for work
                    </div>

                   
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
                        Hello, I’m{" "}
                        <motion.div
                            className="bg-gradient-to-r from-[#B06821] via-[#9E2C21] to-[#305853] bg-clip-text text-transparent"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            {name.map((char, idx) => (
                                <motion.span key={idx} variants={letter} className="inline-block">
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </h1>

                    {showRoles && (
                        <div className="h-10 md:h-12 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roles[roleIndex]}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-[#E6D3C3] text-lg md:text-xl block"
                                >
                                    {roles[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    )}
                    <p className="mt-2 text-[#C2B0A3]">
                        Passionate about crafting seamless web experiences, I specialize in building full-stack applications that solve real-world problems. My focus is on performance, clean code, and delivering value through technology.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="/BharathCV.pdf"
                            download
                            className="group px-6 py-3 rounded-xl bg-gradient-to-r from-[#9E2C21] to-[#B06821] text-white font-medium transition duration-300 hover:scale-105 shadow-[0_0_25px_rgba(176,104,33,0.5)]"
                        >
                            Download Resume
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-xl border border-[#305853]/50 text-[#D1FAF5] hover:bg-[#305853]/20 transition duration-300"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Profile */}
            <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 flex justify-center relative"
            >
                <div className="absolute w-80 h-80 bg-[#B06821]/30 rounded-full blur-[120px]"></div>
                <div className="absolute w-72 h-72 bg-[#9E2C21]/30 rounded-full blur-[140px]"></div>

                <div className="relative p-2 rounded-3xl bg-gradient-to-br from-[#1B2A30]/40 to-[#511B18]/40 backdrop-blur-xl border border-[#305853]/30 shadow-[0_0_50px_rgba(176,104,33,0.3)] hover:scale-105 transition duration-500">
                    <img src={profile} alt="profile" className="w-72 md:w-96 rounded-2xl" />
                    <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#B06821] shadow-[0_0_12px_#B06821] animate-pulse"></span>
                </div>
            </motion.div>
        </section>
    );
}