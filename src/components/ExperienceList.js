import { experienceData } from "@/data/experienceData";
import { ExperienceCard } from "@/components/list";

const ExperienceList = () => {
    return (
        <div className="mx-auto mt-10 max-w-6xl px-7">
            <div className="flex flex-col gap-4">
                {experienceData && experienceData.map((exp) => <ExperienceCard experience={exp} />)}
            </div>
        </div>
    );
};

export default ExperienceList;
