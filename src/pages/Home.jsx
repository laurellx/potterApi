import React from "react";
import broom from "../../src/assets/giphy.gif";

export default function Home() {
  return (
    <section className="content-container flex">
      <h2 className="home__intro--title flex">Welcome to Hogwarts</h2>
      <h4 className="home__intro--subtitle flex">
        Hop on your broomstick and let's journey together through the wizarding
        world!
      </h4>
      <img src={broom} alt="broom-gif" className="broom-gif" />
    </section>
  );
}
