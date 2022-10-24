import "../assets/styles/Button.css";

function Button(props) {
  const { id, key, type } = props.button;
  const { updateValue, handleCalc, clear, undo } = props.calcOperations;

  const operationCheck = () => {
    if (type === "numeric") updateValue(key);
    if (type === "operator") handleCalc(id);
    if (type === "reset") clear();
    if (type === "undo") undo();
  };

  return (
    <button id={id} className="btn" onClick={() => operationCheck()}>
      {key}
    </button>
  );
}

export default Button;
