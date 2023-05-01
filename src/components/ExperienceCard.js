const bullets = ["bullet 1", "bullet 2", "bullet 3", "bullet 4"];

const expStart = "Aug 2020";
const expEnd = "Apr 2023";

const title = "Software Engineer/Chief Technology Officer";

const company = "Stocate";

const location = "Montréal, Quebec/Toronto, Ontario (Remote)";

const ExperienceCard = ({ experience }) => {
    return (
        <div className="flex flex-col gap-1 rounded-xl border-0 border-gray-400 px-6 py-7 dark:border-gray-500">
            {/* first line (title & duration) */}
            <div className="mt-1 flex flex-col items-start justify-between gap-2 text-2xl font-bold text-gray-700 dark:text-gray-100 md:flex-row">
                {/* title */}
                {/* <h1>Experience Title </h1> */}
                <h1>{experience.title}</h1>

                {/* duration */}
                <h1 className="flex-shrink-0 text-xl">
                    {experience.duration.start} <span className="text-[#f08057]">—</span>{" "}
                    {experience.duration.end}
                </h1>
            </div>

            {/* second line (company & location) */}
            <div className="mt-4 flex flex-col items-start justify-start gap-0 text-lg font-semibold italic text-gray-700 dark:text-zinc-200 sm:mt-3 sm:flex-row sm:items-center sm:gap-2 md:mt-1">
                {/* company */}
                <h2>{experience.company}</h2>
                <h2 className="hidden text-xl font-normal text-[#f08057] sm:block">|</h2>
                {/* location */}
                <h2>{experience.location}</h2>
            </div>

            {/* bullet points */}
            {experience.bullets && (
                <ul className="ml-6 mt-5 list-disc space-y-1 text-lg text-gray-500 marker:text-[#f08057] dark:text-zinc-400">
                    {experience.bullets.map((bullet) => (
                        <li>{bullet}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExperienceCard;
