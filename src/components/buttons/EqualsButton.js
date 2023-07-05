import React, {useContext} from 'react';
import {CalcContext} from "../../context/CalcContext";

const EqualsButton = ({ value }) => {
    const { calc, setCalc } = useContext(CalcContext)

    const handleBtnClick = () => {
        if(calc.first && calc.operation && calc.last) {
            let result = 0;

            switch (calc.operation) {
                case "/":
                    result = parseFloat(calc.first) / parseFloat(calc.last);
                    break;
                case "x":
                    result = parseFloat(calc.first) * parseFloat(calc.last);
                    break;
                case "-":
                    result = parseFloat(calc.first) - parseFloat(calc.last);
                    break;
                case "+":
                    result = parseFloat(calc.first) + parseFloat(calc.last);
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
        <button onClick={handleBtnClick} className="button equals">{value}</button>
    );
};

export default EqualsButton;