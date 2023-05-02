import { projectsData } from "@/data/projectsData";
import { ProjectCard } from "@/components/list";

const ProjectsList = () => {
    return (
        <div className="mx-auto mt-10 max-w-6xl sm:px-7">
            {/* <div className="grid grid-cols-1 gap-8 px-10 sm:grid-cols-2 md:grid-cols-3 lg:mt-20 lg:grid-cols-4"> */}
            {/* <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-2">
                {projectsData &&
                    projectsData.map((project, idx) => <ProjectCard project={project} key={idx} />)}
            </div>
        </div>
    );
};

export default ProjectsList;
