import { Menu, X } from "lucide-react";
import { useState } from "react";
import { CustomLogo } from "./CustomLogo";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const nav = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Trayectoria", href: "#trayectoria" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Competencias", href: "#competencias" },
    { label: "Contacto", href: "#contacto" },
];

export const CustomHeader = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 w-full">
            <div className="w-full border-b border-black/[0.08] bg-white/70 px-5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.04)] backdrop-blur-2xl sm:px-8 lg:px-10">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
                    {/* Logo */}
                    <CustomLogo tone="dark" />

                    {/* Desktop navigation */}
                    <nav className="hidden items-center gap-1 lg:flex">
                        {nav.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="px-3.5 py-2 text-sm text-foreground/65 transition-colors duration-200 hover:text-foreground"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-1">
                        {/* LinkedIn - solo desktop */}
                        <a
                            href="https://www.linkedin.com/in/jdcamacho14r/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="
                                hidden
                                h-10
                                w-10

                                place-items-center
                                rounded-full
                                text-foreground/55
                                transition-all
                                duration-200
                                hover:bg-black/[0.05]
                                hover:text-foreground
                                lg:grid
                            "
                        >
                            <FaLinkedinIn className="h-4 w-4" />
                        </a>

                        {/* GitHub - solo desktop */}
                        <a
                            href="https://github.com/DeiBit-Code"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="
                                hidden
                                h-10
                                w-10
                                place-items-center
                                rounded-full
                                text-foreground/55
                                transition-all
                                duration-200
                                hover:bg-black/[0.05]
                                hover:text-foreground
                                lg:grid
                            "
                        >
                            <FaGithub className="h-4 w-4" />
                        </a>

                        {/* Mobile menu button */}
                        <button
                            type="button"
                            aria-label={open ? "Cerrar menú" : "Abrir menú"}
                            aria-expanded={open}
                            onClick={() => setOpen((value) => !value)}
                            className="
                                grid
                                h-9
                                w-9
                                place-items-center
                                border
                                border-black/[0.08]
                                bg-black/[0.03]
                                text-foreground
                                transition-colors
                                hover:bg-black/[0.06]
                                lg:hidden
                            "
                        >
                            {open ? (
                                <X className="h-[18px] w-[18px]" />
                            ) : (
                                <Menu className="h-[18px] w-[18px]" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div className="mx-auto mt-3 max-w-7xl border-t border-black/[0.06] pt-3 lg:hidden">
                        <nav className="grid gap-1">
                            {nav.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="
                                        px-3
                                        py-2.5
                                        text-sm
                                        text-foreground/70
                                        transition-colors
                                        hover:bg-black/[0.04]
                                        hover:text-foreground
                                    "
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        {/* Social links */}
                        <div className="mt-3 flex items-center gap-2 border-t border-black/[0.06] pt-3">
                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/jdcamacho14r/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="
                                    grid
                                    h-9
                                    w-9
                                    place-items-center
                                    rounded-full
                                    text-foreground/55
                                    transition-all
                                    duration-200
                                    hover:bg-black/[0.05]
                                    hover:text-foreground
                                "
                            >
                                <FaLinkedinIn className="h-4 w-4" />
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/DeiBit-Code"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="
                                    grid
                                    h-9
                                    w-9
                                    place-items-center
                                    rounded-full
                                    text-foreground/55
                                    transition-all
                                    duration-200
                                    hover:bg-black/[0.05]
                                    hover:text-foreground
                                "
                            >
                                <FaGithub className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
