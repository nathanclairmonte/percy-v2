import Link from "next/link";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.line_divider}></div>
            <div className={styles.footer_container}>
                <p>&copy; Nathan Clairmonte. All Rights Reserved.</p>

                <div>
                    Made by
                    <div className={styles.footer_myname}>
                        <Link href="/" className={styles.footer_myname_link}>
                            Nathan Clairmonte
                        </Link>
                    </div>
                </div>

                <div className={styles.footer_links_social}>
                    <Link
                        href="https://www.linkedin.com/in/nathanclairmonte/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsLinkedin className={styles.footer_icon} />
                    </Link>
                    <Link
                        href="https://github.com/nathanclairmonte"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsGithub className={styles.footer_icon} />
                    </Link>
                    <Link
                        href="https://twitter.com/cIairmonte"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsTwitter className={styles.footer_icon} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
