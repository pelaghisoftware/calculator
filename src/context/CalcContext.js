import React, {createContext, useState} from 'react';

export const CalcContext = createContext()
const CalcProvider = ({ children }) => {
    const [calc, setCalc] = useState({
        operation: "",
        current: "",
        first: "",
        last: "",
        res: 0
    });

    const providerValue = {
        calc, setCalc
    }

    return (
        <div>

            <CalcContext.Provider value={providerValue}>
                {children}
            </CalcContext.Provider>
        </div>
    );
};

export default CalcProvider;