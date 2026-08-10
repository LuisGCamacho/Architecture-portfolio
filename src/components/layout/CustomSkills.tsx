import { competencias } from "../../data/skills.data";

export const CustomSkills = () => {
    competencias;

    return (
        <section
            id="competencias"
            className="
                pb-14
                pt-4

                sm:pb-16
                sm:pt-10
            "
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                {/* HEADER */}
                <div className="max-w-2xl">
                    <p
                        className="
                            text-[11px]
                            font-medium
                            uppercase
                            tracking-[0.18em]
                            text-[#171717]/50
                        "
                    >
                        Áreas de especialización
                    </p>

                    <h2
                        className="
                            mt-3
                            text-3xl
                            font-medium
                            leading-[1.05]
                            tracking-tight
                            text-[#171717]
                            sm:text-4xl
                        "
                    >
                        Competencias
                    </h2>

                    <p
                        className="
                            mt-4
                            max-w-xl
                            text-sm
                            leading-6
                            text-[#171717]/50
                            sm:text-[15px]
                        "
                    >
                        Herramientas y conocimientos aplicados a arquitectura,
                        estructuras, automatización y documentación técnica.
                    </p>
                </div>

                {/* SKILLS GRID */}
                <div
                    className="
                        mt-7
                        grid
                        gap-3
                        sm:mt-8
                        sm:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {competencias.map((competencia) => (
                        <article
                            key={competencia.category}
                            className="
                                group
                                rounded-2xl
                                border
                                border-[#171717]/[0.06]
                                bg-white
                                p-5
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                            "
                        >
                            {/* CATEGORY */}
                            <div className="flex items-center justify-between">
                                <h3
                                    className="
                                        text-sm
                                        font-medium
                                        tracking-tight
                                        text-[#171717]
                                    "
                                >
                                    {competencia.category}
                                </h3>

                                <span
                                    className="
                                        h-1.5
                                        w-1.5
                                        rounded-full
                                        bg-[#171717]/20
                                        transition-all
                                        duration-300
                                        group-hover:bg-[#171717]
                                    "
                                />
                            </div>

                            {/* DESCRIPTION */}
                            <p
                                className="
                                    mt-3
                                    text-xs
                                    leading-5
                                    text-[#171717]/50
                                "
                            >
                                {competencia.details}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
