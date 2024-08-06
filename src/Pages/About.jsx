import { Link } from "react-router-dom";
import React from "react";
import photo from "../assets/om.png"; // Adjust the path to your logo

function About() {
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row text-left items-center justify-start border-b pb-12 border-gray-300">
        <div className="md:w-2/3 mt-4 px-4 md:px-8 text-light-gray">
          <p className="text-dark-blue text-center md:text-left font-semibold text-4xl md:text-8xl">
            Om Thakkar
          </p>
          <p className="mt-2 p-3 text-lg font-bold">
            "Om is a passionate UI Designer Specialising in Visual Designing
            currently working as a Frontend Engineer - Software Development at
            WorkLife Tech, Bengaluru"
          </p>
          <p className="mt-4 text-lg">
            He specializes in bridging the tenets of brand identity with UX/UI
            to craft innovative and impactful design solutions for the modern
            age.
          </p>
          <p className="mt-4 text-lg">
            Apart from the technical world, he is a bike enthusiast and loves to
            wander around in his free time.
          </p>
        </div>
        <div className=" md:mt-0 md:ml-4 flex justify-center">
          <img
            src={photo}
            className="w-48 h-48 md:w-72 md:h-72 rounded-lg"
            alt="Om Thakkar"
          />
        </div>
      </div>
      <div className="border-b-2 pb-8 border-gray-400 text-left mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="flex flex-col mt-2">
          <p className="text-2xl text-dark-blue">Education</p>
          <p className="mt-2 font-bold text-light-gray text-md">
            K.K Wagh Institute of Engineering
          </p>
          <p className="text-gray-400 text-sm">Bachelor of Technology</p>
          <p className="text-gray-400 text-sm">2017-2021</p>
        </div>
        <div className="mt-2">
          <p className="text-2xl text-dark-blue">Work</p>
          <p className="mt-2 font-bold text-light-gray text-md">
            Worklife Tech, Bengaluru
          </p>
          <p className="text-gray-400 text-sm">
            Engineer - Software Development
          </p>
          <p className="text-gray-400 text-sm">Oct 2023-Today</p>
          <p className="mt-2 font-bold text-light-gray text-md">
            Birlasoft, Pune
          </p>
          <p className="text-gray-400 text-sm">Software Developer</p>
          <p className="text-gray-400 text-sm">April 2021 - Oct 2023</p>
        </div>
        <div className="mt-2">
          <p className="text-2xl text-dark-blue">Technical Skills</p>
          <p className="mt-2 font-bold text-light-gray text-md">Languages</p>
          <p className="text-gray-400">
            JavaScript,TypeScript, Java, Python, Go, C#, C++
          </p>
          <p className="mt-2 font-bold text-light-gray text-md">Web Frontend</p>
          <p className="text-gray-400">React,NextJS, Plain HTML-CSS-JS</p>

          <p className="mt-2 font-bold text-light-gray text-md">
            Mobile Frontend
          </p>
          <p className="text-gray-400">React Native</p>

          <p className="mt-2 font-bold text-light-gray text-md">Backend</p>
          <p className="text-gray-400">Node, Express, Go</p>

          <p className="mt-2 font-bold text-light-gray text-md">Database</p>
          <p className="text-gray-400">SQL, PostgreSQL, MongoDB</p>

          <p className="mt-2 font-bold text-light-gray text-md">Cloud</p>
          <p className="text-gray-400">AWS, Azure</p>
          <p className="mt-2 font-bold text-light-gray text-md">External CSS</p>
          <p className="text-gray-400">MUI, Tailwind, Bootstrap</p>
        </div>
        <div className="mt-2">
          <p className="text-2xl text-dark-blue">Design Skills</p>
          <p className="mt-2 font-bold text-light-gray text-md">Adobe</p>
          <p className="text-gray-400">
            Photoshop, Illustrator, Lightroom, Indesign, After Effects, Premier
            Pro, XD
          </p>
          <p className="mt-2 font-bold text-light-gray text-md">Figma</p>

          <p className="mt-2 font-bold text-light-gray text-md">
            Microsoft Office
          </p>
          <p className="mt-2 font-bold text-light-gray text-md">Canva</p>
        </div>
        <div className="mt-2">
          <p className="text-2xl text-dark-blue">Certifications</p>
          <p className="mt-2 font-bold text-light-gray text-md">Google</p>
          <p className="text-gray-400">UX Design Professional Certificate</p>
          <p className="text-gray-400">Foundations of Project Management</p>

          <p className="mt-2 font-bold text-light-gray text-md">
            Amazon Web Services
          </p>
          <p className="text-gray-400">AWS Cloud Essentials</p>
          <p className="text-gray-400">Architecting Solutions with AWS</p>

          <p className="mt-2 font-bold text-light-gray text-md">JPM Chase</p>
          <p className="text-gray-400">
            Software Engineering Virtual Experience
          </p>
          <p className="mt-2 font-bold text-light-gray text-md">
            Microsoft Azure
          </p>
          <p className="text-gray-400">Azure Fundamentals AZ-900</p>

          <p className="mt-2 font-bold text-light-gray text-md">Canva</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-24 mt-8 text-left">
        <div>
          <p className="text-2xl text-dark-blue">Connect</p>
          <p className="text-light-gray mt-2">
            <a
              className="items-center gap-1 flex"
              href="https://www.instagram.com/iamomthakkar/"
            >
              <img
                src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
                alt=""
                style={{ height: "30px" }}
              />
              Instagram
            </a>
          </p>
          <p className="text-light-gray ">
            <a
              className="items-center gap-1 flex"
              href="https://www.linkedin.com/in/om-thakkar-7534b312a/"
            >
              <img
                src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                alt=""
                style={{ height: "30px" }}
              />
              LinkedIn
            </a>
          </p>
          <p className="text-light-gray ">
            <a
              className="items-center gap-1 flex"
              href="https://x.com/iamomthakkar?t=xEI_sGZ3s3E0NLmlwsYHow&s=08"
            >
              <img
                src="https://img.icons8.com/?size=100&id=5MQ0gPAYYx7a&format=png&color=000000"
                alt=""
                style={{ height: "30px" }}
              />
              X (Twitter)
            </a>
          </p>
        </div>
        <div>
          <p className="text-2xl text-dark-blue">Contact</p>
          <p className=" flex gap-1 text-light-gray mt-2">
            <img
              src="https://img.icons8.com/?size=100&id=12921&format=png&color=000000"
              alt=""
              style={{ height: "30px" }}
            />
            +91 9168733397
          </p>
          <p className="flex gap-1 text-light-gray ">
            <img
              src="https://img.icons8.com/?size=100&id=eKlyMs0XteXZ&format=png&color=000000"
              alt=""
              style={{ height: "30px" }}
            />
            <a href="mailto:om12899@gmail.com">om12899@gmail.com</a>
          </p>
        </div>
        <div>
          <p className="text-2xl text-dark-blue">
            <Link to="/contact">Get in Touch</Link>
          </p>
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

export default About;
