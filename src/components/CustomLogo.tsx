import { Compass } from "lucide-react";

export const CustomLogo = ({ tone = "dark" }: { tone?: "dark" | "light" }) => {
    return (
        <div
            className={`flex shrink-0 items-center gap-2 ${
                tone === "light" ? "text-primary-foreground" : "text-foreground"
            }`}
        >
            <Compass className="h-6 w-6" strokeWidth={1.5} />
            <div className="leading-none">
                <div className="text-lg font-extrabold tracking-tight">
                    D. Camacho
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] opacity-60">
                    Ing. Arquitecto
                </div>
            </div>
        </div>
    );
};
