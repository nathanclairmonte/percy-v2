import GitHubCalendar from "react-github-calendar";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";

const CommitHistory = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="mx-auto max-w-6xl selection:bg-cyan-300 selection:text-cyan-900">
            <div className="mx-10 mb-20 flex flex-col items-center justify-between md:mb-10 md:flex-row md:pt-40">
                <h1 className="mb-10 mt-20 max-w-lg text-center text-6xl font-bold text-gray-500 dark:text-gray-600 md:my-0 md:text-left lg:text-8xl">
                    Commit History
                </h1>
                <Link
                    href="https://github.com/nathanclairmonte"
                    className="flex flex-row items-center gap-4 rounded-md bg-[#f08057] px-8 py-4 text-xl shadow-lg hover:opacity-80"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <RxExternalLink className="mt-0.5 text-2xl" />
                    View GitHub
                </Link>
            </div>
            <div className="px-4 sm:px-10 lg:mt-20">
                <GitHubCalendar
                    username="nathanclairmonte"
                    year={year}
                    blockSize={15}
                    blockMargin={5}
                    color="#f08057"
                    fontSize={16}
                />
            </div>
        </div>
    );
};

export default CommitHistory;
