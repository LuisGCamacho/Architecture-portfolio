import { useState } from "react";

import heroImage from "../../assets/hero-architecture.jpg";
import { Download } from "lucide-react";

export const CustomHero = () => {
    const [zoomed, setZoomed] = useState(false);

    return (
        <section
            id="inicio"
            onMouseEnter={() => setZoomed(true)}
            className="relative min-h-[calc(100vh-7rem)] overflow-hidden "
        >
            {/* Imagen */}
            <div
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out ${
                    zoomed ? "scale-105" : "scale-100"
                }`}
                style={{
                    backgroundImage: `url(${heroImage})`,
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Contenido */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-10 lg:p-14">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-2xl text-white">
                        <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                            Portafolio · Arquitectura residencial
                        </p>

                        <h1 className="mt-4 text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                            David Camacho,
                            <br />
                            Ingeniero Arquitecto.
                        </h1>

                        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
                            Proyecto viviendas que respetan el terreno donde se
                            apoyan: pocos materiales, bien resueltos y pensados
                            para durar.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            {/* Download CV */}
                            <a
                                href="/Curriculum_David_Camacho.pdf"
                                download="Curriculum_David_Camacho.pdf"
                                className="inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-medium text-black transition hover:bg-white/90"
                            >
                                Descargar CV
                                <span className="grid h-8 w-8 place-items-center rounded-full bg-black text-white">
                                    <Download className="h-4 w-4" />
                                </span>
                            </a>
                            {/* Contact */}
                            <a
                                href="#contacto"
                                className="inline-flex items-center rounded-full border border-white/50 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                            >
                                Contactar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
