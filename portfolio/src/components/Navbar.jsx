
import { useState } from "react";
import { FiMenu , FiX } from "react-icons/fi";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    const navItems = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "contact"
    ];

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl 
        bg-[#0f1a1f]/60 border-b border-[#305853]/30">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <a href="#" className="text-xl font-bold 
                bg-gradient-to-r from-[#B06821] via-[#9E2C21] to-[#305853] 
                bg-clip-text text-transparent">
                    Bharath.dev
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 text-sm text-[#C2B0A3]">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            onClick={() => setActive(item)}
                            className={`relative capitalize transition
                                ${active === item ? "text-white" : ""}
                                hover:text-[#B06821]`}
                        >
                            {item}

                            {/* underline */}
                            {active === item && (
                                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#B06821]"></span>
                            )}
                        </a>
                    ))}
                </div>

             
                {/* <button
                    className="md:hidden text-[#C2B0A3]"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button> */}
                <button
    className="md:hidden text-[#C2B0A3] text-2xl"
    onClick={() => setOpen(!open)}
>
    {open ? <FiX /> : <FiMenu />}
</button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-[#C2B0A3]">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            onClick={() => {
                                setActive(item);
                                setOpen(false);
                            }}
                            className={`relative capitalize transition
                                ${active === item ? "text-white" : ""}
                                hover:text-[#B06821]`}
                        >
                            {item}

                            {/* underline */}
                            {active === item && (
                                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#B06821]"></span>
                            )}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}