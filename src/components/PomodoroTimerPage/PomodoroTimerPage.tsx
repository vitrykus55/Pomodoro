import ModeSwitcher from "../ModeSwitcher";
import Controls from "../Controls";
import TimerDisplay from "../TimerDisplay";
import {useEffect, useState} from "react";


export default function PomodoroTimerPage() {

    const [duration, setDuration] = useState<number>(100000);


    const addTime = (ms:number): void => {
        setDuration((prevDuration) => Math.max(0, prevDuration + ms));
    }

    useEffect(() => {
        const interval = setInterval(()=>{
            setDuration((prevDuration)=>{
                if(prevDuration <= 0) return 0;
                return prevDuration - 1000;
            });
        }, 1000)
        return () => clearInterval(interval);
    }, [])


    return (
        <>
            <div className={'flex items-center justify-center bg-black h-screen'}>
                <div className={'flex p-5 justify-center bg-[#F72798] flex-wrap rounded-xl'}>
                    <ModeSwitcher />
                    <TimerDisplay duration={duration}/>
                    <Controls addTime={addTime}/>
                </div>
            </div>
        </>
    )
}