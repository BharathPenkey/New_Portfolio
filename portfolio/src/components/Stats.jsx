export default function Stats() {
    return (
        <div className="max-w-5xl mx-auto px-6 mt-16 relative">

        
            <div className="absolute inset-0 bg-gradient-to-r from-[#B06821]/20 via-[#9E2C21]/20 to-[#305853]/20 blur-2xl opacity-60"></div>

         
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 
        bg-gradient-to-br from-[#305853]/20 via-[#1B2A30]/30 to-[#511B18]/30 
        backdrop-blur-xl border border-[#305853]/30 
        rounded-2xl p-6 
        shadow-[0_10px_50px_rgba(0,0,0,0.5)]">

        
                <div className="group relative p-6 rounded-xl transition duration-300 hover:scale-105">

                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B06821]/20 to-[#9E2C21]/20 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

                    <h2 className="relative text-3xl font-bold bg-gradient-to-r from-[#B06821] via-[#9E2C21] to-[#305853] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(176,104,33,0.6)]">
                        2+
                    </h2>

                    <p className="relative text-[#C2B0A3] mt-2">
                        Years Experience
                    </p>

               
                    <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#B06821] opacity-0 group-hover:opacity-100 shadow-[0_0_10px_#B06821] transition"></span>
                </div>

                <div className="group relative p-6 rounded-xl transition duration-300 hover:scale-105">

                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#9E2C21]/20 to-[#305853]/20 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

                    <h2 className="relative text-3xl font-bold bg-gradient-to-r from-[#9E2C21] via-[#B06821] to-[#305853] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(158,44,33,0.6)]">
                        5+
                    </h2>

                    <p className="relative text-[#C2B0A3] mt-2">
                        Projects Completed
                    </p>

                    <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#9E2C21] opacity-0 group-hover:opacity-100 shadow-[0_0_10px_#9E2C21] transition"></span>
                </div>

              
                <div className="group relative p-6 rounded-xl transition duration-300 hover:scale-105">

                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#305853]/20 to-[#B06821]/20 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

                    <h2 className="relative text-3xl font-bold bg-gradient-to-r from-[#305853] via-[#B06821] to-[#9E2C21] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(48,88,83,0.6)]">
                        B.Tech
                    </h2>

                    <p className="relative text-[#C2B0A3] mt-2">
                        Graduate
                    </p>

                    <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#305853] opacity-0 group-hover:opacity-100 shadow-[0_0_10px_#305853] transition"></span>
                </div>

            </div>
        </div>
    );
}