import { ArrowRight } from "lucide-react";

import type { Project } from "../../interfaces/projects.interface";

interface Props {
    project: Project;
    index: number;
    onClick: () => void;
}

export const Card = ({ project, index, onClick }: Props) => {
    return (
        <article
            onClick={onClick}
            className={`
                group
                cursor-pointer
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
            {/* IMAGE */}
            <div className="overflow-hidden rounded-[20px]">
                <img
                    src={project.img[0]}
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
    );
};
