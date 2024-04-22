import InfoSection from '../InfoSection/InfoSection';
import Education, { EducationalMilestone } from './Education/Education';
import WorkExperience, { JobTitle } from './Experience/WorkExperience';

export interface QualificationsProps {
    jobHistory: JobTitle[];
    educationalMilestones: EducationalMilestone[];
}

export default function Qualifications({ jobHistory, educationalMilestones }: QualificationsProps) {
    return (
        <>
            <InfoSection
                id='qualifications'
                title='Qualifications'
            >
                <Education educationalMilestones={educationalMilestones} />
                <WorkExperience jobHistory={jobHistory} />
            </InfoSection>
        </>
    );
}
