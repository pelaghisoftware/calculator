import React, {useContext} from 'react';
import {CalcContext} from "../../context/CalcContext";

const PercentageButton = ({ value }) => {
    const { calc, setCalc } = useContext(CalcContext)

    const handleBtnClick = () => {
        if(calc.first && calc.operation && calc.last) {
            let result = 0;

            const first = parseFloat(calc.first)
            const last = parseFloat(calc.last)

            switch (calc.operation) {
                case "x":
                    result = first * (last / 100);
                    break;
                case "-":
                    result = first - ((first * last) / 100);
                    break;
                case "+":
                    result = first + ((first * last) / 100);
                    break;
                default:
                    result = "ERR";
                    break;
            }

            setCalc({
                operation: "",
                current: result.toString(),
                first: result.toString(),
                last: "",
                res: result.toString()
            });
        }
    }

    return (
        <button onClick={handleBtnClick} className="button">{value}</button>
    );
};

export default PercentageButton;