import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Creations from "./components/Creations";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Creations />
      <Footer />
    </div>
  );
}

export default App;
