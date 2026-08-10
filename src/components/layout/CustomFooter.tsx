import { ArrowUpRight, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const footerLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Trayectoria", href: "#trayectoria" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Competencias", href: "#competencias" },
];

export const CustomFooter = () => {
    return (
        <footer className="bg-[#242424] text-white mt-5">
            <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6">
                {/* CTA */}
                <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                        Portafolio
                    </p>

                    <a
                        href="mailto:Jcamacho14@gmail.com"
                        className="
                            group
                            mt-5
                            flex
                            w-fit
                            items-center
                            gap-3
                            text-2xl
                            font-medium
                            tracking-tight
                            text-white
                            transition-colors
                            duration-300
                            hover:text-white/70
                            sm:text-4xl
                        "
                    >
                        David Camacho
                        <ArrowUpRight
                            className="
                                h-5
                                w-5
                                text-white/40
                                transition-transform
                                duration-300
                                group-hover:-translate-y-1
                                group-hover:translate-x-1
                            "
                        />
                    </a>
                </div>

                {/* Navigation + social + CV */}
                <div
                    className="
                        mt-8
                        flex
                        flex-col
                        gap-6
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    {/* Navigation */}
                    <nav className="flex flex-wrap gap-x-6 gap-y-2">
                        {footerLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="
                                    text-[10px]
                                    uppercase
                                    tracking-[0.1em]
                                    text-white/45
                                    transition-colors
                                    duration-300
                                    hover:text-white
                                "
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social + CV */}
                    <div className="flex items-center gap-5">
                        <a
                            href="https://www.linkedin.com/in/jdcamacho14r/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="text-white/40 transition-colors duration-300 hover:text-white"
                        >
                            {" "}
                            <FaLinkedinIn className="h-3.5 w-3.5" />{" "}
                        </a>
                        <a
                            href="https://github.com/DeiBit-Code"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="text-white/40 transition-colors duration-300 hover:text-white"
                        >
                            {" "}
                            <FaGithub className="h-3.5 w-3.5" />{" "}
                        </a>

                        <a
                            href="/Curriculum_David_Camacho.pdf"
                            download
                            className="
                                flex
                                items-center
                                gap-2
                                text-[10px]
                                font-medium
                                uppercase
                                tracking-[0.1em]
                                text-white
                                transition-colors
                                duration-300
                                hover:text-white/70
                            "
                        >
                            <Download className="h-3.5 w-3.5" />
                            Descargar CV
                        </a>
                    </div>
                </div>

                {/* Bottom */}
                <div
                    className="
                        mt-7
                        flex
                        flex-col
                        gap-2
                        text-[9px]
                        text-white/30
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <p>
                        © {new Date().getFullYear()} · Todos los derechos
                        reservados.
                    </p>

                    <span>Arquitectura · Estructuras · Tecnología</span>
                </div>
            </div>
        </footer>
    );
};
