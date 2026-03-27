function ModeSwitcher(){
    return(
        <>

            <div className="inline-flex rounded-base shadow-xs -space-x-px">
                <a href="#" aria-current="page"
                   className="bg-white rounded-s-lg text-body bg-neutral-primary-soft border-[2px] border-black border-default  hover:text-heading font-medium leading-5 rounded-s-base text-sm px-3 py-2 ">
                    Pomodoro
                </a>
                <a href="#"
                   className="bg-white rounded-r-lg text-body bg-neutral-primary-soft border-[2px] border-black border-default  hover:text-heading font-medium leading-5 text-sm px-3 py-2">
                    Short break
                </a>
            </div>
        </>
    )
}

export default ModeSwitcher;