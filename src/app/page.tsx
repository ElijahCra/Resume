import {Header} from "../components/Header/Header.tsx";
import AboutMe from "../components/Articles/AboutMe.tsx";
import {ContactInformation} from "../components/Articles/ContactInformation.tsx";
import Skills from "../components/Articles/Skills.tsx";
import Professional from "../components/Articles/Professional.tsx";
import Achievements from "../components/Articles/Achievements.tsx";
import {Footer} from "../components/Footer/Footer.tsx";

const Home = () => {
    return (
        <>
            <Header />

            <div className="container">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <AboutMe />
                    <ContactInformation />
                </div>

                <div className="mt-12">
                    <Skills />
                </div>

                <div className="mt-12">
                    <Professional />
                </div>

                <div className="mt-12">
                    <Achievements />
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Home;
