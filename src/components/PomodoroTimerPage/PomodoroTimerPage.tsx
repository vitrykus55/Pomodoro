import ModeSwitcher from "../ModeSwitcher";
import Controls from "../Controls";
import TimerDisplay from "../TimerDisplay";
import {useEffect, useState} from "react";

const INITIAL_DURATION_MS = 25 * 60 * 1000;

export default function PomodoroTimerPage() {

    const [duration, setDuration] = useState<number>(INITIAL_DURATION_MS);

    const [isRunning, setIsRunning] = useState<boolean>(false);

    const toggleRunning = () => {
        setIsRunning(!isRunning);
    }

    const addTime = (ms: number): void => {
        setDuration((prevDuration) => Math.max(0, prevDuration + ms));
    }

    useEffect(() => {
        if(!isRunning) return;
        const interval = setInterval(() => {
            setDuration((prevDuration) => {
                if (prevDuration <= 0) return 0;
                return prevDuration - 1000;
            });
        }, 1000)
        return () => clearInterval(interval);
    }, [isRunning])

    useEffect(() => {
        if(INITIAL_DURATION_MS == 0) {
            setIsRunning(false);
        }
    }, [duration, isRunning]);


    return (
        <div className='flex items-center justify-center bg-black min-h-screen'>
            <div className='flex p-5 justify-center bg-[#F72798] flex-wrap rounded-xl'>
                <ModeSwitcher/>
                <TimerDisplay duration={duration}/>
                <Controls addTime={addTime} isRunning={isRunning} toggleRunning={toggleRunning}/>
            </div>
        </div>
    )
}