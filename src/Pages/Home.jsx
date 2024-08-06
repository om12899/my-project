import { Link } from "react-router-dom";
import Opening from "../Components/Opening";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import biker from "../assets/bike.png";
import photographyImage from "../assets/photography.png";
import storyWritingsImage from "../assets/stories.png";
import { useEffect } from "react";
import { useState } from "react";
function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Opening />
      ) : (
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
          <div>
            <div className="p-4 mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Tattoo */}
                <div
                  className="relative w-full pb-[100%] bg-center bg-cover group"
                  style={{
                    backgroundImage: `url("https://drive.google.com/thumbnail?id=1UDhOh8cTt80oKoX96lSdxUZ29wxEsP6P")`,
                  }}
                >
                  <Link to="/tattoo">
                    <div className="absolute inset-0 bg-light-blue bg-opacity-90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <p className="text-dark-gray font-semibold text-lg">
                        Tattoo Design
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Coming Soon */}
                <div
                  className="relative w-full pb-[100%] bg-center bg-cover group"
                  style={{
                    backgroundImage: `url(${storyWritingsImage})`,
                  }}
                >
                  <Link to="/">
                    <div className="absolute inset-0 bg-light-blue bg-opacity-90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <p className="text-dark-gray font-semibold text-lg">
                        Coming Soon..
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Videos */}
                <div
                  className="relative w-full pb-[100%] bg-center bg-cover group"
                  style={{
                    backgroundImage: `url(${biker})`,
                  }}
                >
                  <Link to="/">
                    <div className="absolute inset-0 bg-light-blue bg-opacity-90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <p className="text-dark-gray font-semibold text-lg">
                        Coming Soon
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <p className="text-light-gray font-extralight fixed bottom-5 flex text-xs items-center">
            <img
              width="12"
              alt="Copyright"
              src="https://img.icons8.com/?size=100&id=88661&format=png&color=f7f8f3"
            />
            All Rights Reserved to Om Thakkar
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
