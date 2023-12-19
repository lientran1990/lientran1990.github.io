import "./App.css";
import React, { useEffect } from "react";
import LNavbar from "./Navbar";
import FluidExample from "./Image";
import ButtonComponent from "./Button";
import Button from "react-bootstrap/esm/Button";

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
      <div className="text-on-image">
        <header>
          Hello,
          <br />
          <strong>
            {" "}
            I'm <span>Lien Tran.</span>{" "}
          </strong>
        </header>
        <p>Fresher Front-end Developer</p>
      </div>
      <div className="btn-container">
        <ButtonComponent children={"Hire me"} />
        &nbsp;&nbsp;&nbsp;
        <ButtonComponent children={"See my work"} />
      </div>
    </div>
  );
}

export default App;
