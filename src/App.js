import "./App.css";
import { Route, Routes } from "react-router-dom";
import Instruments from "./components/Instruments";
import Quote from "./components/Quote";

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<Instruments />} />
      <Route path="quotes/:symbol" element={<Quote />} />
    </Routes>
  );
}

export default App;
