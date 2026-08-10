import { useState } from "react";
import { ArrowRight } from "lucide-react";

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

const works = [
    {
        name: "Casa Nord",
        img: p1,
        year: "2024",
        type: "Vivienda unifamiliar",
        category: "Arquitectura",
        tags: ["Arquitectura", "Residencial"],
        description:
            "Una vivienda concebida para integrarse con el paisaje y aprovechar al máximo la luz natural.",
    },
    {
        name: "Refugio Line",
        img: p2,
        year: "2023",
        type: "Casa de montaña",
        category: "Arquitectura",
        tags: ["Arquitectura", "Residencial"],
        description:
            "Un refugio contemporáneo que combina materiales naturales, vistas abiertas y una relación directa con el entorno.",
    },
    {
        name: "Barn House",
        img: p3,
        year: "2023",
        type: "Rehabilitación",
        category: "Estructurales",
        tags: ["Estructurales", "Rehabilitación"],
        description:
            "La transformación de una construcción tradicional en un espacio actual sin perder su carácter original.",
    },
    {
        name: "Villa Pinar",
        img: p4,
        year: "2022",
        type: "Vivienda + estudio",
        category: "Arquitectura",
        tags: ["Arquitectura", "Residencial"],
        description:
            "Una vivienda-estudio pensada como un espacio flexible, luminoso y conectado con el paisaje mediterráneo.",
    },
    {
        name: "Casa Patio",
        img: p1,
        year: "2022",
        type: "Vivienda unifamiliar",
        category: "Estructurales",
        tags: ["Estructurales", "Residencial"],
        description:
            "Una intervención donde la estructura y la distribución interior trabajan conjuntamente alrededor de un patio central.",
    },
    {
        name: "BIM House",
        img: p2,
        year: "2021",
        type: "Modelado BIM",
        category: "Diseño computacional",
        tags: ["Diseño computacional", "Revit", "BIM"],
        description:
            "Desarrollo y automatización de un modelo BIM utilizando Revit para optimizar documentación y coordinación.",
    },
    {
        name: "Parametric Facade",
        img: p3,
        year: "2021",
        type: "Diseño paramétrico",
        category: "Diseño computacional",
        tags: ["Diseño computacional", "Python", "Paramétrico"],
        description:
            "Exploración de geometrías paramétricas mediante programación para generar y evaluar distintas soluciones de fachada.",
    },
    {
        name: "Estructura Norte",
        img: p4,
        year: "2020",
        type: "Diseño estructural",
        category: "Estructurales",
        tags: ["Estructurales", "Cálculo"],
        description:
            "Propuesta estructural centrada en resolver grandes luces mediante una solución eficiente y de mínima intervención.",
    },
];

const filters = [
    "Todo",
    "Estructurales",
    "Arquitectura",
    "Diseño computacional",
];

export const CustomProjects = () => {
    const [activeFilter, setActiveFilter] = useState("Todo");
    const [isFiltering, setIsFiltering] = useState(false);

    const filteredWorks =
        activeFilter === "Todo"
            ? works
            : works.filter((project) => project.category === activeFilter);

    const handleFilterChange = (filter: string) => {
        if (filter === activeFilter) return;

        // Start fade-out animation
        setIsFiltering(true);

        // Change projects after the fade-out
        setTimeout(() => {
            setActiveFilter(filter);

            // Start fade-in animation
            requestAnimationFrame(() => {
                setIsFiltering(false);
            });
        }, 250);
    };

    return (
        <section className="bg-white py-20 sm:py-24" id="proyectos">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                {/* HEADER */}
                <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
                    <div className="max-w-2xl">
                        <p
                            className="
                                text-[11px]
                                font-medium
                                uppercase
                                tracking-[0.18em]
                                text-[#171717]/55
                            "
                        >
                            Proyectos seleccionados
                        </p>

                        <h2
                            className="
                                mt-4
                                text-3xl
                                font-medium
                                leading-[1.05]
                                tracking-tight
                                text-[#171717]
                                sm:text-4xl
                            "
                        >
                            Una selección de proyectos
                        </h2>

                        <p
                            className="
                                mt-5
                                max-w-xl
                                text-sm
                                leading-6
                                text-[#171717]/55
                                sm:text-[15px]
                            "
                        >
                            Arquitectura, estructura y diseño computacional
                            aplicados a proyectos que combinan precisión,
                            materialidad y una visión contemporánea.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="
                            group
                            flex
                            w-fit
                            shrink-0
                            items-center
                            gap-3
                            text-[11px]
                            font-medium
                            uppercase
                            tracking-[0.14em]
                            text-[#171717]/60
                            transition-colors
                            cursor-pointer
                            duration-300
                            hover:text-[#171717]
                        "
                    >
                        Ver más
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

                {/* FILTERS */}
                <div className="mt-10 flex flex-wrap gap-2">
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter;

                        return (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => handleFilterChange(filter)}
                                className={`
                                    rounded-full
                                    border
                                    px-4
                                    py-2
                                    text-[11px]
                                    font-medium
                                    uppercase
                                    tracking-[0.12em]
                                    transition-all
                                    duration-300
                                    cursor-pointer
                                    ${
                                        isActive
                                            ? "border-[#171717] bg-[#171717] text-white"
                                            : "border-[#171717]/10 bg-transparent text-[#171717]/55 hover:border-[#171717]/25 hover:text-[#171717]"
                                    }
                                `}
                            >
                                {filter}
                            </button>
                        );
                    })}
                </div>

                {/* RESULTS COUNT */}
                <div className="mt-8">
                    <p className="text-xs text-[#171717]/40">
                        {filteredWorks.length}{" "}
                        {filteredWorks.length === 1 ? "proyecto" : "proyectos"}
                    </p>
                </div>

                {/* PROJECT GRID */}
                <div
                    className={`
                        mt-5
                        grid
                        gap-4
                        sm:grid-cols-2
                        lg:grid-cols-4
                        transition-all
                        duration-300
                        ease-out
                        ${
                            isFiltering
                                ? "translate-y-1 opacity-0"
                                : "translate-y-0 opacity-100"
                        }
                    `}
                >
                    {filteredWorks.map((project, index) => (
                        <article
                            key={project.name}
                            className={`
                                group
                                overflow-hidden
                                rounded-[24px]
                                border
                                cursor-pointer
                                border-[#171717]/[0.08]
                                p-2
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)]
                                ${index % 2 === 0 ? "bg-white" : "bg-[#f1f1f1]"}
                            `}
                        >
                            {/* IMAGE */}
                            <div className="overflow-hidden rounded-[20px]">
                                <img
                                    src={project.img}
                                    alt={`Proyecto de arquitectura ${project.name}`}
                                    loading="lazy"
                                    width={1024}
                                    height={768}
                                    className="
                                        aspect-[4/3]
                                        w-full
                                        object-cover
                                        grayscale
                                        transition-all
                                        duration-700
                                        ease-out
                                        group-hover:scale-[1.04]
                                        group-hover:grayscale-0
                                    "
                                />
                            </div>

                            {/* CONTENT */}
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
                                    {project.year} · {project.type}
                                </p>

                                {/* DESCRIPTION */}
                                <p
                                    className="
                                        mt-4
                                        text-sm
                                        leading-5
                                        text-[#171717]/55
                                    "
                                >
                                    {project.description}
                                </p>

                                {/* TAGS */}
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="
                                                rounded-full
                                                bg-[#171717]/[0.05]
                                                px-2.5
                                                py-1
                                                text-[10px]
                                                font-medium
                                                text-[#171717]/55
                                            "
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* PROJECT LINK */}
                                <div className="mt-5 flex justify-end">
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

                {/* EMPTY STATE */}
                {filteredWorks.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-sm text-[#171717]/45">
                            No hay proyectos en esta categoría.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};
