import React, {useContext} from 'react';
import {CalcContext} from "../../context/CalcContext";

const ClearButton = ({ value }) => {
    const { setCalc } = useContext(CalcContext)

    const handleBtnClick = () => {
        setCalc({
            operation: "",
            current: "",
            first: "",
            last: "",
            res: 0
        });
    }

    return (
        <button onClick={handleBtnClick} className="button">{value}</button>
    );
};

export default ClearButton;