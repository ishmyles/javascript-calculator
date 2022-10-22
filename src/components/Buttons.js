import Button from "./Button";
import "../assets/styles/Buttons.css";

function Buttons({ calcBtns }) {
  return (
    <div id="buttons">
      {calcBtns.map((button) => (
        <Button button={button} key={button.id} />
      ))}
    </div>
  );
}

export default Buttons;
