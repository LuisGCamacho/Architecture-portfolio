import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

import type { Project } from "../interfaces/projects.interface";

export const projectsData: Project[] = [
    {
        name: "Casa Nord",
        img: [p1, p2, p3],
        year: "2024",
        type: "Vivienda unifamiliar",
        category: "Arquitectura",
        tags: ["Arquitectura", "Residencial"],
        description:
            "Una vivienda concebida para integrarse con el paisaje y aprovechar al máximo la luz natural.",
        technologies: ["Revit", "Rhino", "Enscape", "AutoCAD"],
    },

    {
        name: "Refugio Line",
        img: [p2, p3, p4],
        year: "2023",
        type: "Casa de montaña",
        category: "Arquitectura",
        tags: ["Arquitectura", "Residencial"],
        description:
            "Un refugio contemporáneo que combina materiales naturales, vistas abiertas y una relación directa con el entorno.",
        technologies: ["Revit", "Rhino", "Enscape", "Photoshop"],
    },

    {
        name: "Barn House",
        img: [p3, p4, p1],
        year: "2023",
        type: "Rehabilitación",
        category: "Estructurales",
        tags: ["Estructurales", "Rehabilitación"],
        description:
            "La transformación de una construcción tradicional en un espacio actual sin perder su carácter original.",
        technologies: ["Revit", "AutoCAD", "ETABS", "BIM"],
    },

    {
        name: "Villa Pinar",
        img: [p4, p1, p2],
        year: "2022",
        type: "Vivienda + estudio",
        category: "Arquitectura",
        tags: ["Arquitectura", "Residencial"],
        description:
            "Una vivienda-estudio pensada como un espacio flexible, luminoso y conectado con el paisaje mediterráneo.",
        technologies: ["Revit", "Rhino", "V-Ray", "Photoshop"],
    },

    {
        name: "Casa Patio",
        img: [p1, p3, p4],
        year: "2022",
        type: "Vivienda unifamiliar",
        category: "Estructurales",
        tags: ["Estructurales", "Residencial"],
        description:
            "Una intervención donde la estructura y la distribución interior trabajan conjuntamente alrededor de un patio central.",
        technologies: ["Revit", "AutoCAD", "ETABS", "BIM"],
    },

    {
        name: "BIM House",
        img: [p2, p4, p1],
        year: "2021",
        type: "Modelado BIM",
        category: "Diseño computacional",
        tags: ["Diseño computacional", "Revit", "BIM"],
        description:
            "Desarrollo y automatización de un modelo BIM utilizando Revit para optimizar documentación y coordinación.",
        technologies: ["Revit", "Dynamo", "Python", "BIM"],
    },

    {
        name: "Parametric Facade",
        img: [p3, p1, p2],
        year: "2021",
        type: "Diseño paramétrico",
        category: "Diseño computacional",
        tags: ["Diseño computacional", "Python", "Paramétrico"],
        description:
            "Exploración de geometrías paramétricas mediante programación para generar y evaluar distintas soluciones de fachada.",
        technologies: ["Rhino", "Grasshopper", "Python", "Revit"],
    },

    {
        name: "Estructura Norte",
        img: [p4, p2, p3],
        year: "2020",
        type: "Diseño estructural",
        category: "Estructurales",
        tags: ["Estructurales", "Cálculo"],
        description:
            "Propuesta estructural centrada en resolver grandes luces mediante una solución eficiente y de mínima intervención.",
        technologies: ["Revit", "ETABS", "AutoCAD", "BIM"],
    },
];
