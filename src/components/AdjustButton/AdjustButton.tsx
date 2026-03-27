function AdjustButton(){
    return (
        <>
            <div className={'flex w-full place-content-around'}>
                <div className="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono size-[40px] border-[2px] border-black">+</div>
                <div className="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono size-[40px] border-[2px] border-black">-</div>
            </div>

        </>
    )
}
export default AdjustButton;