import Image from "next/image";
import Typewriter from "typewriter-effect";
import styles from "./HomePage.module.css";

const Greeting = () => {
    return (
        <div className={styles.greeting_container}>
            <div className={styles.greeting_text_container}>
                <h1 className={styles.greeting_text}>
                    Hey!{" "}
                    <span className={styles.wave_icon} role="img" aria-labelledby="wave">
                        👋🏾
                    </span>
                </h1>

                <h1 className={styles.greeting_text}>
                    I'm <strong className={styles.greeting_text_name}>Nathan Clairmonte</strong>
                </h1>

                <div className={styles.typewriter_container}>
                    <Typewriter
                        options={{
                            strings: [
                                "Machine Learning Engineer",
                                "Data Scientist",
                                "Full-Stack Developer",
                                "Web/App Developer",
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                </div>
            </div>
            <div>
                <Image src="/man_at_desk_casual.png" className={styles.home_img} alt="Home Image" />
            </div>
        </div>
    );
};

export default Greeting;
