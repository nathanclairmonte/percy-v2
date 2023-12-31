import React, { useState, useEffect } from "react";
import { fireworksOptions } from "@/data/fireworksOptions";
import { DotGothic16, Roboto } from "next/font/google";

import { NoNavbarLayout } from "@/components/list";
import { Fireworks } from "@fireworks-js/react";
import "@/styles/Countdown.module.css";
import clsx from "clsx";

const gothic = DotGothic16({ weight: ["400"], subsets: ["latin"] });
const roboto = Roboto({ weight: ["400"], subsets: ["latin"] });

const Countdown = () => {
    // const newYearDate = "2024-01-01T00:00:00";
    const newYearDate = "2023-12-31T17:13:00";
    const calculateTimeLeft = (targetDate) => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(newYearDate));
    const [isCelebration, setIsCelebration] = useState(false);
    const [customHours, setCustomHours] = useState(0);
    const [customMinutes, setCustomMinutes] = useState(0);
    const [customSeconds, setCustomSeconds] = useState(0);

    const fireworksStyles = {
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        position: "fixed",
        // background: "#000"
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft((prevTimeLeft) => {
                if (
                    prevTimeLeft.seconds > 1 ||
                    prevTimeLeft.minutes > 0 ||
                    prevTimeLeft.hours > 0
                ) {
                    const totalSeconds =
                        prevTimeLeft.hours * 3600 +
                        prevTimeLeft.minutes * 60 +
                        prevTimeLeft.seconds -
                        1;
                    return {
                        hours: Math.floor(totalSeconds / 3600),
                        minutes: Math.floor((totalSeconds % 3600) / 60),
                        seconds: totalSeconds % 60,
                    };
                } else {
                    setIsCelebration(true);
                    return prevTimeLeft;
                }
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const handleCustomTimeChange = () => {
        setTimeLeft({
            hours: parseInt(customHours, 10) || 0,
            minutes: parseInt(customMinutes, 10) || 0,
            seconds: parseInt(customSeconds, 10) || 0,
        });
        setIsCelebration(false);
    };

    const resetToLiveCountdown = () => {
        setTimeLeft(calculateTimeLeft(newYearDate));
        setIsCelebration(false);
    };

    const renderCountdown = () => {
        if (isCelebration) {
            return (
                <div
                    className={clsx(
                        "animate-bounce text-3xl text-green-400 sm:text-5xl md:text-6xl lg:text-7xl",
                        roboto.className
                    )}
                >
                    Happy New Year!!! 🎉🎊
                </div>
            );
        }

        let styleClass = "text-xl sm:text-3xl md:text-5xl text-gray-50";
        if (timeLeft.hours === 0 && timeLeft.minutes > 0) {
            styleClass = "text-3xl sm:text-5xl md:text-6xl text-gray-50";
        } else if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds > 0) {
            styleClass = "text-[12rem] sm:text-[14rem] md:text-[17rem] text-gray-50";
        }

        const pluralize = (count, singular) => (count === 1 ? singular : `${singular}s`);

        return (
            <div className={`countdown ${styleClass} ${gothic.className}`}>
                {timeLeft.hours > 0 && (
                    <span>
                        {timeLeft.hours} {pluralize(timeLeft.hours, "hour")}{" "}
                    </span>
                )}
                {timeLeft.minutes > 0 && (
                    <span>
                        {timeLeft.minutes} {pluralize(timeLeft.minutes, "minute")}{" "}
                    </span>
                )}
                {timeLeft.seconds > 0 && (
                    <span>
                        {timeLeft.hours === 0 && timeLeft.minutes === 0 ? (
                            <>{timeLeft.seconds}</>
                        ) : (
                            <>
                                {timeLeft.seconds} {pluralize(timeLeft.seconds, "second")}
                            </>
                        )}
                    </span>
                )}
            </div>
        );
    };

    return (
        <NoNavbarLayout title="NYE Countdown!">
            {isCelebration && <Fireworks options={fireworksOptions} style={fireworksStyles} />}
            <div className="absolute z-[50] flex h-full w-full flex-col items-center justify-center">
                {renderCountdown()}
                {/* <div>
                    <input
                        type="number"
                        className="mr-2 mt-4 w-20 rounded border border-gray-600 bg-gray-700 p-2 text-white"
                        placeholder="Hours"
                        value={customHours}
                        onChange={(e) => setCustomHours(e.target.value)}
                    />
                    <input
                        type="number"
                        className="mt-4 w-20 rounded border border-gray-600 bg-gray-700 p-2 text-white"
                        placeholder="Minutes"
                        value={customMinutes}
                        onChange={(e) => setCustomMinutes(e.target.value)}
                    />
                    <input
                        type="number"
                        className="ml-2 mt-4 w-20 rounded border border-gray-600 bg-gray-700 p-2 text-white"
                        placeholder="Seconds"
                        value={customSeconds}
                        onChange={(e) => setCustomSeconds(e.target.value)}
                    />
                    <button
                        className="ml-4 mt-4 rounded bg-blue-500 px-4 py-2 text-xl text-white"
                        onClick={handleCustomTimeChange}
                    >
                        Start Custom Countdown
                    </button>
                </div>
                <button
                    className="mt-4 rounded bg-green-500 px-4 py-2 text-xl text-white"
                    onClick={resetToLiveCountdown}
                >
                    Reset to Live Countdown
                </button>
                <button
                    className="mt-4 rounded bg-green-500 px-4 py-2 text-xl text-white"
                    onClick={() => setIsCelebration(true)}
                >
                    Start Fireworks
                </button>
                <button
                    className="mt-4 rounded bg-red-500 px-4 py-2 text-xl text-white"
                    onClick={() => setIsCelebration(false)}
                >
                    Stop Fireworks
                </button> */}
            </div>
        </NoNavbarLayout>
    );
};

export default Countdown;