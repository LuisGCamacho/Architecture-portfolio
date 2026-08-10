import profileImage from "../../assets/WhatsApp Image 2026-08-09 at 16.34.27.jpeg";

export const CustomAboutMe = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24" id="sobre-mi">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 mb-16">
                <div className="grid items-center gap-12 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-14">
                    {/* Imagen */}
                    <div className="relative mx-auto w-full max-w-[380px] overflow-hidden rounded-3xl bg-slate-200">
                        <img
                            src={profileImage}
                            alt="David Camacho"
                            className="aspect-[4/5] h-full w-full object-cover object-center transition-transform duration-700 ease-in-out hover:scale-115"
                        />

                        {/* Detalle */}
                        <div className="absolute bottom-5 left-5 rounded-full bg-black px-4 py-2 text-xs font-medium text-white shadow-lg">
                            Arquitectura & Diseño
                        </div>
                    </div>

                    {/* Contenido */}
                    <div className="min-w-0">
                        {/* Encabezado */}
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/60">
                                Sobre mí
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-4xl lg:text-4xl">
                                David Camacho,
                                <br />
                                <span className="typing">
                                    Ingeniero Arquitecto
                                </span>
                            </h2>
                        </div>

                        {/* Línea */}
                        <div className="my-6 h-px w-full bg-black/10" />

                        {/* Descripción */}
                        <div className="max-w-xl space-y-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                            <p>
                                Ingeniero Arquitecto con una sólida formación
                                integral que combina la precisión técnica de la
                                ingeniería con la sensibilidad del diseño
                                arquitectónico. Cuento con experiencia
                                administrativa y capacidad para la gestión
                                documental, complementada con un dominio
                                avanzado de herramientas digitales como AutoCAD,
                                Revit (BIM) y Microsoft Office.
                            </p>

                            <p>
                                Actualmente busco integrarme como becario en un
                                equipo de alto rendimiento donde pueda aplicar
                                mis conocimientos en la elaboración de planos
                                ejecutivos, modelado 3D y soporte
                                administrativo. Me distingo por ser un
                                profesional proactivo, con fuerte atención al
                                detalle y compromiso con la calidad y
                                eficiencia.
                            </p>
                        </div>

                        {/* Estadísticas */}
                        <div className="mt-7  border-t border-black/10 pt-5 sm:mt-8 sm:gap-5">
                            <div className="mt-1 text-[11px] leading-[1.4] text-slate-500 sm:text-xs">
                                Número: (+52) 55 3303 4119
                            </div>
                            <div className="mt-1 text-[11px] leading-[1.4] text-slate-500 sm:text-xs">
                                Correo: Jcamacho14@gmail.com
                            </div>
                            <div className="mt-1 text-[11px] leading-[1.4] text-slate-500 sm:text-xs">
                                Likedin:
                                https://www.linkedin.com/in/jdcamacho14r
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
