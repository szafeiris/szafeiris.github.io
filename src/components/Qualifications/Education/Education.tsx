export interface EducationalMilestone {
    title: string;
    institution: string;
    department: string;
    from: number;
    to: number;
    description: string;
}

export default function Education({ educationalMilestones }: { educationalMilestones: EducationalMilestone[] }) {
    return (
        <>
            <div className='col-lg-6'>
                <h3 className='mb-4 '>Education</h3>

                <div className='border-left border-primary pt-2 pe-4 ms-2'>
                    {educationalMilestones.map((edu, i) => (
                        <div
                            className='position-relative mb-4'
                            key={i}
                        >
                            <small>
                                {edu.from} - {edu.to}
                            </small>
                            <h5 className='mb-1'>{edu.title}</h5>
                            <p>
                                <strong>{edu.institution}</strong>, {edu.department}
                            </p>

                            <p className='text-justify'>{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
