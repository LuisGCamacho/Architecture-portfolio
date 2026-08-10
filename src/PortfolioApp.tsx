import { CustomAboutMe } from "./components/CustomAboutMe";
import { CustomExperience } from "./components/CustomExperience";
import { CustomHeader } from "./components/CustomHeader";
import { CustomHero } from "./components/CustomHero";
import { CustomProjects } from "./components/CustomProjects";

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
