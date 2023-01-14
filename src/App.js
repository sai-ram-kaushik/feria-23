import React from "react";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Events />
    </div>
  );
}

export default App;
