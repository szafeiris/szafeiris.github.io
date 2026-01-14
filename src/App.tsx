import { useEffect } from "react";

import ScrollToBottomIcon from "./components/ScrollToBottomIcon/ScrollToBottomIcon";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Navbar, { NavigationLinkData } from "./components/Navbar/Navbar";
import Home, { HomeProps } from "./components/Home/Home";
import About, { AboutProps } from "./components/About/About";
import Qualifications, {
    QualificationsProps,
} from "./components/Qualifications/Qualifications";
import Research, { ResearchProps } from "./components/Research/Research";
import Footer, { FooterProps } from "./components/Footer/Footer";

import {
    faTwitter,
    faFacebookF,
    faInstagram,
    faLinkedin,
    faGithub,
    faGitlab,
    faResearchgate,
    faGoogleScholar,
    faGit,
    faJava,
    faAngular,
    faReact,
    faPython,
    faHtml5,
    faDocker,
} from "@fortawesome/free-brands-svg-icons";

import profilePicture from "./assets/img/person.jpg";
import aboutPicture from "./assets/img/person-2.jpg";
import resumeFile from "./assets/szafeiris_cv.pdf";
import Skills, { Skill } from "./components/Skills/Skills";

export interface SiteData {
    navigation: NavigationLinkData[];
    home: HomeProps;
    about: AboutProps;
    qualifications: QualificationsProps;
    research: ResearchProps;
    skills: Skill[];
    footer: FooterProps;
}

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

const siteData: SiteData = {
    navigation: [
        { id: "home", name: "Home" },
        { id: "about", name: "About" },
        { id: "qualifications", name: "Qualifications" },
        { id: "research", name: "Research" },
        { id: "skills", name: "Skills", offset: -250 },
    ],
    home: {
        jobTitles: [
            "Full Stack Software Engineer",
            "Machine Learning Engineer",
        ],
        typeSpeed: 200,
        deleteSpeed: 20,
        profilePicture,
    },
    about: {
        role: "Full Stack Java Developer",
        picture: aboutPicture,
        intro: "Hello! I'm Stelios, a diligent and passionate young professional with background in Electrical and Computer Engineering. Graduating with honors, I dove into cutting-edge research during my undergraduate studies, exploring the intricate realm of medical imaging and deep learning algorithms. Eager to deepen my understanding, I pursued a master's degree in biomedical engineering. Currently, I am thriving in the software development industry, as a Full Stack Java/Angular Developer, where I blend creativity with technical prowess to craft impactful solutions. But my journey doesn't end there! I'm on a mission to evolve into versatile data scientist, leveraging my technical acumen and problem-solving skills to extract meaningful insights from complex datasets. Driven by curiosity and fueled by ambition, I embrace every challenge as an opportunity for growth. With a steadfast commitment to excellence, I am poised to make a lasting impact in the ever-evolving landscape of technology and data science.",
        personalData: [
            { name: "Name", value: "Stylianos Zafeiris" },
            { name: "Birthday", value: "6 September 1997" },
            { name: "Degree", value: "MSc, BSc" },
            { name: "Email", value: "szafeiris@outlook.com" },
            { name: "Address", value: "Heraklion, Crete, Greece" },
            { name: "Freelance", value: "" },
        ],
        resumeFile,
        resumeFileName: "Stelios Zafeiris' Resume.pdf",
    },
    qualifications: {
        jobHistory: [
            {
                title: "Full Stack Software Developer",
                organization: "Alpha Omega Zed",
                employmentType: "Full Time",
                from: "December 2024",
                description: [
                    "Involved in every step of application development lifecycle.",
                    <br></br>,
                    "Implemented payments through Stripe.",
                    <span className="mb-0 d-block">
                        Back-end technologies: JavaScript • ExpressJS • NestJS
                    </span>,
                    <span className="mb-0 d-block">
                        Front-end technologies: JavaScript • React 18 • NextJS
                    </span>,
                    <span className="mb-0 d-block">
                        Database: MySQL • Oracle • Microsoft Server SQL
                    </span>,
                    <span className="mb-0 d-block">
                        Tools: Docker • Git • Github Actions
                    </span>,
                    <span className="mb-0 d-block">
                        Cloud: AWS • Google Cloud
                    </span>,
                ],
            },
            {
                title: "Full Stack Java Developer",
                organization: "European Dynamics",
                employmentType: "Full Time",
                from: "October 2021",
                to: "December 2024",
                description: [
                    "Involvement in e-procurement projects.",
                    <span className="mb-0 d-block">
                        Back-end technologies: Java • Spring Boot • JSP • Apache
                        Struts 2 • Apache Ant • Maven
                    </span>,
                    <span className="mb-0 d-block">
                        Front-end technologies: JavaScript • Angular 2+ •
                        PrimeNG
                    </span>,
                    <span className="mb-0 d-block">
                        Database: Postgresql • Elasticsearch
                    </span>,
                    <span className="mb-0 d-block">
                        Tools: Docker • Camunda • Git • SVN • Camunda
                    </span>,
                ],
            },
            {
                title: "Junior System Administrator",
                organization: "Technical University of Crete",
                employmentType: "Internship",
                from: "February 2019",
                to: "September 2020",
                description:
                    "My main responsibilities were to support the university faculty, troubleshoot various hardware and software issues, provide system administration functions for local and remote systems, informing user at all stages of the support cycle and enforcing system security policies.",
            },
        ],
        educationalMilestones: [
            {
                title: "MSc. in Biomedical Engineering",
                institution: "University of Crete",
                department: "Medical School",
                from: 2021,
                to: 2023,
                description:
                    "The master program is co-organized by the University of Crete, the Technical University of Crete and the Foundation for Research and Technology – Hellas. My thesis explored the impact of multiple medical image filtering techniques on the performance of state-of-the-art classifiers and feature selection methods.",
            },
            {
                title: "BSc. in Electrical and Computer Engineering",
                institution: "Technical University of Crete",
                department: "School of Electrical and Computer Engineering",
                from: 2015,
                to: 2020,
                description:
                    "During my undergraduate studies, I dove into cutting-edge research, exploring the intricate realm of medical imaging and deep learning algorithms. My bachelor thesis was focused on the classification of bicuspid and tricuspid aortic valve using echocardiograms. In this 5-year cycle of studies I graduated with honors for being in the top 5% of my class, receiving several excellence awards.",
            },
        ],
    },
    research: {
        researchTitles: [
            {
                title: "Research Fellow",
                laboratory: "Digital Image and Signal Processing Laboratory",
                organization: "Technical University of Crete",
                employmentType: "Independent contractor",
                from: "February 2023",
                to: "August 2023",
                description:
                    "Participated in QuaLiSID project, supervised by professor Michalis Zervakis. Conducted research on content recommendation models for individuals with intellectual disability. Developed and co-designed the system’s database. Implemented the back-end of the final system using Python and the frameworks FastAPI and SqlAlchemy. Participate in system’s deployment and debugging. Contributed to the preparation of conference and journal manuscripts.",
            },
            {
                title: "Research Assistant",
                laboratory: "Digital Image and Signal Processing Laboratory",
                organization: "Technical University of Crete",
                employmentType: "Student researcher",
                from: "May 2020",
                to: "September 2020",
                description:
                    "Conducted research on several domains such as: Deep Learning and Convolutional Neural Networks, Digital Image Processing, Classification of Aortic Valve in tricuspid and bicuspid valve configurations using echocardiograms, and 3D Convolutional Neural Networks for video data analysis.",
            },
        ],

        publications: [
            {
                citation: (
                    <>
                        Papadogiorgaki M, Grammalidis N, Grammatikopoulou A,
                        Apostolidis K, Bei ES, Grigoriadis K,{" "}
                        <strong>Zafeiris S</strong>, Livanos G, Mezaris V,
                        Zervakis ME. An Integrated Support System for People
                        with Intellectual Disability. Electronics. 2023;
                        12(18):3803.
                        <a
                            href="https://doi.org/10.3390/electronics12183803"
                            target="blank"
                        >
                            https://doi.org/10.3390/electronics12183803
                        </a>
                    </>
                ),
            },
            {
                citation: (
                    <>
                        M. Papadogiorgaki, K. Apostolidis, G. Livanos, E. S.
                        Bei, <strong>S. Zafeiris</strong>, A. Klados, V.
                        Mezaris, M. E. Zervakis, "A Content Recommendation
                        Platform for People with Intellectual Disability," 2023
                        Fourteenth International Conference on Ubiquitous and
                        Future Networks (ICUFN), Paris, France, 2023, pp. 49-54,
                        doi:
                        <a
                            href="https://doi.org/10.1109/ICUFN57995.2023.10199882"
                            target="blank"
                        >
                            10.1109/ICUFN57995.2023.10199882
                        </a>
                    </>
                ),
            },
        ],
    },
    skills: [
        { name: "Java", percentage: 96, icon: faJava },
        { name: "Python", percentage: 98, icon: faPython },
        { name: "Angular 16", percentage: 90, icon: faAngular },
        { name: "React", percentage: 70, icon: faReact },
        { name: "Spring Boot", percentage: 95 },
        { name: "HTML", percentage: 90, icon: faHtml5 },
        { name: "Git", percentage: 90, icon: faGit },
        { name: "Docker", percentage: 90, icon: faDocker },
        { name: "FastAPI", percentage: 85 },
        { name: "PyTorch", percentage: 70 },
        { name: "TensorFlow", percentage: 75 },
        { name: "Wordpress", percentage: 70 },
    ],
    footer: {
        socialLinks: [
            { href: "https://twitter.com/stelios_zafiris", icon: faTwitter },
            { href: "", icon: faFacebookF },
            {
                href: "https://www.linkedin.com/in/szafeiris/",
                icon: faLinkedin,
            },
            { href: "", icon: faInstagram },
        ],
        repositoryLinks: [
            { href: "https://github.com/szafeiris", icon: faGithub },
            { href: "https://gitlab.com/szafeiris", icon: faGitlab },
        ],
        researchLinks: [
            {
                href: "https://www.researchgate.net/profile/Stylianos-Zafeiris",
                icon: faResearchgate,
            },
            {
                href: "https://scholar.google.gr/citations?user=eFArxdwAAAAJ",
                icon: faGoogleScholar,
            },
        ],
    },
};
