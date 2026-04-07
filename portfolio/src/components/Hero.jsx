import profile from "../assets/profileIcon.png";


import { motion } from "framer-motion";


export default function Hero() {
    return (
        <section id="home" className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-12">


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
                <div className="relative bg-gradient-to-br from-[#305853]/20 via-[#1B2A30]/30 to-[#511B18]/30 
          backdrop-blur-xl border border-[#305853]/30 rounded-3xl p-8 md:p-10 
          shadow-[0_0_40px_rgba(176,104,33,0.25)]">


                    <div className="absolute top-4 right-4 flex items-center gap-2 text-sm text-[#C2B0A3]">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Available for work
                    </div>


                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Hello, I’m{" "}
                        <span className="bg-gradient-to-r from-[#B06821] via-[#9E2C21] to-[#305853] 
              bg-clip-text text-transparent animate-pulse">
                            Bharath Penkey
                        </span>
                    </h1>


                    <p className="mt-4 text-[#E6D3C3] text-lg">
                        Full Stack Developer | MERN Stack Engineer
                    </p>


                    <p className="mt-2 text-[#C2B0A3]">
                        I build scalable SaaS platforms, dashboards, and high-performance web apps.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">

                        <a
                              href="/Penkey_BharathCV.pdf"   //  resumefrom public folder
                            download
                            className="group px-6 py-3 rounded-xl 
              bg-gradient-to-r from-[#9E2C21] to-[#B06821] 
              text-white font-medium 
              transition duration-300 hover:scale-105 
              shadow-[0_0_25px_rgba(176,104,33,0.5)]"
                        >
                            Download Resume
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-xl 
              border border-[#305853]/50 
              text-[#D1FAF5] 
              hover:bg-[#305853]/20 
              transition duration-300"
                        >
                            Contact Me
                        </a>

                    </div>
                </div>
            </motion.div>


            <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 flex justify-center relative"
            >


                <div className="absolute w-80 h-80 bg-[#B06821]/30 rounded-full blur-[120px]"></div>
                <div className="absolute w-72 h-72 bg-[#9E2C21]/30 rounded-full blur-[140px]"></div>

                <div className="relative p-2 rounded-3xl 
          bg-gradient-to-br from-[#1B2A30]/40 to-[#511B18]/40 
          backdrop-blur-xl border border-[#305853]/30 
          shadow-[0_0_50px_rgba(176,104,33,0.3)]
          hover:scale-105 transition duration-500">

                    <img
                        src={profile}
                        alt="profile"
                        className="w-72 md:w-96 rounded-2xl"
                    />


                    <span className="absolute top-3 right-3 w-2 h-2 rounded-full 
            bg-[#B06821] shadow-[0_0_12px_#B06821] animate-pulse">
                    </span>

                </div>
            </motion.div>

        </section>
    );
}