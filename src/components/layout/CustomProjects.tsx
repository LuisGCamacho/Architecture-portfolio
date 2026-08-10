import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { Card } from "../ui/Card";

import type { Project } from "../../interfaces/projects.interface";
import { projectsData } from "../../data/projects.data";
import { ProjectModal } from "../ProjectModal";

const filters = [
    "Todo",
    "Estructurales",
    "Arquitectura",
    "Diseño computacional",
];

export const CustomProjects = () => {
    const [activeFilter, setActiveFilter] = useState("Todo");
    const [isFiltering, setIsFiltering] = useState(false);

    // Store the currently selected project
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null,
    );

    const projects = projectsData;

    const filteredProjects =
        activeFilter === "Todo"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

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
                            cursor-pointer
                            items-center
                            gap-3
                            text-[11px]
                            font-medium
                            uppercase
                            tracking-[0.14em]
                            text-[#171717]/60
                            transition-colors
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
                                    cursor-pointer
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
                        {filteredProjects.length}{" "}
                        {filteredProjects.length === 1
                            ? "proyecto"
                            : "proyectos"}
                    </p>
                </div>

                {/* PROJECT GRID */}
                <div
                    className={`
                        mt-5
                        grid
                        gap-4
                        transition-all
                        duration-300
                        ease-out
                        sm:grid-cols-2
                        lg:grid-cols-4
                        ${
                            isFiltering
                                ? "translate-y-1 opacity-0"
                                : "translate-y-0 opacity-100"
                        }
                    `}
                >
                    {filteredProjects.map((project, index) => (
                        <Card
                            key={project.name}
                            project={project}
                            index={index}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>

                {/* EMPTY STATE */}
                {filteredProjects.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-sm text-[#171717]/45">
                            No hay proyectos en esta categoría.
                        </p>
                    </div>
                )}
            </div>

            {/* PROJECT MODAL */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};
