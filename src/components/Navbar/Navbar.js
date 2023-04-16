import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Link from "next/link";
import { BsLinkedin, BsTwitter, BsGithub, BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import styles from "./Navbar.module.css";

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
            return `${styles.nav_links_main_selected}`;
        } else {
            return `${styles.nav_links_main_normal}`;
        }
    };

    return (
        <div className={styles.main_container}>
            <div className={styles.nav_container}>
                <div className={styles.nav_logo_container}>
                    <Link href="/">
                        <h1>Nathan Clairmonte</h1>
                        {/* Would love to do something else cool here. Keep an eye out for something we could use */}
                    </Link>
                </div>

                <div className={styles.nav_links_main}>
                    <Link href="/about" className={_navLinkStylesHelper("/about")}>
                        About
                    </Link>
                    <Link href="/projects" className={_navLinkStylesHelper("/projects")}>
                        Projects
                    </Link>
                    <Link href="/resume" className={_navLinkStylesHelper("/resume")}>
                        Resume
                    </Link>
                    <Link href="/contact" className={_navLinkStylesHelper("/contact")}>
                        Contact
                    </Link>
                </div>

                <div className={styles.nav_links_social}>
                    <Link
                        href="https://www.linkedin.com/in/nathanclairmonte/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsLinkedin className={styles.nav_icon} />
                    </Link>
                    <Link
                        href="https://github.com/nathanclairmonte"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsGithub className={styles.nav_icon} />
                    </Link>
                    <Link
                        href="https://twitter.com/cIairmonte"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsTwitter className={styles.nav_icon} />
                    </Link>
                    <button
                        aria-label="Toggle Dark Mode"
                        type="button"
                        className={styles.theme_button_container}
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        {mounted &&
                            (theme === "dark" ? (
                                <BsFillSunFill className={styles.theme_icon} />
                            ) : (
                                <BsFillMoonFill className={styles.theme_icon} />
                            ))}
                    </button>
                </div>
            </div>
            <div className={styles.nav_links_main_2}>
                <Link href="/about" className={_navLinkStylesHelper("/about")}>
                    About
                </Link>
                <Link href="/projects" className={_navLinkStylesHelper("/projects")}>
                    Projects
                </Link>
                <Link href="/resume" className={_navLinkStylesHelper("/resume")}>
                    Resume
                </Link>
                <Link href="/contact" className={_navLinkStylesHelper("/contact")}>
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
