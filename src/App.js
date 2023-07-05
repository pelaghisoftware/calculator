import './App.css';
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import CalcProvider from "./context/CalcContext";
import NumberButton from "./components/buttons/NumberButton";
import OperationButton from "./components/buttons/OperationButton";
import EqualsButton from "./components/buttons/EqualsButton";
import ClearButton from "./components/buttons/ClearButton";
import NegativeButton from "./components/buttons/NegativeButton";
import DecimalButton from "./components/buttons/DecimalButton";
import PercentageButton from "./components/buttons/PercentageButton";

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
          <div className="buttonBox">
              <ClearButton value="C"/>
              <NegativeButton value="+-"/>
              <PercentageButton value="%"/>
              <OperationButton value="/"/>
              <NumberButton value="7"/>
              <NumberButton value="8"/>
              <NumberButton value="9"/>
              <OperationButton value="x"/>
              <NumberButton value="4"/>
              <NumberButton value="5"/>
              <NumberButton value="6"/>
              <OperationButton value="-"/>
              <NumberButton value="1"/>
              <NumberButton value="2"/>
              <NumberButton value="3"/>
              <OperationButton value="+"/>
              <NumberButton value="0"/>
              <DecimalButton value="."/>
              <EqualsButton value="="/>
          </div>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
