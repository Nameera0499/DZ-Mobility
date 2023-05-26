import background from "./bgImage.jpg";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        height: "650px",
        width: "100%",
        position: "absolute",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1> Launching Soon... </h1>
      <h3> Contact us </h3>
      <span> Zayyan Shaikh: 9082786981</span>
    </div>
  );
}

export default App;
