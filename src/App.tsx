import { useEffect } from "react";

import ScrollToBottomIcon from "./components/ScrollToBottomIcon/ScrollToBottomIcon";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Qualifications from "./components/Qualifications/Qualifications";
import Research from "./components/Research/Research";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";

import { siteData } from "./SiteData";

function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar links={siteData.navigation} />
            <Home {...siteData.home} />
            <About {...siteData.about} />
            <Qualifications {...siteData.qualifications} />
            <Research {...siteData.research} />
            <Skills skills={siteData.skills} />
            <Footer {...siteData.footer} />
            <ScrollToBottomIcon />
            <ScrollToTopButton />
        </>
    );
}

export default App;
