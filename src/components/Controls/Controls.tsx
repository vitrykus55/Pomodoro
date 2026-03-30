import AdjustButton from "../AdjustButton";

type ControlsProps = {
  addTime: (ms: number) => void;
  isRunning: boolean;
  toggleRunning: () => void;
};

function  Controls ({addTime, isRunning, toggleRunning}: ControlsProps) {

    return (
        <>
            <AdjustButton
                addTime={addTime}
                isRunning={isRunning}
                toggleRunning={toggleRunning}
            />
        </>
    )
}
export default Controls;