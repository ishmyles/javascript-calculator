import "../assets/styles/Button.css";

function Button(props) {
  const { id, key, type } = props.button;
  return (
    <div id={id} className="btn">
      {key}
    </div>
  );
}

export default Button;
