import React, { useState, useEffect } from "react";
import { NoNavbarLayout, PageTitle } from "@/components/list";
import "@/styles/Countdown.module.css";

const Countdown = () => {
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

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft("2024-01-01T00:00:00"));
    const [isCelebration, setIsCelebration] = useState(false);
    const [customDate, setCustomDate] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            const newTimeLeft = calculateTimeLeft(customDate || "2024-01-01T00:00:00");
            setTimeLeft(newTimeLeft);
            setIsCelebration(!newTimeLeft.hours && !newTimeLeft.minutes && !newTimeLeft.seconds);
        }, 1000);

        return () => clearTimeout(timer);
    });

    const handleDateChange = (e) => {
        setCustomDate(e.target.value);
    };

    const renderCountdown = () => {
        if (isCelebration) {
            return <div className="text-3xl text-green-400">Happy New Year! 🎉🎊</div>;
        }

        let styleClass = "text-2xl";
        if (timeLeft.hours === 0 && timeLeft.minutes < 1) {
            styleClass = "text-3xl";
        } else if (timeLeft.minutes === 0 && timeLeft.seconds <= 59) {
            styleClass = "text-4xl animate-pulse";
        }

        return (
            <div className={`countdown ${styleClass}`}>
                {Object.keys(timeLeft).map((interval) => (
                    <span key={interval}>
                        {timeLeft[interval]} {interval}{" "}
                    </span>
                ))}
            </div>
        );
    };

    return (
        <NoNavbarLayout title="NYE Countdown!">
            <PageTitle title="NYE Countdown!" />
            <div className="flex h-full flex-col items-center justify-center border border-red-500">
                <header className="text-xl">
                    {renderCountdown()}
                    <input
                        type="datetime-local"
                        className="mt-4 rounded border border-gray-600 bg-gray-700 p-2 text-white"
                        value={customDate}
                        onChange={handleDateChange}
                    />
                </header>
            </div>
        </NoNavbarLayout>
    );
};

export default Countdown;
