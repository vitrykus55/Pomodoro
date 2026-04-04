import {useToggle} from "../../hook/useToggle.ts";

function ModeSwitcher() {
    const btn =
        "relative px-5 py-2.5 text-sm border-2 border-black transition-all duration-400";

    const active =
        "bg-black text-white font-bold z-10";

    const inactive =
        "bg-white text-black font-medium hover:bg-neutral-300";

    const { toggle, setPomodoro, setShortBreak } = useToggle();

    return (
        <div className="inline-flex rounded-xl overflow-hidden border-2 border-black bg-white">
            <button
                onClick={setPomodoro}
                className={`${btn} ${!toggle ? active : inactive}`}
            >
                {!toggle && <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-white" />}
                Pomodoro
            </button>

            <button
                onClick={setShortBreak}
                className={`${btn} border-l-2 border-l-black ${toggle ? active : inactive}`}
            >
                {toggle && <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-white" />}
                Short break
            </button>
        </div>
    );
}

export default ModeSwitcher;