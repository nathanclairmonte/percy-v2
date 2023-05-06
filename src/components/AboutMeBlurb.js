import Image from "next/image";
import { BsArrow90DegUp } from "react-icons/bs";

const AboutMeBlurb = () => {
    return (
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-5 py-10 sm:px-8 md:flex-row md:py-20">
            <div className="mb-10 md:hidden">
                <Image src="/me.jpeg" width={128} height={128} className="rounded-full" />
            </div>
            {/* <div className="w-full text-lg text-gray-800 dark:text-gray-300 md:w-1/2"> */}
            <div className="w-full text-lg text-gray-500 selection:bg-cyan-300 selection:text-cyan-900 dark:text-zinc-400 md:w-1/2">
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
            </div>
            <div className="relative -mr-32 -mt-20 hidden w-full md:block md:w-1/2">
                <Image src="/me.jpeg" width={512} height={512} className="drop-shadow-lg" />
                <div className="mr-0 mt-3 flex flex-row gap-2">
                    <BsArrow90DegUp />
                    <p className="mt-1 font-mono text-sm">That's me!</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMeBlurb;
