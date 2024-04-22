import InfoSection from "../InfoSection/InfoSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ProgressBar } from "react-bootstrap";

export interface Skill {
    name: string;
    percentage: number;
    icon?: IconProp;
}

function Skills({ skills }: { skills: Skill[] }) {
    return (
        <>
            <InfoSection id="skills" title="Skills" className="mt-6">
                {skills
                    .sort((s1, s2) => (s1.percentage > s2.percentage ? -1 : 1))
                    .map((skill, i) => (
                        <div key={i} className="col-md-4">
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="fw-bold">{skill.name}</h6>
                                    <h6 className="fw-bold">
                                        {skill.icon ? (
                                            <FontAwesomeIcon
                                                icon={skill.icon!}
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </h6>
                                </div>
                                <ProgressBar
                                    now={skill.percentage}
                                    label={`${skill.percentage}%`}
                                />
                            </div>
                        </div>
                    ))}
            </InfoSection>
        </>
    );
}

export default Skills;
