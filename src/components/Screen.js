import {useContext} from "react";
import {CalcContext} from "../context/CalcContext";
import Textfit from '@namhong2001/react-textfit';

const Screen = () => {
    const { calc } = useContext(CalcContext);

    return (
        <Textfit className="screen" max={70} mode="single">{calc.current ? calc.current : calc.res}</Textfit>
    )
}

export default Screen