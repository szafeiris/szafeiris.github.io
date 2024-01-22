import logoSmallImage from "../assets/images/logo-small.png";
import personImage from "../assets/images/persona.jpg";

import * as Icon from "react-feather";

export default function Intro() {
    const introData = {
        role: "Full Stack Software Developer",
        // greeting: "Hi! I am Stelios, a pasionate software engineer.",
        greeting: "",
    };

    const handleCVDownload = () => {};

    return (
        <>
            <section>
                <div className="container max-w-screen-xl mx-auto px-4">
                    <nav className="flex items-center justify-between mb-20">
                        <img
                            className="object-scale-down w-16"
                            src={logoSmallImage}
                            alt="Logo showing a photo of the developer"
                        />

                        <button
                            className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500 disabled:cursor-not-allowed"
                            onClick={handleCVDownload}
                            disabled={true}
                        >
                            <Icon.Download className="inline" /> Download my CV
                        </button>
                    </nav>

                    <div className="text-center">
                        <div className="flex justify-center mb-16">
                            <img
                                className="rounded-full border-2 border-sky-100 shadow-xl shadow-gray-600"
                                src={personImage}
                                alt="Image showing the developer"
                            />
                        </div>

                        <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
                            Stylianos Zafeiris
                        </h6>

                        <h1 className="font-normal text-gray-900 text-4xl md:text-5xl leading-none mb-8">
                            {introData.role}
                        </h1>

                        <p className="font-normal text-gray-600 text-md md:text-xl mb-20">
                            {introData.greeting}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
