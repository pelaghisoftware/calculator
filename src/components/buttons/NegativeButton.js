import React, {useContext} from 'react';
import {CalcContext} from "../../context/CalcContext";

const NegativeButton = ({ value }) => {
    const { calc, setCalc } = useContext(CalcContext)

    const modifyNegPosString = (val) => {
        let result = ""
        if(val.startsWith("-")) {
            result = val.slice(1);
        } else {
            result = "-" + val
        }

        return result;
    }

    const handleBtnClick = () => {
        if(calc.operation) {
            let result = modifyNegPosString(calc.last)

            setCalc({
                ...calc,
                last: result,
                current: result
            });
            return;
        }

        let result = modifyNegPosString(calc.first)

        setCalc({
            ...calc,
            first: result,
            current: result
        });
    }

    return (
        <button onClick={handleBtnClick} className="button">{value}</button>
    );
};

export default NegativeButton;