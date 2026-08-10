import { CustomAboutMe } from "./components/layout/CustomAboutMe";
import { CustomExperience } from "./components/layout/CustomExperience";
import { CustomFooter } from "./components/layout/CustomFooter";
import { CustomHeader } from "./components/layout/CustomHeader";
import { CustomHero } from "./components/layout/CustomHero";
import { CustomProjects } from "./components/layout/CustomProjects";
import { CustomSkills } from "./components/layout/CustomSkills";

function PortfolioApp() {
    return (
        <>
            <CustomHeader />
            <CustomHero />
            <CustomAboutMe />
            <CustomExperience />
            <CustomProjects />
            <CustomSkills />
            <CustomFooter />
        </>
    );
}

export default PortfolioApp;
