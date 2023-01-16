import React from "react";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tickets from "./components/Tickets";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Events />
      <Tickets />
      <Footer />
    </div>
  );
}

export default App;
