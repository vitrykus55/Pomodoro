
type TimerDisplayProps = {
    duration: number
};

export  default function TimerDisplay({duration}: TimerDisplayProps) {

    const getFormatedTime = (duration:number): string => {
        let total_seconds = parseInt(String(Math.floor(duration / 1000)))
        let total_minute = parseInt(String(Math.floor(total_seconds / 60)))
        let seconds:number = total_seconds % 60
        let minute:number = total_minute % 60
        return `${minute}:${seconds.toString().padStart(2, "0")}`
    }


    return (
        <>
            <div
                className={'w-full flex items-center justify-center p-10 bg-white m-10 rounded-full border-[2px] border-black'}>
                <div className={'flex items-center justify-center w-[100px]'}>{getFormatedTime(duration)}</div>
            </div>
        </>
    )
}

