import "./App.css";
import { Route, Routes } from "react-router-dom";
import Instrument from "./components/Instrument";
import Quote from "./components/Quote";

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<Instrument />} />
      <Route path="quotes/:symbol" element={<Quote />} />
    </Routes>
  );
}

export default App;
