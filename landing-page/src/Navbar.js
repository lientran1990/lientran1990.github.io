import React from "react";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaFacebook, FaHeart } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonComponent from "./Button";

function LNavbar() {
  return (
    <>
      <Navbar data-bs-theme="light">
        <Container style={{ fontSize: 20 }}>
          <Navbar.Brand href="#home">Lien Tran</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#About me">About me</Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link
              href="https://lientran1990.github.io/resumes/"
              target="blank"
            >
              Resume
            </Nav.Link>
            &nbsp;&nbsp;&nbsp;
            <Nav.Link href="https://lientran1990.github.io/book-store/">
              Portfolio
            </Nav.Link>
            &nbsp;&nbsp;&nbsp;
            <ButtonComponent children={"Download CV"} />
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
            <div className="social-link">
              <a
                href="https://www.facebook.com/lien.tranthi.3"
                className="facebook"
              >
                <i class="bi bi-facebook"></i>
              </a>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default LNavbar;
