import "./App.css";
import { useState } from "react";
import { ListComponent } from "./components/ListComponent";

export default function App() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {isShown && <ListComponent />}
    </div>
  );
}
