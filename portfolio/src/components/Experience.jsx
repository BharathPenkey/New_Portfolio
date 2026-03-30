export default function Experience() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20 relative" id="experience">

            <div className="absolute inset-0 bg-gradient-to-r from-[#B06821]/10 via-[#9E2C21]/10 to-[#305853]/10 blur-2xl opacity-50"></div>

            <h2 className="relative text-3xl font-semibold mb-10 
        bg-gradient-to-r from-[#B06821] via-[#9E2C21] to-[#305853] 
        bg-clip-text text-transparent">
                Work Experience
            </h2>

            <div className="relative p-8 rounded-2xl
        bg-gradient-to-br from-[#305853]/20 via-[#1B2A30]/30 to-[#511B18]/30
        border border-[#305853]/30
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,0.5)]">


                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#B06821]/20 to-[#9E2C21]/20 opacity-20 blur-xl"></div>


                <div className="relative mb-6">
                    <h3 className="text-xl font-semibold text-[#E6D3C3]">
                        Full Stack Developer
                    </h3>
                    <p className="text-[#C2B0A3] text-sm">
                        Nov 2023 – Present · Mobius Networks Pvt. Ltd., Hyderabad
                    </p>
                </div>


                <div className="relative mb-8">
                    <h4 className="text-lg font-semibold text-[#B06821] mb-3">
                        XPX Platform (Enterprise SaaS – DTaaS Ecosystem)
                    </h4>

                    <ul className="space-y-2 text-[#C2B0A3] text-sm leading-relaxed list-disc pl-5">

                        <li>
                            Led design and documentation of a <span className="text-[#E6D3C3]">10-module enterprise SaaS platform</span>.
                        </li>

                        <li>
                            Contributed to core modules including <span className="text-[#E6D3C3]">Voxa, Moscribe, CX Delight, RunRun</span>.
                        </li>

                        <li>
                            Built <span className="text-[#E6D3C3]">interactive dashboards</span> using React, Node.js, and Apache ECharts.
                        </li>

                        <li>
                            Delivered <span className="text-[#E6D3C3]">60–70% ownership of Voxa</span>, a multi-channel engagement system.
                        </li>

                        <li>
                            Developed backend workflows for <span className="text-[#E6D3C3]">campaign automation</span> (SMS, Email, Social).
                        </li>

                        <li>
                            Implemented <span className="text-[#E6D3C3]">cron-based scheduling</span> for automated campaigns.
                        </li>

                        <li>
                            Built reusable UI components improving <span className="text-[#E6D3C3]">development speed & consistency</span>.
                        </li>

                        <li>
                            Created a Node.js service for <span className="text-[#E6D3C3]">UML → schema generation automation</span>.
                        </li>

                        <li>
                            Optimized performance using <span className="text-[#E6D3C3]">lazy loading & code splitting</span>.
                        </li>

                    </ul>
                </div>


                <div className="relative">
                    <h4 className="text-lg font-semibold text-[#9E2C21] mb-3">
                        AOF (Agent Orchestration Framework)
                    </h4>

                    <ul className="space-y-2 text-[#C2B0A3] text-sm leading-relaxed list-disc pl-5">

                        <li>
                            Designed <span className="text-[#E6D3C3]">multi-turn chatbot systems</span> with context-aware conversations.
                        </li>

                        <li>
                            Integrated APIs for <span className="text-[#E6D3C3]">real-time validation and workflow execution</span>.
                        </li>

                        <li>
                            Built reusable <span className="text-[#E6D3C3]">modular conversation flows</span> with error handling.
                        </li>

                        <li>
                            Developed <span className="text-[#E6D3C3]">UML-based hierarchical visualization tools</span>.
                        </li>

                        <li>
                            Automated backend operations using <span className="text-[#E6D3C3]">Flowise agents</span>.
                        </li>

                        <li>
                            Created <span className="text-[#E6D3C3]">real-time monitoring dashboards</span> for APIs and agents.
                        </li>

                    </ul>
                </div>


                <span className="absolute top-4 right-4 w-2 h-2 rounded-full 
          bg-[#B06821] shadow-[0_0_12px_#B06821]"></span>

            </div>
        </section>
    );
}