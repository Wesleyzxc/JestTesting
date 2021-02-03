import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";
import { useData } from "./helperFunction";
import Slider from "./components/slider/Slider";
function App() {
  const { name, num } = useData();
  return (
    <div className="App">
      <Hello name={name} />
      <Slider />
    </div>
  );
}

export default App;
