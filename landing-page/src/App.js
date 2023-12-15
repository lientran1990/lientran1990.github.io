import "./App.css";
import React, { useEffect } from "react";
import LNavbar from "./Navbar";
import FluidExample from "./Image";

function Title() {
  useEffect(() => {
    document.title = "My Landing Page Title";
  }, []);
}

function App() {
  return (
    <div className="App">
      <FluidExample />
      <LNavbar />
    </div>
  );
}

export default App;
