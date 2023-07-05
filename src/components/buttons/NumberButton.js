import React, {useContext} from 'react';
import {CalcContext} from "../../context/CalcContext";

const NumberButton = ({ value }) => {
    const { calc, setCalc } = useContext(CalcContext)

    const handleBtnClick = () => {
        if(calc.operation) {
            setCalc({
                ...calc,
                last: calc.last + value,
                current: calc.last + value
            });
            return;
        }

        setCalc({
            ...calc,
            first: calc.first + value,
            current: calc.first + value
        });
    }

    return (
        <button onClick={handleBtnClick} className="button">{value}</button>
    );
};

export default NumberButton;