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

function Calculator() {
  return (
    <div id="calculator">
      <DisplayScreen />
      <Buttons calcBtns={calcBtns} />
    </div>
  );
}

export default Calculator;
