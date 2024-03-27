"use client";

import React from "react";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ButtonComponent from "./Button";

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/" className="nav-brand" style={{ color: "#44CCE1", fontSize: "32px" }}>
            Lien Tran
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navBarLink" href="#About me">
                About me
              </Nav.Link>
              <Nav.Link className="navBarLink" href="https://lientran1990.github.io/resumes/" target="blank">
                Resume
              </Nav.Link>
              <Nav.Link className="navBarLink" href="/portfolio">
                Portfolio
              </Nav.Link>
              <a href="/CV.pdf" download="LienTran-CV" target="_blank">
                <ButtonComponent className="btn-nav" children={"Download CV"} />
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
