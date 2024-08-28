import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const handleClick = async () => {
    try {
      const fileUrl = value;
      const file = fileUrl.split("/").pop();
      console.log(file);

      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", `${file}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setValue("");
    } catch (error) {
      alert("Error downloading file");
    }
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn" onClick={handleClick}>
        Download
      </button>
    </div>
  );
}

export default App;
