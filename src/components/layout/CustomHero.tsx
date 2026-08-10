import { useState } from "react";
import heroImage2 from "/heroImage2.jpeg";
import { Download } from "lucide-react";

export const CustomHero = () => {
    const [zoomed, setZoomed] = useState(false);

    return (
        <section
            id="inicio"
            onMouseEnter={() => setZoomed(true)}
            className="
                relative
                min-h-[calc(100vh-7rem)]
                overflow-hidden
            "
        >
            {/* Image */}
            <div
                className={`
                    absolute
                    inset-0
                    bg-cover
                    bg-no-repeat
                    bg-[position:center_35%]
                    grayscale
                    transition-transform
                    duration-700
                    ease-out
                    sm:bg-center
                    ${zoomed ? "scale-105" : "scale-100"}
                `}
                style={{
                    backgroundImage: `url(${heroImage2})`,
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Content */}
            <div
                className="
                    absolute
                    inset-x-0
                    bottom-0
                    z-10
                    px-5
                    pb-8
                    sm:px-10
                    sm:pb-10
                    lg:px-14
                    lg:pb-14
                "
            >
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-2xl text-white">
                        <p
                            className="
                                text-[10px]
                                uppercase
                                tracking-[0.2em]
                                text-white/70
                                sm:text-xs
                                sm:tracking-[0.22em]
                            "
                        >
                            Portafolio · Arquitectura residencial
                        </p>

                        <h1
                            className="
                                mt-3
                                text-3xl
                                font-medium
                                leading-[1.05]
                                tracking-tight
                                sm:mt-4
                                sm:text-5xl
                                lg:text-6xl
                            "
                        >
                            David Camacho,
                            <br />
                            Ingeniero Arquitecto.
                        </h1>

                        <p
                            className="
                                mt-4
                                max-w-[320px]
                                text-xs
                                leading-relaxed
                                text-white/80
                                sm:mt-5
                                sm:max-w-md
                                sm:text-base
                            "
                        >
                            Proyecto viviendas que respetan el terreno donde se
                            apoyan: pocos materiales, bien resueltos y pensados
                            para durar.
                        </p>

                        <div
                            className="
                                mt-6
                                flex
                                flex-wrap
                                gap-2.5
                                sm:mt-7
                                sm:gap-3
                            "
                        >
                            {/* Download CV */}
                            <a
                                href="/Curriculum_David_Camacho.pdf"
                                download="Curriculum_David_Camacho.pdf"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    bg-white
                                    py-1.5
                                    pl-4
                                    pr-1.5
                                    text-xs
                                    font-medium
                                    text-black
                                    transition
                                    hover:bg-white/90
                                    sm:gap-3
                                    sm:py-2
                                    sm:pl-6
                                    sm:pr-2
                                    sm:text-sm
                                "
                            >
                                Descargar CV
                                <span
                                    className="
                                        grid
                                        h-7
                                        w-7
                                        place-items-center
                                        rounded-full
                                        bg-black
                                        text-white
                                        sm:h-8
                                        sm:w-8
                                    "
                                >
                                    <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                </span>
                            </a>

                            {/* Contact */}
                            <a
                                href="#contacto"
                                className="
                                    inline-flex
                                    items-center
                                    rounded-full
                                    border
                                    border-white/50
                                    px-5
                                    py-2
                                    text-xs
                                    font-medium
                                    text-white
                                    transition
                                    hover:bg-white/10
                                    sm:px-6
                                    sm:py-3
                                    sm:text-sm
                                "
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
