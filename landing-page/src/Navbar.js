import React from "react";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { IconName } from "react-icons/fa";
import { FaFacebook, FaHeart } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LNavbar() {
  return (
    <>
      <Navbar data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Lien Tran</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#About me">About me</Nav.Link>
            <Nav.Link href="https://lientran1990.github.io/resumes/">
              Resume
            </Nav.Link>
            <Nav.Link href="https://lientran1990.github.io/book-store/">
              Book Store
            </Nav.Link>
          </Nav>
          <FaFacebook
            style={{ marginRight: "10px" }}
            href="https://www.facebook.com/lien.tranthi.3"
            target="blank"
          />

          <FontAwesomeIcon icon="fa-brands fa-facebook" />
          <FaLinkedin />
        </Container>
      </Navbar>
    </>
  );
}

export default LNavbar;
