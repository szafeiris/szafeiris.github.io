import Intro from "./components/Intro";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import "./App.css";

function App() {
    return (
        <>
            <div className="bg-gray-100">
                <Intro />
                <Education />
                {/* <Experience /> */}
                {/* <Portfolio /> */}
                <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">
                    <Contact />
                </footer>
            </div>
        </>
    );
}

export default App;
