import "../assets/styles/Button.css";

function Button(props) {
  const { id, key, type } = props.button;
  const { updateValue, handleCalc, clear, undo } = props.calcOperations;

  const getColorBtn = () => {
    let btnClass = "btn ";
    btnClass +=
      id === "equals"
        ? "btn-equals"
        : type === "numeric"
        ? "btn-numerical"
        : type === "operator"
        ? "btn-operator"
        : "btn-delete";
    return btnClass;
  };

  const operationCheck = () => {
    if (type === "numeric") updateValue(key);
    if (type === "operator") handleCalc(id);
    if (type === "reset") clear();
    if (type === "undo") undo();
  };

  return (
    <button id={id} className={getColorBtn()} onClick={() => operationCheck()}>
      {key}
    </button>
  );
}

export default Button;
