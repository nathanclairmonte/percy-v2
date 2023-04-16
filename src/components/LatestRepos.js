import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";
import { RepoCard } from "@/components/list";

const LatestRepos = ({ repos }) => {
    return (
        <div className="mx-auto max-w-6xl">
            <div className="mx-10 mb-20 flex flex-col items-center justify-between md:mb-0 md:flex-row md:pt-40">
                <h1 className="mb-10 mt-20 max-w-lg text-center text-6xl font-bold text-gray-500 dark:text-gray-600 md:my-0 lg:text-left lg:text-9xl">
                    Recent Repositories
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
            <div className="grid grid-cols-1 gap-8 px-10 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
                {repos && repos.map((repo, idx) => <RepoCard repo={repo} key={idx} />)}
            </div>
        </div>
    );
};

export default LatestRepos;
