import React from "react";
import "../Styles/Styles.css";

export function Footer() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      id="footer-container"
    >
      <p className="m-1">
        <strong>©2023 by BU Agile Innovation Lab</strong>
      </p>
      <br />
      <p>
        The Boston University Agile Innovation Lab is a resource for the agile
        project management community.
      </p>
    </div>
  );
}
