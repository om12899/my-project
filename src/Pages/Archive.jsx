import React from "react";
import biker from "../assets/bike.png";
import photographyImage from "../assets/photography.png";
import storyWritingsImage from "../assets/stories.png";

function Archive() {
  return (
    <div className="p-4">
      <p className="text-center font-semibold text-lg mt-4 text-light-blue">
        Some of the work produced during my professional development or while
        honing my skills in a hobby.
      </p>
      <div className="block md:hidden p-4 text-white text-center font-semibold">
        Please Click on the Images to know more
      </div>
      <div className="p-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Photography */}
          <div
            className="relative w-full pb-[100%] bg-center bg-cover group"
            style={{
              backgroundImage: `url(${photographyImage})`,
            }}
          >
            <a href="https://www.pexels.com/@Om-Thakkar-221716190">
              <div className="absolute inset-0 bg-light-blue bg-opacity-90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-dark-gray font-semibold text-lg">
                  Photography
                </p>
              </div>
            </a>
          </div>

          {/* Story Writings */}
          <div
            className="relative w-full pb-[100%] bg-center bg-cover group"
            style={{
              backgroundImage: `url(${storyWritingsImage})`,
            }}
          >
            <a href="https://www.instagram.com/vividvichar/">
              <div className="absolute inset-0 bg-light-blue bg-opacity-90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-dark-gray font-semibold text-lg">
                  Story Writings
                </p>
              </div>
            </a>
          </div>

          {/* Videos */}
          <div
            className="relative w-full pb-[100%] bg-center bg-cover group"
            style={{
              backgroundImage: `url(${biker})`,
            }}
          >
            <a href="https://www.instagram.com/huntwithom/">
              <div className="absolute inset-0 bg-light-blue bg-opacity-90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-dark-gray font-semibold text-lg">Bikes</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <p className="text-light-gray font-extralight mt-4 flex text-xs items-center">
        <img
          width="12"
          alt="Copyright"
          src="https://img.icons8.com/?size=100&id=88661&format=png&color=f7f8f3"
        />
        All Rights Reserved to Om Thakkar
      </p>
    </div>
  );
}

export default Archive;
