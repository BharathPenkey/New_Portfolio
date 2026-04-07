export default function Contact() {
    return (
        <section id="contact" className="max-w-3xl mx-auto px-6 py-20 text-center">

         
            <h2 className="text-3xl font-semibold mb-4 
            bg-gradient-to-r from-[#B06821] via-[#9E2C21] to-[#305853] 
            bg-clip-text text-transparent">
                Get In Touch
            </h2>

            <p className="text-[#C2B0A3] mb-10">
                I’m open to opportunities and collaborations. Feel free to reach out.
            </p>

      
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-[#E6D3C3]">

             
                <a
                //  href="mailto:penkybharath@gmail.com?subject=Opportunity from your portfolio&body=Hi Bharath,%0D%0A%0D%0AI saw your portfolio and would like to connect with you."

                    href="mailto:penkybharath@gmail.com"
                    className="group relative text-lg cursor-pointer"
                >
                    <span className="transition duration-300 group-hover:text-[#B06821]">
                        penkybharath@gmail.com
                    </span>

                    {/* underline animation */}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#B06821] transition-all duration-300 group-hover:w-full"></span>
                </a>
                  <span className="hidden md:block text-[#555]">|</span>

           
                <a
                    href="https://www.linkedin.com/in/bharath-penkey-14434224a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative text-lg cursor-pointer"
                >
                    <span className="transition duration-300 group-hover:text-[#B06821]">
                        LinkedIn
                    </span>

                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#B06821] transition-all duration-300 group-hover:w-full"></span>
                </a>
                  <span className="hidden md:block text-[#555]">|</span>

                {/* GitHub */}
                <a
                    href="https://github.com/BharathPenkey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative text-lg cursor-pointer"
                >
                    <span className="transition duration-300 group-hover:text-[#B06821]">
                        GitHub
                    </span>

                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#B06821] transition-all duration-300 group-hover:w-full"></span>
                </a>

            </div>
        </section>
    );
}