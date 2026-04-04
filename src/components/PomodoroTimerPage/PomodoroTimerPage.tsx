import ModeSwitcher from "../ModeSwitcher";
import Controls from "../Controls";
import TimerDisplay from "../TimerDisplay";
import useTimer from "../../hook/useTimer.ts";


export default function PomodoroTimerPage() {

    const timer = useTimer();

    return (
        <div className='flex items-center justify-center bg-black min-h-screen'>
            <div className='flex p-5 justify-center bg-[#F72798] flex-wrap rounded-xl'>
                <ModeSwitcher/>
                <TimerDisplay duration={timer.duration}/>
                <Controls addTime={timer.addTime} isRunning={timer.isRunning} toggleRunning={timer.toggleRunning}/>
            </div>
        </div>
    )
}