import { Fragment } from "react";
import "../assets/styles/Calculator.css";
import DisplayScreen from "./DisplayScreen";
import Buttons from "./Buttons";

function Calculator() {
  return (
    <Fragment>
      <h2>Calculator Component</h2>
      <DisplayScreen />
      <Buttons />
    </Fragment>
  );
}

export default Calculator;
