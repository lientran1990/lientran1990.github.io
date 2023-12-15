import React from "react";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function LNavbar() {
  return (
    <Nav
      className="Nav"
      activeKey="/home"
      //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="https://lientran1990.github.io/resumes" target="blank">
          Resumes
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="https://lientran1990.github.io/net-gross-calculation">
          Salary Calculator
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="https://lientran1990.github.io/book-store/">
          Book store
        </Nav.Link>
      </Nav.Item>
      <Button variant="info">Contact me</Button>{" "}
    </Nav>
  );
}

export default LNavbar;
