import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { useTheme } from "next-themes";

const ProjectCard = ({ project }) => {
    // get theme info
    const { theme } = useTheme();

    return (
        <div className="flex flex-col gap-6 rounded-xl border-0 border-gray-400 px-6 py-7 selection:bg-cyan-300 selection:text-cyan-900 dark:border-gray-500">
            {/* project image */}
            <Image
                src={
                    theme === "dark" && project.imgDark
                        ? project.imgDark
                        : project.img
                        ? project.img
                        : "/projects/placeholder.png"
                }
                width={1024}
                height={200}
                className="-ml-1 rounded-md drop-shadow-md transition duration-150 hover:drop-shadow-xl dark:shadow-white"
            />

            {/* project title */}
            <h1 className="mt-1 text-2xl font-bold text-gray-700 dark:text-gray-100">
                {project.title}
            </h1>

            {/* project description */}
            <p className="text-md -mt-4 whitespace-pre-line text-gray-500 dark:text-zinc-400">
                {project.desc}
            </p>

            {/* project technologies */}
            {/* <h2 className="text-md font-semibold text-gray-700 dark:text-gray-100">
                Technologies:
            </h2> */}
            <div className="mt-1 flex flex-wrap items-center gap-2">
                {project.technologies &&
                    project.technologies.map((tech, idx) => (
                        <div
                            key={idx}
                            className="rounded-sm bg-gray-300 px-2 py-1 text-xs text-black dark:bg-gray-500 dark:text-white"
                        >
                            <p className="italic">{tech}</p>
                        </div>
                    ))}
            </div>

            {/* project links */}
            <div className="mt-1 flex items-center justify-start gap-4">
                {project.gitLink && (
                    <Link
                        href={project.gitLink}
                        className="text-md //shadow-sm flex flex-row items-center gap-2 rounded bg-[#f08057] px-4 py-2 hover:opacity-80"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineGithub className="mt-0.5 text-2xl" />
                        GitHub
                    </Link>
                )}
                {project.webLink && (
                    <Link
                        href={project.webLink}
                        className="text-md //shadow-sm flex flex-row items-center gap-2 rounded bg-[#f08057] px-4 py-2 hover:opacity-80"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineLink className="mt-0.5 text-2xl" />
                        Demo
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
