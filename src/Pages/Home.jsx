import React from "react";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div className="text-lg md:text-2xl mt-4 md:mt-8 font-semibold text-light-blue/70">
      <TypeAnimation
        sequence={[
          "Creating Inclusive Experiences,", // Types 'One'
          2000, // Waits 2s
          // "Pixel by Pixel.", // Deletes 'One' and types 'Two'
          // 2000, // Waits 2s
        ]}
        wrapper="span"
        cursor={false}
        repeat={1}
        style={{ fontSize: "1.5em", display: "inline-block" }}
        className="text-light-blue"
        speed={25}
      />{" "}
      <div className=" md:my-4"></div>
      <TypeAnimation
        sequence={[
          // "Creating Inclusive Experiences.", // Types 'One'
          2500,
          "Pixel by Pixel.", // Deletes 'One' and types 'Two'
          2000, // Waits 2s
        ]}
        wrapper="span"
        cursor={false}
        repeat={1}
        style={{ fontSize: "1.5em", display: "inline-block" }}
        speed={25}
      />
    </div>
  );
}

export default Home;
