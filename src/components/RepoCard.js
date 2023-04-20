import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const RepoCard = ({ repo }) => {
    return (
        <Link
            href={repo.clone_url}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-cyan-200 hover:bg-cyan-50 hover:dark:border-amber-600 hover:dark:bg-amber-700/30"
            target="_blank"
            rel="noopener noreferrer"
        >
            <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-100">{repo.name}</h1>
            <p className="my-4 text-base font-normal text-gray-500 dark:text-zinc-400">
                {repo.description}
            </p>
            <div className="flex flex-row items-center gap-2">
                <h2 className="font-semibold">View Repo</h2>
                <div className="duration-300 group-hover:translate-x-2">
                    <BsArrowRight className="text-md mt-1" />
                </div>
            </div>
        </Link>
    );
};

export default RepoCard;
