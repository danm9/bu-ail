import React from "react";
import TagManager from "react-gtm-module";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const tagManagerArgs = {
  //   gtmId: "XXX",
  // };

  // TagManager.initialize(tagManagerArgs);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/events" component={Events} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
