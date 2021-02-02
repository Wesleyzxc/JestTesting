import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";
import { useData } from "./helperFunction";

function App() {
  const { name, num } = useData();
  return (
    <div className="App">
      <Hello name={name} />
    </div>
  );
}

export default App;
