import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { info } from "./AboutData";
import BUAIL from "../Images/BUAIL.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "../Styles/Styles.css";
import { Container, Card } from "react-bootstrap";

export function About() {
  return (
    <>
      {/* <MetaTags>
        <title>Home</title>
        <meta
          name="Home"
          content="This Website is designed to show Dan Minahan's Resume and Portfolio. Enjoy!"
        />
        <meta property="og:title" content="Home" />
        <meta property="og:image" content="../Images/Headshot.png" />
      </MetaTags> */}

      <NavBar />
      <div id="container">
        <Container className="d-flex align-items-center flex-column">
          <h1 className="mt-3 mb-3 fw-bold">About</h1>
          <img alt="Word Cloud" src={BUAIL}></img>
          <p className="w-75 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Container>
        <Container className="d-flex row w-75 m-auto mt-3">
          {info.map((item) => (
            <Card
              className="col-1 m-2"
              style={{ width: "18rem", border: "0", background: "none" }}
            >
              <Card.Img variant="top" src={item.Pic} />
              <Card.Body>
                <Card.Title className="fw-bold">{item.Name}</Card.Title>
                <Card.Text>{item.Bio}</Card.Text>
                <a href={item.LinkedInLink} id="icon-link" title="LinkedIn">
                  <FontAwesomeIcon size="2x" icon={faLinkedin} />
                </a>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </div>

      <Footer />
    </>
  );
}
