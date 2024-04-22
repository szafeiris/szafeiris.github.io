import InfoSection from "../InfoSection/InfoSection";
import ResearchExperience, {
    ResearchTitle,
} from "../Qualifications/Experience/ResearchExperience";
import { PublicationData } from "./Publications/Publication";
import Publications from "./Publications/Publications";

export interface ResearchProps {
    researchTitles: ResearchTitle[];
    publications: PublicationData[];
}

export default function Research({
    researchTitles,
    publications,
}: {
    researchTitles: ResearchTitle[];
    publications: PublicationData[];
}) {
    return (
        <>
            <InfoSection id="research" title="Research" className="mb-5">
                <ResearchExperience researchHistory={researchTitles} />
                <Publications publications={publications} />
            </InfoSection>
        </>
    );
}
