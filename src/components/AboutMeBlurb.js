import Image from "next/image";
import Link from "next/link";
import { BsArrow90DegUp } from "react-icons/bs";

const AboutMeBlurb = () => {
    return (
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-5 py-10 sm:px-8 md:px-10 lg:flex-row lg:items-start lg:py-20">
            {/* <div className="mb-10 lg:hidden">
                <Image src="/me.jpeg" width={256} height={256} className="rounded-full" />
            </div> */}
            <div className="mb-10 md:hidden">
                <Image src="/me.jpeg" width={128} height={128} className="rounded-full" />
            </div>
            <div className="mb-10 hidden md:block lg:hidden">
                <Image src="/me.jpeg" width={256} height={256} className="rounded-full" />
            </div>
            {/* <div className="w-full text-lg text-gray-800 dark:text-gray-300 md:w-1/2"> */}
            {/* <div className="w-full text-lg text-gray-500 selection:bg-cyan-300 selection:text-cyan-900 dark:text-zinc-400 md:w-1/2">
                Hello! My name is{" "}
                <div className="inline-block rounded-md py-1 duration-300 hover:translate-x-2 hover:-rotate-3 hover:scale-110 hover:bg-[#f08057] hover:px-2  hover:text-black">
                    Nathan
                </div>{" "}
                and I love writing code 😁.
                <br />
                <br />
                Fueled by a passion for technology, music and sports, I am a multi-talented machine
                learning engineer and full-stack developer with a wealth of experience and a proven
                track record of success. My expertise in the field of machine learning and
                biomedical signal processing is highlighted by my numerous published academic
                studies, demonstrating my dedication to advancing the field and sharing my knowledge
                with others.
                <br />
                <br />
                In addition to my work in machine learing and AI, I have also honed my skills as a
                full stack developer, bringing a wide range of mobile applications and websites to
                life. With a focus on building robust, scalable software that delivers real-world
                results, I am driven to make a positive impact through my work.
                <br />
                <br />
                Join me on my journey as I continue to explore and expand my passion for technology
                with my, always seeking out new challenges and opportunities to grow.
                <br />
                <br />I am based in Toronto, Canada.
            </div> */}
            <div className="w-full text-base text-gray-500 selection:bg-cyan-300 selection:text-cyan-900 dark:text-zinc-400 sm:text-lg lg:w-3/5">
                Hello! My name is{" "}
                <div className="inline-block rounded-md py-1 duration-300 hover:translate-x-2 hover:-rotate-3 hover:scale-110 hover:bg-[#f08057] hover:px-2  hover:text-black">
                    Nathan
                </div>{" "}
                and I love writing code 😁.
                <br />
                <br />
                I first came to Canada in 2015 to pursue a degree in electrical engineering at
                McGill University. During this time, I discovered a passion for computer science and
                machine learning, opting to pursue them both with my final year of technical
                elective courses. After receiving my B. Eng. In Electrical Engineering, I was
                privileged to start a position as a software engineer at a local Montreal startup,
                Stocate. There, I continued to develop my full-stack web development skills,
                learning a wide range of technologies in a relatively short space of time out of
                necessity for the business. I delivered their entire mobile application and
                contributed heavily to their website and database construction. I quickly rose
                through the ranks at Stocate, briefly becoming interim CTO, before eventually
                leaving to pursue my master's degree.
                <br />
                <br />
                During my master's degree at McGill University, I conducted research for my lab's
                Non-Invasive Physical Activity Monitoring System (NiPAMS) project, focusing on the
                application and optimization of various machine learning models to predict human
                vital sign information from vibrational cardiography data. I led the machine
                learning component of the NiPAMS team, producing models that predicted vital sign
                information such as blood pressure, respiration rate, respiration phase, respiration
                volume, etc., with accuracies averaging around 92.5%. This work led to multiple
                published academic papers and ultimately my thesis.
                <br />
                <br />
                I completed my M. Sc. in June of this year (2023), and have since been working as a
                part-time AI/ML consultant while I spend my free time building various coding
                projects (such as this very website!) and applying to full-time software engineering
                positions.
                <br />
                <br />
                Outside of my work, I am also immensely passionate about music, sports and
                generative AI. I produce{" "}
                <Link
                    href="https://linktr.ee/celebrityclairmonte"
                    className="font-bold text-gray-600 underline decoration-[#f08057] hover:text-[#f08057] hover:decoration-gray-600 dark:text-zinc-300 dark:hover:text-[#f08057] dark:hover:decoration-zinc-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    my own music
                </Link>
                , am an avid Manchester United fan, and have been tinkering with LLM technologies
                since the emergence of ChatGPT in November of last year; even building a couple cool
                applications with them that you can check out on{" "}
                <Link
                    href="/projects"
                    className="font-bold text-gray-600 underline decoration-[#f08057] hover:text-[#f08057] hover:decoration-gray-600 dark:text-zinc-300 dark:hover:text-[#f08057] dark:hover:decoration-zinc-300"
                >
                    my projects page
                </Link>
                !
                <br />
                <br />
                Join me on my journey as I continue to explore and expand my passion for coding and
                technology, always seeking out new challenges and opportunities to grow. I am
                currently based in Toronto, Canada.
            </div>
            <div className="relative -mr-32 -mt-0 hidden w-full lg:block lg:w-2/5">
                <Image src="/me.jpeg" width={512} height={512} className="drop-shadow-lg" />
                <div className="mr-0 mt-2 flex flex-row gap-2">
                    <BsArrow90DegUp />
                    <p className="mt-1 font-mono text-sm">That's me!</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMeBlurb;
