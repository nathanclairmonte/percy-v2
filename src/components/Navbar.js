import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Link from "next/link";
import { BsLinkedin, BsTwitter, BsGithub, BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const NavBar = () => {
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // set mounted state
    useEffect(() => {
        setMounted(true);
    }, []);

    // function to select nav link styles based on router path
    const _navLinkStylesHelper = (route) => {
        if (router.asPath === route) {
            return "font-semibold text-[#EE6F41] hover:cursor-pointer hover:opacity-80 dark:text-[#f08057]";
        } else {
            return "font-normal text-[#888581] hover:cursor-pointer hover:opacity-80 dark:text-gray-300";
        }
    };

    return (
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-20">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                    <Link href="/" className="hover:cursor-pointer hover:opacity-80">
                        <h1 className="-mt-5 rounded bg-black p-2 text-4xl font-semibold text-[#f08057]">
                            Nc.
                        </h1>
                        {/* Would love to do something else cool here. Keep an eye out for something we could use */}
                    </Link>
                </div>

                <div className="hidden md:flex md:flex-row md:gap-4">
                    <Link href="/" className={_navLinkStylesHelper("/")}>
                        Home
                    </Link>
                    <div className="w-px bg-[#F6AD92] dark:bg-[#F2916E]" />
                    <Link href="/about" className={_navLinkStylesHelper("/about")}>
                        About
                    </Link>
                    <div className="w-px bg-[#F6AD92] dark:bg-[#F2916E]" />
                    <Link href="/projects" className={_navLinkStylesHelper("/projects")}>
                        Projects
                    </Link>
                    <div className="w-px bg-[#F6AD92] dark:bg-[#F2916E]" />
                    <Link href="/resume" className={_navLinkStylesHelper("/resume")}>
                        Resume
                    </Link>
                    <div className="w-px bg-[#F6AD92] dark:bg-[#F2916E]" />
                    <Link href="/contact" className={_navLinkStylesHelper("/contact")}>
                        Contact
                    </Link>
                </div>

                <div className="flex flex-row items-center gap-4">
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
                    <button
                        aria-label="Toggle Dark Mode"
                        type="button"
                        className="ml-2 h-10 w-10 p-3 focus:outline-none"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        {mounted &&
                            (theme === "dark" ? (
                                <BsFillSunFill className="h-4 w-4 text-[#EAB308]" />
                            ) : (
                                <BsFillMoonFill className="h-4 w-4 text-[#F8C632]" />
                            ))}
                    </button>
                </div>
            </div>
            <div className="mt-5 flex flex-row justify-center gap-4 md:hidden">
                <Link href="/" className={_navLinkStylesHelper("/")}>
                    Home
                </Link>
                <div className="w-px bg-[#F6AD92] dark:bg-[#F2916E]" />
                <Link href="/about" className={_navLinkStylesHelper("/about")}>
                    About
                </Link>
                <div className="w-px bg-[#F6AD92] dark:bg-[#F2916E]" />
                <Link href="/projects" className={_navLinkStylesHelper("/projects")}>
                    Projects
                </Link>
                <div className="w-px bg-[#F6AD92] dark:bg-[#F2916E]" />
                <Link href="/resume" className={_navLinkStylesHelper("/resume")}>
                    Resume
                </Link>
                <div className="w-px bg-[#F6AD92] dark:bg-[#F2916E]" />
                <Link href="/contact" className={_navLinkStylesHelper("/contact")}>
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
