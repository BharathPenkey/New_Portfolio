import car from "../assets/car.png"
import threed from "../assets/3d.png"
import insta from "../assets/insta.png"
import bookstore from "../assets/bookstore.png"
const projects = [
    {
        title: "Book Store Application",
        desc: "MERN stack application ",
        img: bookstore,
        tech: ["React.js", "Node.js", "MongoDB", "Cloudinary", "Tailwind", "Express.js"],
        codeLink: "https://github.com/BharathPenkey/Book_Store_Application",
        liveLink: "https://bookstore-application-mcsc.onrender.com/",
    },

    {
        title: "3D Environment",
        desc: "Immersive 3D experience using Three.js and React",
        img: threed,
        tech: ["React", "Three.js", "Blender"],
        codeLink: "https://github.com/BharathPenkey/3D-Environment",
        liveLink: "https://64cf6c832be4dd36e0df54e9--exquisite-snickerdoodle-a0c1d0.netlify.app/",
    },
    {
        title: "Insta Clone",
        desc: "Social media app with posts, likes, and Cloudinary uploads",
        img: insta,
        tech: ["React", "Node.js", "Cloudinary"],
        codeLink: "https://github.com/BharathPenkey/insta_clone",
        liveLink: "https://insta-clone-app-einr.onrender.com",

    },
    {
        title: "Car Rental App",
        desc: "MERN stack application with authentication & booking system",
        img: car,
        tech: ["React", "Node.js", "MongoDB"],
        codeLink: "https://github.com/BharathPenkey/car-rental-application",
        liveLink: "https://bookstore-application-mcsc.onrender.com/",

    }
    // {
    //   title: "3D Environment",
    //   desc: "Immersive 3D experience using Three.js and React",
    //   img: "https://placehold.co/400",
    //   tech: ["React", "Three.js"]
    // },
    // {
    //   title: "Insta Clone",
    //   desc: "Social media app with posts, likes, and Cloudinary uploads",
    //   img: "https://placehold.co/400",
    //   tech: ["React", "Node.js", "Cloudinary"]
    // }
];

export default function Projects() {
    return (
        <section id="projects" className="max-w-7xl mx-auto px-6 py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#B06821]/10 via-[#9E2C21]/10 to-[#305853]/10 blur-2xl opacity-50"></div>

            <h2 className="relative text-3xl font-semibold mb-14 
        bg-gradient-to-r from-[#B06821] via-[#9E2C21] to-[#305853] 
        bg-clip-text text-transparent">
                Featured Projects
            </h2>

            <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                {projects.map((p, i) => (
                    <div
                        key={i}
                        className="group relative rounded-2xl overflow-hidden
            bg-gradient-to-br from-[#305853]/20 via-[#1B2A30]/30 to-[#511B18]/30
            border border-[#305853]/30
            backdrop-blur-xl
            shadow-[0_10px_40px_rgba(0,0,0,0.5)]
            hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)]
            transition duration-500"
                    >

                        <div className="absolute inset-0 rounded-2xl 
              bg-gradient-to-r from-[#B06821]/20 to-[#9E2C21]/20 
              opacity-0 group-hover:opacity-100 blur-xl transition">
                        </div>

                        <div className="relative overflow-hidden">
                            <img
                                src={p.img}
                                alt={p.title}
                                className="w-full h-52 object-cover 
                transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 
    group-hover:opacity-100 transition flex items-center justify-center gap-4">

                                <a
                                    href={p.codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-lg border border-[#B06821] text-[#B06821]
      hover:bg-[#B06821] hover:text-white transition"
                                >
                                    Code
                                </a>

                                <a
                                    href={p.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-lg 
      bg-gradient-to-r from-[#9E2C21] to-[#B06821]
      hover:opacity-90 transition text-white"
                                >
                                    Live
                                </a>

                            </div>
                        </div>

                        <div className="p-5 relative">

                            <h3 className="text-lg font-semibold text-[#E6D3C3]">
                                {p.title}
                            </h3>

                            <p className="text-[#C2B0A3] text-sm mt-2">
                                {p.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {p.tech.map((t, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs px-3 py-1 rounded-full
                    bg-[#1B2A30]/60 border border-[#305853]/40
                    text-[#B06821] shadow-[0_0_8px_rgba(176,104,33,0.3)]"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <span className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full 
                bg-[#B06821] opacity-0 group-hover:opacity-100 
                shadow-[0_0_10px_#B06821] transition">
                            </span>

                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}