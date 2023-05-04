import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { BsArrow90DegUp } from "react-icons/bs";

const Hero = () => {
    return (
        <div className="mx-auto flex max-w-6xl flex-row justify-between px-8 py-10 selection:bg-cyan-300 selection:text-cyan-900 md:py-20">
            <div className="flex flex-grow flex-col items-center gap-8 md:items-start">
                <div className="flex w-full flex-col items-center md:items-start">
                    <h1 className="text-3xl text-slate-800 dark:text-slate-200 sm:text-5xl">
                        Hey! My name is{" "}
                    </h1>
                    <div className="inline-block rounded-md py-3 text-3xl duration-300 hover:translate-x-2 hover:-rotate-3 hover:scale-110 hover:bg-[#f08057] hover:px-4 hover:text-black dark:text-slate-200  dark:hover:text-black sm:text-5xl">
                        Nathan Clairmonte
                    </div>
                </div>
                <div className="">
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
                            wrapperClassName: "text-3xl sm:text-5xl text-[#f08057]",
                            cursorClassName:
                                "text-3xl sm:text-5xl text-gray-300 dark:text-gray-500",
                        }}
                    />
                </div>
            </div>
            <div className="relative -mr-32 -mt-20 hidden w-full md:w-1/2 lg:block">
                {/* For the image, could be cool to like pull a random nice image from Unsplash
                They tend to have nice high quality images. Maybe find some way to make it
                dynamic and cool? Like related to current news or something like that?
                Then a little message underneath talking about it lol. Idk. Gonna ask
                ChatGPT right now actually. */}
                <Image src="/sunset.jpeg" width={512} height={512} />
                <div className="mt-3 flex flex-row gap-2 pr-2">
                    <BsArrow90DegUp />
                    <div className="mt-1 flex flex-row gap-2 font-mono text-sm">
                        A cool AI-generated image!
                        {/* A cool AI-generated image created with{" "}
                        <div className="group transition duration-300 hover:cursor-pointer">
                            <Link
                                href="/"
                                className="font-semibold text-[#EE6F41] dark:text-[#f08057]"
                            >
                                code I wrote!
                            </Link>
                            <span class="block h-0.5 max-w-0 bg-[#EE6F41] transition-all duration-500 group-hover:max-w-full dark:bg-[#f08057]"></span>
                        </div> */}
                        {/* put a link around the 'code I wrote' part, to the github for it */}
                    </div>
                </div>
                {/* svg */}
                {/* potential little message underneath */}
            </div>
        </div>
    );
};

export default Hero;
