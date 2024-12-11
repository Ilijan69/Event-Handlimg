import { ChangeEvent } from "react";
import "./App.css";

const App = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log("Въведена стойност:", e.target.value);
  };

  const handleClick = () => {
    console.log("Бутонът е натиснат!");
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Въведете текст тук..."
        onChange={handleChange}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleClick}>Натисни ме</button>
    </div>
  );
};

export default App;
