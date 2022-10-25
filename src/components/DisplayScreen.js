import "../assets/styles/DisplayScreen.css";

function DisplayScreen({ currentValue, equation }) {
  return (
    <div id="display-screen">
      <div id="top-display">
        <p id="display" className="text-right text-digital text-blue">
          {currentValue}
        </p>
      </div>
      <div id="bottom-display">
        <p id="equation" className="text-right text-digital text-white">
          {equation}
        </p>
      </div>
    </div>
  );
}

export default DisplayScreen;
