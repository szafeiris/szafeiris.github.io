export default function Education() {
    const educationData = [
        {
            title: "Master in Biomedical Engineering",
            school: "Medical School",
            institution: "University of Crete",
            schoolLink: "http://www.english.med.uoc.gr/",
            institutionLink: "https://en.uoc.gr/",
            duration: {
                start: 2021,
                end: 2023,
            },
            grade: 9.21,
            description: "",
        },
        {
            title: "Bachelor in Electrical and Computer Engineering",
            school: "Electrical and Computer Engineering School",
            institution: "Technical University of Crete",
            schoolLink: "https://www.ece.tuc.gr/en/home",
            institutionLink: "https://www.tuc.gr/en/home",
            duration: {
                start: 2015,
                end: 2020,
            },
            grade: 8.59,
            description: "",
        },
    ];

    return (
        <>
            <section className="py-10 md:py-16">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-6 mt-2">
                        Education
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {educationData.map((education) => (
                            <div className="bg-gray-50 px-8 py-10 rounded-md">
                                <h2 className="font-bold text-gray-700 text-lg mb-4">
                                    {education.title}
                                </h2>
                                <h4 className="font-medium text-gray-700 text-lg mb-4">
                                    {education.duration.start} –{" "}
                                    {education.duration.end}
                                </h4>

                                <p className="font-normal text-gray-500 text-md mb-4">
                                    {education.description}
                                </p>

                                <div className="relative">
                                    <h6 className="font-semibold text-gray-500 text-md relative z-10">
                                        <a
                                            className="py-4"
                                            href={education.schoolLink}
                                            target="blank"
                                        >
                                            {education.school}
                                        </a>
                                        ,{" "}
                                        <a
                                            className="py-4"
                                            href={education.institutionLink}
                                            target="blank"
                                        >
                                            {education.institution}
                                        </a>
                                    </h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
