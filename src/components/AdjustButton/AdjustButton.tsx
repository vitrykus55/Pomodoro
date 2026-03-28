
type AdjustButtonProps = {
    addTime: (ms: number) => void;
}

export default function AdjustButton({addTime}: AdjustButtonProps) {
    const btn:string = "font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono size-[40px] border-[2px] border-black cursor-pointer transition-transform active:scale-90 select-none"

    return (
        <>
            <div className={'flex w-full place-content-around'}>
                <div className={btn} onClick={():void=>addTime(5000)}>+</div>
                <div className={btn} onClick={():void=>addTime(-5000)}>-</div>
            </div>

        </>
    )
}

