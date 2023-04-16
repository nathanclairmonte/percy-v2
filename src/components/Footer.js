import Link from "next/link";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-20">
            <div className="h-0.5 w-full bg-[#f08057]"></div>
            <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
                <p>&copy; {year} Nathan Clairmonte. All Rights Reserved.</p>

                <div>
                    Made by{" "}
                    <div className="inline-block duration-300 hover:translate-x-2 hover:-rotate-3 hover:scale-110">
                        <Link
                            href="/"
                            className="rounded-md px-2 py-1 hover:bg-[#f08057]  hover:text-black"
                        >
                            Nathan Clairmonte
                        </Link>
                    </div>
                </div>

                <div className="flex flex-row gap-4">
                    <Link
                        href="https://www.linkedin.com/in/nathanclairmonte/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsLinkedin className="text-2xl font-normal text-[#f08057] hover:cursor-pointer hover:opacity-80" />
                    </Link>
                    <Link
                        href="https://github.com/nathanclairmonte"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsGithub className="text-2xl font-normal text-[#f08057] hover:cursor-pointer hover:opacity-80" />
                    </Link>
                    <Link
                        href="https://twitter.com/cIairmonte"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsTwitter className="text-2xl font-normal text-[#f08057] hover:cursor-pointer hover:opacity-80" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
