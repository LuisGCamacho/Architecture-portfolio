import { CustomAboutMe } from "./components/layout/CustomAboutMe";
import { CustomExperience } from "./components/layout/CustomExperience";
import { CustomHeader } from "./components/layout/CustomHeader";
import { CustomHero } from "./components/layout/CustomHero";
import { CustomProjects } from "./components/layout/CustomProjects";

function PortfolioApp() {
    return (
        <>
            <CustomHeader />
            <CustomHero />
            <CustomAboutMe />
            <CustomExperience />
            <CustomProjects />
        </>
    );
}

export default PortfolioApp;
