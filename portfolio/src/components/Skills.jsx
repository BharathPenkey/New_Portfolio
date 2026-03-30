
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,

} from "react-icons/fa";
import { SiMysql, SiPostgresql, SiPython, SiTypescript, SiNextdotjs } from "react-icons/si";

import {
    SiMongodb, SiExpress, SiTailwindcss, SiGit
} from "react-icons/si";

const skills = [
    // frontend
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    // backend 
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    // databases
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "SQL", icon: <SiMysql /> },
    //tools
    { name: "Git", icon: <SiGit /> },
    { name: "Python", icon: <SiPython /> },
];

export default function Skills() {
    return (
        <section id="skills" className="max-w-6xl mx-auto px-6 py-14 overflow-hidden">


            <h2 className="text-3xl font-semibold mb-8 
        bg-gradient-to-r from-[#B06821] via-[#9E2C21] to-[#305853] 
        bg-clip-text text-transparent">
                Skills
            </h2>

            <div className="relative overflow-hidden">

                <div className="flex gap-6 animate-scroll w-max">

                    {[...skills, ...skills].map((skill, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 px-5 py-3 rounded-xl whitespace-nowrap
              bg-gradient-to-br from-[#305853]/20 via-[#1B2A30]/30 to-[#511B18]/30
              border border-[#305853]/30
              backdrop-blur-lg
              text-[#E6D3C3]
              shadow-[0_5px_20px_rgba(0,0,0,0.4)]
              hover:scale-105 transition duration-300 group"
                        >

                            <span className="text-lg group-hover:scale-125 transition duration-300">
                                {skill.icon}
                            </span>

                            <span className="text-sm font-medium">
                                {skill.name}
                            </span>

                            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B06821]/20 to-[#9E2C21]/20 opacity-0 group-hover:opacity-100 blur-xl transition"></span>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}