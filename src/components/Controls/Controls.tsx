import AdjustButton from "../AdjustButton";

type ControlsProps = {
  addTime: (ms: number) => void;
};

function  Controls ({addTime}: ControlsProps) {

    return (
        <>
            <AdjustButton addTime={addTime}/>
        </>
    )
}
export default Controls;