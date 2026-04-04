import {useState, useEffect} from "react";

export const useToggle = () => {
    const [toggle, setToggle] = useState(() => {
        const saved = localStorage.getItem("toggle");
        return saved === "true";
    });

    useEffect(() => {
        localStorage.setItem('toggle', String(toggle));
    }, [toggle]);

    const setPomodoro = () => setToggle(false);
    const setShortBreak = () => setToggle(true);

    return ({
        toggle,
        setPomodoro,
        setShortBreak,
    })
}

