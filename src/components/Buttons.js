import Button from "./Button";
import "../assets/styles/Buttons.css";

function Buttons({ calcBtns, calcOperations, currentValue }) {
  return (
    <div id="buttons">
      {calcBtns.map((button) => (
        <Button
          button={button}
          calcOperations={calcOperations}
          currentValue={currentValue}
          key={button.id}
        />
      ))}
    </div>
  );
}

export default Buttons;
