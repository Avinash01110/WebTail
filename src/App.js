import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Table from "./components/Table";
import Linechart from "./components/Linechart";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/table" element={<Table/>} />
        <Route path="/linechart" element={<Linechart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;