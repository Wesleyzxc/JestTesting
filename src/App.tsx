import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";
import { useData } from "./helperFunction";
import ButtonDropdown from "./components/buttondropdown/ButtonDropdown";
import { useRef, useState } from "react";
import LongList from "./components/LongList";
// import Slider from "./components/slider/Slider";
function App() {
  const { name, num } = useData();
  const [selected, setSelected] = useState("1");
  const [showOGList, setShowOGList] = useState(true);
  const [randomList, setRandomList] = useState(["top1", "top2", "top3", "top4", "top5", "top6", "top7"]);

  const listRef = useRef(null);

  const handleRandomList = () => {
    setShowOGList(!showOGList);
    if (showOGList) setRandomList(["top1", "top2", "top3", "top4", "top5", "top6", "top7"]);
    else setRandomList(["bottom1", "bottom2", "bottom3", "bottom4", "bottom5", "bottom6", "bottom7"]);
  };
  return (
    <div className="App">
      <Hello name={name} />
      <div style={{ display: "flex" }}>
        <ButtonDropdown selected={selected} setSelected={setSelected} />
      </div>
      <button onClick={handleRandomList}>change list to render</button>
      <LongList ref={listRef} list={randomList} />
    </div>
  );
}

export default App;
