import { ReactNode } from "react";

export interface JobTitle {
    title: string;
    organisation: string;
    employmentType?: string;
    from: string;
    to?: string;
    description: (string | ReactNode)[] | string | ReactNode;
}

export default function WorkExperience({
    jobHistory,
}: {
    jobHistory: JobTitle[];
}) {
    return (
        <>
            <div className="col-lg-6">
                <h3 className="mb-4">Work Expericence</h3>
                <div className="pt-2 pe-4 ms-2">
                    {jobHistory.map((job, i) => (
                        <div className="mb-4" key={job.title}>
                            <small>
                                {job.from} - {job.to ?? "Present"}
                            </small>
                            <h5 className="mb-1">{job.title}</h5>
                            <p className="mb-2">
                                <strong>{job.organisation}</strong>{" "}
                                {job.employmentType
                                    ? "| " + job.employmentType
                                    : ""}
                            </p>
                            <p key={i} className="text-justify">
                                {job.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
