import React from "react";
import { useLocation } from "react-router-dom";
import broom from "../../src/assets/giphy.gif";

export default function Home() {
  return (
    <div className="mbody-container flex">
      <div className="m-home__intro--title flex">
        <h2>Welcome to Hogwarts</h2>
      </div>
      <div className="m-home__intro--subtitle flex">
        <h4>
          Hop on your broomstick and let's journey together through the
          wizarding world!
        </h4>
      </div>
      <img src={broom} alt="broom-gif" className="broom-gif" />
    </div>
  );
}
