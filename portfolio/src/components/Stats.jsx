export default function About() {
    return (
        <section id="about" className="max-w-5xl mx-auto px-6 py-20 relative scroll-mt-24">

            <div className="absolute inset-0 bg-gradient-to-r from-[#B06821]/10 via-[#9E2C21]/10 to-[#305853]/10 blur-2xl opacity-40"></div>


            <h2 className="relative text-3xl font-semibold mb-6 
        bg-gradient-to-r from-[#B06821] via-[#9E2C21] to-[#305853] 
        bg-clip-text text-transparent">
                About Me
            </h2>

            <div className="relative p-8 rounded-2xl
        bg-gradient-to-br from-[#305853]/20 via-[#1B2A30]/30 to-[#511B18]/30
        border border-[#305853]/30
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,0.5)]">

                <div className="absolute inset-0 rounded-2xl 
          bg-gradient-to-r from-[#B06821]/10 to-[#9E2C21]/10 
          opacity-30 blur-xl"></div>

                <p className="relative text-[#C2B0A3] leading-relaxed text-lg">

                    I am a <span className="font-semibold text-[#E6D3C3]">Full Stack Developer</span> with
                    <span className="font-semibold text-[#E6D3C3]"> 2+ years of experience</span> specializing in the
                    <span className="font-semibold text-[#E6D3C3]"> MERN stack</span>.

                    <br /><br />

                    I have built <span className="font-semibold text-[#E6D3C3]">scalable SaaS platforms</span>,
                    dashboards, and workflow automation systems focused on performance, clean architecture,
                    and reusable components.

                    <br /><br />

                    I am passionate about writing clean code, optimizing performance, and building
                    user-friendly interfaces that deliver real-world impact.

                </p>
                <span className="absolute top-4 right-4 w-2 h-2 rounded-full 
          bg-[#B06821]/70 shadow-[0_0_10px_#B06821]">
                </span>

            </div>
        </section>
    );
}