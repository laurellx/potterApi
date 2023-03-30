import React from "react";
import broom from "../../src/assets/giphy.gif";

export default function Home() {
  return (
    <div className="wrapper wrapper--home flex">
      <div className="home__intro--title flex">
        <h2>Welcome to Hogwarts</h2>
      </div>
      <div className="home__intro--subtitle flex">
        <h4>
          Hop on your broomstick and let's journey together through the
          wizarding world!
        </h4>
      </div>
      <img src={broom} alt="broom-gif" />
    </div>
  );
}
