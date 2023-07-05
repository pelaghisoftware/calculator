import React, {useContext} from 'react';
import {CalcContext} from "../../context/CalcContext";


const DecimalButton = ({ value }) => {
    const { calc, setCalc } = useContext(CalcContext)

    const handleBtnClick = () => {
        if(!calc.current.includes(".")) {
            if(calc.operation) {
                setCalc({
                    ...calc,
                    last: calc.last + ".",
                    current: calc.last + "."
                });
                return;
            }

            setCalc({
                ...calc,
                first: calc.first + ".",
                current: calc.first + "."
            });
        }
    }

    return (
        <button onClick={handleBtnClick} className="button">{value}</button>
    );
};

export default DecimalButton;