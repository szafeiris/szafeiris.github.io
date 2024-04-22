import InfoSection from "../InfoSection/InfoSection";

export interface PersonalInfo {
    name: string;
    value?: string;
}

export interface AboutProps {
    role: string;
    picture: string;
    intro: string;
    personalData: PersonalInfo[];
    resumeFile: string;
    resumeFileName: string;
}

export default function About({
    role,
    picture,
    intro,
    personalData,
    resumeFile,
    resumeFileName,
}: AboutProps) {
    return (
        <>
            <InfoSection id="about" title="About Me">
                <div className="col-12  order-sm-2">
                    <h3 className="mb-4">{role}</h3>
                    <p className="text-justify">{intro}</p>
                    <div className="row mb-3">
                        {personalData.map(
                            (personalInfo, i) =>
                                personalInfo.value && (
                                    <div className="col-sm-6 py-2" key={i}>
                                        <h6>
                                            {personalInfo.name + ": "}
                                            <span className="text-secondary">
                                                {personalInfo.value}
                                            </span>
                                        </h6>
                                    </div>
                                )
                        )}
                    </div>
                    <div className="container text-center text-lg-start">
                        <a
                            className="btn btn-outline-primary"
                            href={resumeFile}
                            download={resumeFileName}
                        >
                            Download CV
                        </a>
                    </div>
                </div>
                {false && (
                    <div className="col-lg-5 mb-sm-3 mt-lg-0 pb-lg-0 order-lg-2">
                        <img
                            className="img-fluid rounded w-100"
                            src={picture}
                            alt=""
                        />
                    </div>
                )}
            </InfoSection>
        </>
    );
}
