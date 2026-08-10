import { ArrowRight } from "lucide-react";

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

const works = [
    {
        name: "Casa Nord",
        img: p1,
        place: "Asturias",
        year: "2024",
        type: "Vivienda unifamiliar",
    },
    {
        name: "Refugio Line",
        img: p2,
        place: "Pirineos",
        year: "2023",
        type: "Casa de montaña",
    },
    {
        name: "Barn House",
        img: p3,
        place: "Segovia",
        year: "2023",
        type: "Rehabilitación",
    },
    {
        name: "Villa Pinar",
        img: p4,
        place: "Costa Brava",
        year: "2022",
        type: "Vivienda + estudio",
    },
];

export const CustomProjects = () => {
    return (
        <section className="bg-[#f8f7f4] px-5 py-20 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                {/* ENCABEZADO */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="h-px w-8 bg-[#171717]/40" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#171717]/55">
                                Proyectos
                            </p>
                        </div>

                        <h2
                            className="
                                mt-5
                                text-3xl
                                font-medium
                                leading-[1.05]
                                tracking-tight
                                text-[#171717]
                                sm:text-4xl
                            "
                        >
                            Proyectos
                        </h2>
                    </div>

                    <button
                        type="button"
                        className="
                            group
                            flex
                            w-fit
                            items-center
                            gap-3
                            text-[11px]
                            font-medium
                            uppercase
                            tracking-[0.14em]
                            text-[#171717]/60
                            transition
                            hover:text-[#171717]
                        "
                    >
                        Solicitar dossier completo
                        <span
                            className="
                                grid
                                h-9
                                w-9
                                place-items-center
                                rounded-full
                                border
                                border-[#171717]/15
                                bg-transparent
                                transition-all
                                duration-300
                                group-hover:bg-[#171717]
                                group-hover:text-white
                            "
                        >
                            <ArrowRight
                                className="
                                    h-4
                                    w-4
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-0.5
                                "
                            />
                        </span>
                    </button>
                </div>

                {/* GRID */}
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {works.map((project, index) => (
                        <article
                            key={project.name}
                            className={`
                                group
                                overflow-hidden
                                rounded-[24px]
                                border
                                border-[#171717]/[0.08]
                                p-2
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)]
                                ${index % 2 === 0 ? "bg-white" : "bg-[#f1f1f1]"}
                            `}
                        >
                            {/* IMAGEN */}
                            <div className="overflow-hidden rounded-[20px]">
                                <img
                                    src={project.img}
                                    alt={`Proyecto de arquitectura ${project.name} en ${project.place}`}
                                    loading="lazy"
                                    width={1024}
                                    height={768}
                                    className="
                                        aspect-[4/3]
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-700
                                        ease-out
                                        group-hover:scale-[1.04]
                                    "
                                />
                            </div>

                            {/* CONTENIDO */}
                            <div className="px-3 pb-3 pt-4">
                                <h3
                                    className="
                                        text-xl
                                        font-medium
                                        leading-tight
                                        tracking-tight
                                        text-[#171717]
                                    "
                                >
                                    {project.name}
                                </h3>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        font-medium
                                        text-[#171717]/45
                                    "
                                >
                                    {project.place} · {project.year}
                                </p>

                                {/* TIPO + FLECHA */}
                                <div className="mt-5 flex items-center justify-between gap-3">
                                    <span
                                        className="
                                            text-sm
                                            font-medium
                                            text-[#171717]
                                        "
                                    >
                                        {project.type}
                                    </span>

                                    <span
                                        className="
                                            grid
                                            h-9
                                            w-9
                                            shrink-0
                                            place-items-center
                                            rounded-full
                                            border
                                            border-[#171717]/10
                                            bg-transparent
                                            text-[#171717]/80
                                            transition-all
                                            duration-300
                                            group-hover:border-[#171717]/20
                                            group-hover:bg-[#171717]
                                            group-hover:text-white
                                        "
                                    >
                                        <ArrowRight
                                            className="
                                                h-4
                                                w-4
                                                transition-transform
                                                duration-300
                                                group-hover:translate-x-0.5
                                            "
                                        />
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
