import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { TheContext } from "./context/context";
import Navbar from "./Navbar";
import CharCard from "./CharCard";


function App() {
  //const { state, dispatch } = useContext(TheContext);

  return (
    <>
    <Navbar />
    <div className="container-fluid p-5">
      <CharCard className="mt-12"></CharCard>
    </div>
    </>
  );
}

export default App;
