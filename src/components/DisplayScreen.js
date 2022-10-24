import "../assets/styles/DisplayScreen.css";

function DisplayScreen({ currentValue, equation }) {
  return (
    <div id="display-screen">
      <p id="display" className="text-right">
        {currentValue}
      </p>
      <p id="equation" className="text-right">
        {equation}
      </p>
    </div>
  );
}

export default DisplayScreen;
