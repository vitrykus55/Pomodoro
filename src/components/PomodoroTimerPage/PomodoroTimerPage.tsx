import ModeSwitcher from "../ModeSwitcher";
import Controls from "../Controls";
import TimerDisplay from "../TimerDisplay";
import useTimer from "../../hook/useTimer.ts";


export default function PomodoroTimerPage() {

    const timer = useTimer();

    return (
        <div className='flex items-center justify-center bg-black min-h-screen'>
                <div
                    className='flex flex-wrap justify-center gap-10
                   w-[1200px] min-h-[620px] p-10
                   rounded-[36px]
                   bg-[#F72798]
                   border-[3px] border-[#4F4F4F]
                   shadow-[12px_12px_0_#E8E1CC]'
                >
                    <ModeSwitcher/>
                    <TimerDisplay duration={timer.duration}/>
                    <Controls addTime={timer.addTime} isRunning={timer.isRunning} toggleRunning={timer.toggleRunning}/>
                </div>
            </div>
            )
            }