import ModeSwitcher from "../ModeSwitcher";
import Controls from "../Controls";
import TimerDisplay from "../TimerDisplay";

function PomodoroTimerPage() {
    return (
        <>
            <div className={'flex items-center justify-center bg-black h-screen'}>
                <div className={'flex w-100 p-5 justify-center bg-[#F72798] flex-wrap rounded-xl'}>
                    <ModeSwitcher/>
                    <TimerDisplay/>
                    <Controls/>
                </div>
            </div>
        </>
    )
}
export default PomodoroTimerPage;