import {useEffect, useState} from "react";

const INITIAL_DURATION_MS = 25 * 60 * 1000;

export default function useTimer() {
    const [duration, setDuration] = useState<number>(INITIAL_DURATION_MS);

    const [isRunning, setIsRunning] = useState<boolean>(false);

    const toggleRunning = () => {
        setIsRunning(!isRunning);
    }

    const addTime = (ms: number): void => {
        setDuration((prevDuration) => Math.max(0, prevDuration + ms));
    }

    useEffect(() => {
        if (!isRunning) return;
        const interval = setInterval(() => {
            setDuration((prevDuration) => {
                if (prevDuration <= 0) return 0;
                return prevDuration - 1000;
            });
        }, 1000)
        return () => clearInterval(interval);
    }, [isRunning])

    useEffect(() => {
        if (duration == 0) {
            setIsRunning(false);
        }
    }, [duration, isRunning]);

    return ({
        toggleRunning,
        addTime,
        isRunning,
        duration,
    });
}