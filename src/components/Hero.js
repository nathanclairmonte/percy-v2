import Image from "next/image";
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <div className="mx-auto flex max-w-6xl flex-row justify-between px-8 py-10 md:py-20">
            <div className="flex flex-col gap-8">
                <div className="">
                    <h1 className="text-5xl text-slate-800 dark:text-slate-200">
                        Hey! My name is{" "}
                    </h1>
                    <div className="inline-block rounded-md py-3 text-5xl duration-300 hover:translate-x-2 hover:-rotate-3 hover:scale-110 hover:bg-[#f08057] hover:px-4 hover:text-black  dark:text-slate-200 dark:hover:text-black">
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
                            wrapperClassName: "text-5xl text-[#f08057]",
                            cursorClassName: "text-5xl text-gray-300 dark:text-gray-500",
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
                {/* svg */}
                {/* potential little message underneath */}
            </div>
        </div>
    );
};

export default Hero;
