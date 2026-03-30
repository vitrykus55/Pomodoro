import pauseBtn from '../../assets/images/pause_btn.svg';
import playBtn from '../../assets/images/play_btn.svg';

type AdjustButtonProps = {
    addTime: (ms: number) => void;
    isRunning: boolean;
    toggleRunning: () => void;
}


export default function AdjustButton({addTime, isRunning, toggleRunning}: AdjustButtonProps) {
    const btn = "font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono size-[40px] border-2 border-black cursor-pointer transition-transform active:scale-90 select-none"

    return (
        <div className={'flex w-full justify-around items-center'}>
            <button
                type="button"
                className={btn}
                onClick={() => addTime(5000)}
            >
                +
            </button>
            <button
                type="button"
                className={`${btn} size-[60px]`}
                onClick={toggleRunning}
                aria-label= {isRunning ? "Pause timer" : "Start timer"}
            >
                <img
                    src={isRunning ? pauseBtn: playBtn}
                    className='size-[25px]'
                    alt=""
                />
            </button>
            <button
                type="button"
                className={btn}
                onClick={() => addTime(-5000)}
            >
                -
            </button>
        </div>
    )
}

