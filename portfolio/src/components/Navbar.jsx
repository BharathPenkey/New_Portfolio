
export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl 
      bg-[#0f1a1f]/60 border-b border-[#305853]/30">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <a href="#" className="text-xl font-bold 
          bg-gradient-to-r from-[#B06821] via-[#9E2C21] to-[#305853] 
          bg-clip-text text-transparent">
                    Bharath.dev
                </a>


                <div className="flex gap-6 text-sm text-[#C2B0A3]">

                    <a href="#home" className="hover:text-[#B06821] transition">
                        Home
                    </a>
                    <a href="#about" className="hover:text-[#B06821] transition">
                        About
                    </a>

                    <a href="#skills" className="hover:text-[#B06821] transition">
                        Skills
                    </a>
                    <a href="#experience" className="hover:text-[#9E2C21] transition">
                        Experience
                    </a>
                    <a href="#projects" className="hover:text-[#305853] transition">
                        Projects
                    </a>


                    <a href="#contact" className="hover:text-[#B06821] transition">
                        Contact
                    </a>

                </div>
            </div>
        </nav>
    );
}