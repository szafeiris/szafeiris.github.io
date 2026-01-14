import { JobTitle } from "./WorkExperience";

export interface ResearchTitle extends JobTitle {
    laboratory: string;
}

export default function ResearchExperience({
    researchHistory,
}: {
    researchHistory: ResearchTitle[];
}) {
    return (
        <>
            <div className="col-lg-6">
                <h3 className="mb-4">Research Experience</h3>
                <div className="pt-2 pe-4 ms-2">
                    {researchHistory.map((researchTitle, i) => (
                        <div className="position-relative mb-4" key={i}>
                            <small>
                                {researchTitle.from} -{" "}
                                {researchTitle.to ?? "Present"}
                            </small>
                            <h5 className="mb-1">{researchTitle.title}</h5>
                            <p className="mb-2">
                                <strong>{researchTitle.organization}</strong>
                                {", " + researchTitle.laboratory + " "}
                                {researchTitle.employmentType
                                    ? "| " + researchTitle.employmentType
                                    : ""}
                            </p>
                            <p className="text-justify">
                                {researchTitle.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
