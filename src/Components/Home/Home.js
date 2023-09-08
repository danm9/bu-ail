import React from "react";
import { NavBar } from "../NavBar/NavBar";
// import { Footer } from "../Footer/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";

export function Home() {
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
        <div className="d-flex align-items-center flex-column">
          <h1 className="mt-3 mb-3 fw-bold">Welcome to BU AIL</h1>
        </div>
        <p></p>

        <div
          id="button-group"
          className="d-flex justify-content-evenly align-center mt-5 pb-3"
        ></div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
