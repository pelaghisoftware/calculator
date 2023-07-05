import React, {useContext} from 'react';
import {CalcContext} from "../../context/CalcContext";

const OperationButton = ({ value }) => {
    const { calc, setCalc } = useContext(CalcContext)

    const handleBtnClick = () => {
        if(!calc.last) {
            setCalc({
                ...calc,
                operation: value
            });
        }
    }

    return (
        <button onClick={handleBtnClick} className="button operation">{value}</button>
    );
};

export default OperationButton;