import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../Images/Logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";

export function NavBar() {
  return (
    <Navbar id="navbar" className="sticky-top">
      <Container className="hstack gap-3">
        <Navbar.Brand href="/">
          <img alt="" src={Logo} id="logo"></img>
        </Navbar.Brand>
        <Nav className="ms-auto fs-5">
          <Nav.Link href="/" id="link">
            HOME
          </Nav.Link>
        </Nav>
        <div className="vr" style={{ color: "#BD3430", width: ".15rem" }}></div>
        <Nav className="fs-5">
          <Nav.Link href="/events" id="link">
            EVENTS
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
