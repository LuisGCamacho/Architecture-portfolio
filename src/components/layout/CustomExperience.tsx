import { Briefcase } from "lucide-react";
import { experienceData } from "../../data/experience.data";

export const CustomExperience = () => {
    const experience = experienceData;

    return (
        <section
            className="bg-[#242424] px-5 py-20 text-white sm:px-8 lg:px-12"
            id="trayectoria"
        >
            <div className="mx-auto max-w-7xl">
                {/* EXPERIENCIA */}
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-24">
                    {/* IZQUIERDA */}
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-8 bg-white/40" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                                Trayectoria y Experiencia
                            </p>
                        </div>

                        <h2
                            className="
                                mt-6
                                text-3xl
                                font-medium
                                leading-[1.05]
                                tracking-tight
                                text-white
                                sm:text-4xl
                            "
                        >
                            Trayectoria
                            <br />
                            profesional
                        </h2>

                        <p className="mt-6 max-w-xs text-sm leading-6 text-white/60">
                            Estudiante de Ingeniería y Arquitectura de noveno
                            semestre en la ESIA Tecamachalco, con experiencia en
                            proyectos de infraestructura y obra civil enfocados
                            en elaboración y documentación de planos,
                            cuantificaciones, presupuestos y automatización de
                            procesos.
                        </p>

                        <p className="mt-10 text-[11px] uppercase tracking-[0.15em] text-white/40">
                            2024 — 2026
                        </p>
                    </div>

                    {/* DERECHA / TIMELINE */}
                    <div className="relative">
                        {/* Línea vertical */}
                        <div
                            className="
                                absolute
                                left-[19px]
                                top-2
                                bottom-2
                                w-px
                                bg-white/15
                                sm:left-[23px]
                            "
                        />

                        <div className="space-y-7 sm:space-y-20">
                            {experience.map((job, index) => (
                                <article
                                    key={job.period}
                                    className="relative pl-14 sm:pl-16"
                                >
                                    {/* Icono */}
                                    <div
                                        className="
                                            absolute
                                            left-0
                                            top-0
                                            z-10
                                            grid
                                            h-10
                                            w-10
                                            place-items-center
                                            rounded-full
                                            border
                                            border-white/20
                                            bg-[#242424]
                                            sm:h-12
                                            sm:w-12
                                        "
                                    >
                                        <Briefcase
                                            className="h-4 w-4 text-white/80"
                                            strokeWidth={1.25}
                                        />
                                    </div>

                                    {/* Contenido */}
                                    <div className="max-w-3xl">
                                        {/* Fecha móvil */}
                                        <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/45 sm:hidden">
                                            {job.period}
                                        </span>

                                        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                                            <h3 className="text-xl font-medium leading-tight tracking-tight text-white">
                                                {job.role}
                                            </h3>

                                            {/* Fecha desktop */}
                                            <span className="hidden shrink-0 text-[11px] font-medium uppercase tracking-[0.1em] text-white/45 sm:block">
                                                {job.period}
                                            </span>
                                        </div>

                                        <p className="mt-2 text-sm font-medium text-white/80">
                                            {job.studio}
                                        </p>

                                        {/* Viñetas */}
                                        <ul className="mt-4 max-w-2xl space-y-3">
                                            {job.description.map(
                                                (item, index) => (
                                                    <li
                                                        key={index}
                                                        className="
                                                        relative
                                                        pl-5
                                                        text-sm
                                                        leading-6
                                                        text-white/55
                                                    "
                                                    >
                                                        <span
                                                            className="
                                                            absolute
                                                            left-0
                                                            top-[0.65rem]
                                                            h-1
                                                            w-1
                                                            rounded-full
                                                            bg-white/50
                                                        "
                                                        />

                                                        {item}
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>

                                    {/* Línea horizontal */}
                                    {index !== experience.length - 1 && (
                                        <div className="mt-8 h-px w-full bg-white/10" />
                                    )}
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
