
export default function Contact() {
    return (
        <section id="contact" className="max-w-5xl mx-auto px-6 py-20 relative">

            <div className="absolute inset-0 bg-gradient-to-r from-[#B06821]/10 via-[#9E2C21]/10 to-[#305853]/10 blur-2xl opacity-50"></div>

            <h2 className="relative text-3xl font-semibold mb-4 
        bg-gradient-to-r from-[#B06821] via-[#9E2C21] to-[#305853] 
        bg-clip-text text-transparent">
                Get In Touch
            </h2>

            <p className="relative text-[#C2B0A3] mb-10">
                Let’s connect and build something amazing together
            </p>


            <div className="relative grid md:grid-cols-3 gap-6">


                <a
                    href="mailto:penkybharath@gmail.com?subject=Opportunity from your portfolio&body=Hi Bharath,%0D%0A%0D%0AI saw your portfolio and would like to connect with you."
                    className="group relative p-6 rounded-xl
          bg-gradient-to-br from-[#305853]/20 via-[#1B2A30]/30 to-[#511B18]/30
          border border-[#305853]/30
          backdrop-blur-xl
          text-[#E6D3C3]
          shadow-[0_10px_40px_rgba(0,0,0,0.5)]
          hover:-translate-y-2 transition duration-300"
                >

                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B06821]/20 to-[#9E2C21]/20 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

                    <h3 className="relative font-semibold text-lg">Email</h3>
                    <p className="relative text-sm mt-2 text-[#C2B0A3] break-all">
                        penkybharath@gmail.com
                    </p>

                </a>

                <a
                    href="https://www.linkedin.com/in/bharath-penkey-14434224a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-6 rounded-xl
          bg-gradient-to-br from-[#305853]/20 via-[#1B2A30]/30 to-[#511B18]/30
          border border-[#305853]/30
          backdrop-blur-xl
          text-[#E6D3C3]
          shadow-[0_10px_40px_rgba(0,0,0,0.5)]
          hover:-translate-y-2 transition duration-300"
                >

                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#9E2C21]/20 to-[#305853]/20 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

                    <h3 className="relative font-semibold text-lg">LinkedIn</h3>
                    <p className="relative text-sm mt-2 text-[#C2B0A3]">
                        Connect professionally
                    </p>

                </a>

                <a
                    href="https://github.com/BharathPenkey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-6 rounded-xl
          bg-gradient-to-br from-[#305853]/20 via-[#1B2A30]/30 to-[#511B18]/30
          border border-[#305853]/30
          backdrop-blur-xl
          text-[#E6D3C3]
          shadow-[0_10px_40px_rgba(0,0,0,0.5)]
          hover:-translate-y-2 transition duration-300"
                >

                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#305853]/20 to-[#B06821]/20 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

                    <h3 className="relative font-semibold text-lg">GitHub</h3>
                    <p className="relative text-sm mt-2 text-[#C2B0A3]">
                        View my code & projects
                    </p>

                </a>

            </div>
        </section>
    );
}
