import { memo, useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

import type { Project } from "../interfaces/projects.interface";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

interface ThumbnailStripProps {
    images: string[];
    selectedImage: string;
    projectName: string;
    onSelect: (image: string) => void;
}

const ThumbnailStrip = memo(function ThumbnailStrip({
    images,
    selectedImage,
    projectName,
    onSelect,
}: ThumbnailStripProps) {
    return (
        <div className="flex gap-2 overflow-x-auto p-3 sm:p-4">
            {images.map((image, index) => {
                const isSelected = image === selectedImage;

                return (
                    <button
                        key={`${image}-${index}`}
                        type="button"
                        onClick={() => onSelect(image)}
                        className={`
                            relative
                            h-14
                            w-16
                            shrink-0
                            cursor-pointer
                            overflow-hidden
                            rounded-2xl
                            border
                            transition-all
                            duration-300
                            sm:h-16
                            sm:w-20
                            ${
                                isSelected
                                    ? "border-[#171717] opacity-100"
                                    : "border-transparent opacity-50 hover:opacity-100"
                            }
                        `}
                    >
                        <img
                            src={image}
                            alt={`${projectName} ${index + 1}`}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover"
                        />
                    </button>
                );
            })}
        </div>
    );
});

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        if (project) {
            setSelectedImage(project.img[0]);
        }
    }, [project]);

    useEffect(() => {
        if (!project) return;

        // Prevent background scrolling while the modal is open
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [project]);

    useEffect(() => {
        if (!project) return;

        // Preload all project images
        const preloadedImages = project.img.map((src) => {
            const image = new Image();
            image.src = src;
            return image;
        });

        return () => {
            preloadedImages.length = 0;
        };
    }, [project]);

    const handleSelectImage = useCallback((image: string) => {
        setSelectedImage(image);
    }, []);

    if (!project) return null;

    const currentIndex = project.img.indexOf(selectedImage);

    const showPreviousImage = () => {
        const previousIndex =
            currentIndex === 0 ? project.img.length - 1 : currentIndex - 1;

        setSelectedImage(project.img[previousIndex]);
    };

    const showNextImage = () => {
        const nextIndex =
            currentIndex === project.img.length - 1 ? 0 : currentIndex + 1;

        setSelectedImage(project.img[nextIndex]);
    };

    return (
        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-black/70
                p-0
                backdrop-blur-sm
                sm:p-6
                lg:p-10
            "
            onClick={onClose}
        >
            {/* Modal */}
            <div
                className="
                    relative
                    flex
                    h-full
                    w-full
                    max-w-6xl
                    flex-col
                    gap-3
                    overflow-hidden
                    p-3
                    shadow-2xl
                    sm:h-auto
                    sm:max-h-[92vh]
                    sm:rounded-[28px]
                    lg:h-[82vh]
                    lg:max-h-[760px]
                    lg:flex-row
                "
                onClick={(event) => event.stopPropagation()}
            >
                {/* Close button */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Cerrar proyecto"
                    className="
                        absolute
                        right-5
                        top-5
                        z-30
                        grid
                        h-10
                        w-10
                        cursor-pointer
                        place-items-center
                        rounded-full
                        bg-white/90
                        text-[#171717]
                        shadow-sm
                        backdrop-blur
                        transition-all
                        duration-150
                        hover:bg-[#171717]
                        hover:text-white
                    "
                >
                    <X className="h-4 w-4" />
                </button>

                {/* LEFT — IMAGE GALLERY */}
                <div
                    className="
                        flex
                        min-h-0
                        flex-shrink-0
                        flex-col
                        overflow-hidden
                        rounded-2xl
                        bg-white
                        lg:h-full
                        lg:w-[55%]
                    "
                >
                    {/* Main image */}
                    <div className="relative min-h-0 flex-1 overflow-hidden">
                        <img
                            src={selectedImage}
                            alt={project.name}
                            className="
                                h-full
                                min-h-[320px]
                                w-full
                                object-cover
                                sm:min-h-[400px]
                            "
                        />

                        {/* Image counter */}
                        {project.img.length > 1 && (
                            <span
                                className="
                                    absolute
                                    bottom-4
                                    left-4
                                    rounded-full
                                    bg-white/90
                                    px-3
                                    py-1
                                    text-[10px]
                                    font-medium
                                    tracking-[0.08em]
                                    text-[#171717]
                                    backdrop-blur
                                "
                            >
                                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                                {String(project.img.length).padStart(2, "0")}
                            </span>
                        )}

                        {/* Image navigation */}
                        {project.img.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    onClick={showPreviousImage}
                                    aria-label="Imagen anterior"
                                    className="
                                        absolute
                                        left-4
                                        top-1/2
                                        grid
                                        h-10
                                        w-10
                                        -translate-y-1/2
                                        cursor-pointer
                                        place-items-center
                                        rounded-full
                                        bg-white/90
                                        text-[#171717]
                                        shadow-sm
                                        backdrop-blur
                                        transition-all
                                        duration-150
                                        hover:bg-[#171717]
                                        hover:text-white
                                    "
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                </button>

                                <button
                                    type="button"
                                    onClick={showNextImage}
                                    aria-label="Siguiente imagen"
                                    className="
                                        absolute
                                        right-4
                                        top-1/2
                                        grid
                                        h-10
                                        w-10
                                        -translate-y-1/2
                                        cursor-pointer
                                        place-items-center
                                        rounded-full
                                        bg-white/90
                                        text-[#171717]
                                        shadow-sm
                                        backdrop-blur
                                        transition-all
                                        duration-150
                                        hover:bg-[#171717]
                                        hover:text-white
                                    "
                                >
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Thumbnails */}
                    {project.img.length > 1 && (
                        <ThumbnailStrip
                            images={project.img}
                            selectedImage={selectedImage}
                            projectName={project.name}
                            onSelect={handleSelectImage}
                        />
                    )}
                </div>

                {/* RIGHT — INFORMATION */}
                <div
                    className="
                        min-h-0
                        flex-1
                        overflow-y-auto
                        lg:w-[45%]
                    "
                >
                    <div className="flex flex-col gap-3">
                        {/* PROJECT HEADER */}
                        <div
                            className="
                                rounded-2xl
                                bg-white
                                p-6
                                sm:p-7
                                lg:p-8
                            "
                        >
                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-3">
                                <span
                                    className="
                                        text-[10px]
                                        font-medium
                                        uppercase
                                        tracking-[0.16em]
                                        text-[#171717]/45
                                    "
                                >
                                    {project.year}
                                </span>

                                <span className="h-1 w-1 rounded-full bg-[#171717]/20" />

                                <span
                                    className="
                                        text-[10px]
                                        font-medium
                                        uppercase
                                        tracking-[0.16em]
                                        text-[#171717]/45
                                    "
                                >
                                    {project.type}
                                </span>
                            </div>

                            {/* Title */}
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
                                {project.name}
                            </h2>

                            {/* Tags */}
                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="
                                            rounded-full
                                            bg-[#171717]/[0.05]
                                            px-3
                                            py-1.5
                                            text-[10px]
                                            font-medium
                                            text-[#171717]/60
                                        "
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* DESCRIPTION */}
                        <div
                            className="
                                rounded-2xl
                                bg-white
                                p-6
                                sm:p-7
                                lg:p-8
                            "
                        >
                            <p
                                className="
                                    text-[10px]
                                    font-medium
                                    uppercase
                                    tracking-[0.16em]
                                    text-[#171717]/40
                                "
                            >
                                Sobre el proyecto
                            </p>

                            <p
                                className="
                                    mt-4
                                    text-sm
                                    leading-7
                                    text-[#171717]/60
                                    sm:text-[15px]
                                "
                            >
                                {project.description}
                            </p>
                        </div>

                        {/* TECHNOLOGIES */}
                        <div
                            className="
                                rounded-2xl
                                bg-white
                                p-6
                                sm:p-7
                                lg:p-8
                            "
                        >
                            <p
                                className="
                                    text-[10px]
                                    font-medium
                                    uppercase
                                    tracking-[0.16em]
                                    text-[#171717]/40
                                "
                            >
                                Tecnologías utilizadas
                            </p>

                            <div className="mt-5 grid grid-cols-2 gap-2">
                                {project.technologies.map((technology) => (
                                    <div
                                        key={technology}
                                        className="
                                            rounded-2xl
                                            bg-[#f1f1f1]
                                            px-4
                                            py-3
                                            text-sm
                                            text-[#171717]/65
                                            transition-colors
                                            duration-50
                                            hover:bg-[#171717]
                                            hover:text-white
                                        "
                                    >
                                        {technology}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
