import { useState } from "react";
import "../assets/styles/Calculator.css";
import DisplayScreen from "./DisplayScreen";
import Buttons from "./Buttons";

const calcBtns = [
  {
    id: "clear",
    key: "CLEAR",
    type: "reset",
  },
  {
    id: "divide",
    key: "%",
    type: "operator",
  },
  {
    id: "multiply",
    key: "X",
    type: "operator",
  },
  {
    id: "seven",
    key: "7",
    type: "numeric",
  },
  {
    id: "eight",
    key: "8",
    type: "numeric",
  },
  {
    id: "nine",
    key: "9",
    type: "numeric",
  },
  {
    id: "subtract",
    key: "-",
    type: "operator",
  },
  {
    id: "four",
    key: "4",
    type: "numeric",
  },
  {
    id: "five",
    key: "5",
    type: "numeric",
  },
  {
    id: "six",
    key: "6",
    type: "numeric",
  },
  {
    id: "add",
    key: "+",
    type: "operator",
  },
  {
    id: "one",
    key: "1",
    type: "numeric",
  },
  {
    id: "two",
    key: "2",
    type: "numeric",
  },
  {
    id: "three",
    key: "3",
    type: "numeric",
  },
  {
    id: "equals",
    key: "=",
    type: "operator",
  },
  {
    id: "zero",
    key: "0",
    type: "numeric",
  },
  {
    id: "decimal",
    key: ".",
    type: "numeric",
  },
  {
    id: "delete",
    key: "DEL",
    type: "undo",
  },
];

const getOperator = {
  add: "+",
  subtract: "-",
  multiply: "x",
  divide: "%",
  equals: "=",
};

function Calculator() {
  let [result, setResult] = useState(0);
  let [equation, setEquation] = useState("");
  let [currentValue, setCurrentValue] = useState("");
  let [currentOperation, setCurrentOperation] = useState("");

  const operations = {
    add: () => {
      setResult((result += parseFloat(currentValue)));
      setCurrentValue("");
    },
    subtract: () => {
      setResult((result -= parseFloat(currentValue)));
      setCurrentValue("");
    },
    multiply: () => {
      setResult((result *= parseFloat(currentValue)));
      setCurrentValue("");
    },
    divide: () => {
      setResult((result /= parseFloat(currentValue)));
      setCurrentValue("");
    },
    equals: () => {
      setCurrentValue(result.toString());
      setResult(0);
      setCurrentOperation("");
    },
  };

  const calcOperations = {
    handleCalc: (operator) => {
      let operationSymbol = getOperator[operator];

      // Makes the current result from previous equation the first value in the new equation when you press an operator button AFTER "="
      if (!result && equation.includes("=")) {
        setResult(parseFloat(currentValue));
        setEquation(currentValue + operationSymbol);
        setCurrentOperation(operator);
        setCurrentValue("");
        return;
      }

      if (!currentOperation && currentValue) {
        // When the first value & operator for a new equation is entered,
        // it sets the currentValue to a result & appends the operator to the equation
        setResult(parseFloat(currentValue));
        setEquation((equation += operationSymbol));
        setCurrentOperation(operator);
        setCurrentValue("");
      } else if (operator === "subtract" && !currentValue) {
        // Makes the currentValue a negative integer if "-" is pressed when there is no currentValue
        setCurrentValue("-");
      } else if (currentOperation && operator !== "subtract" && !currentValue) {
        // Ensures that the currentOperation doesn't change when another operator button is pressed with no currentValue
        return;
      } else if (currentValue === "-" && operator !== "subtract") {
        // Removes the negative sign from the currentValue to make the integer input positive
        setCurrentValue("");
        setCurrentOperation(operator);
      } else {
        // Runs the relevant calculation when pressing one of the operator buttons
        operations[currentOperation]();
        setCurrentOperation(operator);
        setEquation((equation += operationSymbol));
        if (operator === "equals") operations[operator]();
      }
    },
    clear: () => {
      setResult(0);
      setEquation("");
      setCurrentValue("0");
      setCurrentOperation("");
    },
    undo: () => {
      setCurrentValue(currentValue.slice(0, currentValue.length - 1));
    },
    updateValue: (input) => {
      // Ensures two decimal points are not entered
      if (currentValue.includes(".") && input === ".") return;

      // Resets equation display to the first value entered in the equation
      if (equation.includes("=")) {
        setCurrentValue(input);
        setEquation(input);
        return;
      }

      currentValue === "0" && input !== 0
        ? setCurrentValue(input)
        : setCurrentValue((currentValue += input));

      setEquation((equation += input));
    },
  };

  return (
    <div id="calculator">
      <DisplayScreen currentValue={currentValue} equation={equation} />
      <Buttons
        calcBtns={calcBtns}
        calcOperations={calcOperations}
        currentValue={currentValue}
      />
    </div>
  );
}

export default Calculator;
