import { technologies } from "@/data/technologies";

const TechStack = () => {
    return (
        <div className="mx-auto max-w-6xl selection:bg-cyan-300 selection:text-cyan-900">
            <h1 className="mx-10  mb-10 mt-20 max-w-lg text-center text-5xl font-bold text-gray-500 dark:text-gray-600 sm:text-left  sm:text-6xl md:text-7xl lg:text-8xl">
                Professional Skillset
            </h1>
            <div className="grid grid-cols-2 gap-8 px-10 sm:grid-cols-3 md:grid-cols-4 lg:mt-20 lg:grid-cols-5">
                {technologies &&
                    technologies.map((tech, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-400 px-5 py-4 transition-colors hover:border-cyan-200 hover:bg-cyan-50 dark:border-gray-500 hover:dark:border-amber-600 hover:dark:bg-amber-700/30"
                        >
                            {tech.icon}
                            <p className="text-center text-lg">{tech.name}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default TechStack;
