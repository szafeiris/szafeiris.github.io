import * as Icon from "react-feather";

export default function Contact() {
    const linkClass =
        "w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500 border-0 border-gray-800 active:border";
    const iconClass =
        "text-gray-500 hover:text-gray-800 transition ease-in-out duration-500";

    const linkData = [
        {
            link: "https://github.com/szafeiris",
            title: "GitHub",
            icon: <Icon.GitHub className={iconClass} />,
        },
        {
            link: "https://gitlab.com/szafeiris",
            title: "Gitlab",
            icon: <Icon.Gitlab className={iconClass} />,
        },
        {
            link: "https://www.linkedin.com/in/szafeiris/",
            title: "Linkedin",
            icon: <Icon.Linkedin className={iconClass} />,
        },

        {
            link: "https://www.instagram.com/szafeiris/",
            title: "Instagram",
            icon: <Icon.Instagram className={iconClass} />,
        },
    ];

    return (
        <>
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="text-center">
                    <h1 className="font-medium text-gray-700 text-4xl md:text-5xl mb-5">
                        Contact
                    </h1>

                    <p className="font-normal text-gray-400 text-md md:text-lg mb-20">
                        I’m not currently taking on new client work but feel
                        free to contact me for any <br /> other inquiries.
                    </p>

                    <div className="flex items-center justify-center space-x-8">
                        {linkData.map((item) => (
                            <a
                                href={item.link}
                                target="blank"
                                title={item.title}
                                className={linkClass}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
