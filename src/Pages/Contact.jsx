import { Description, Field, Input, Label, Textarea } from "@headlessui/react";

import React from "react";
import api from "../api/axios";
import card from "../assets/card.png";
import clsx from "clsx";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    content: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post("/submit", formData);
      console.log(response.data);
      alert("Data submitted successfully");
    } catch (error) {
      console.error(error);
      alert("Error submitting data");
    }
  };
  return (
    <div className="p-4">
      <p className="text-dark-blue text-center md:text-left font-semibold text-3xl md:text-8xl">
        Get in Touch
      </p>
      <p className="text-gray-200 text-center md:text-left text-xl mt-2">
        Available for Discussions, Projects, Questions and Coffee.
      </p>
      <p className="text-gray-400 text-center md:text-left text-md mt-2">
        - Based in Northern Maharashtra Region, India
      </p>
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="w-full md:w-1/2">
          <img src={card} className="w-full" alt="Business Card" />
          <p className="text-2xl md:text-3xl text-center md:text-left font-semibold text-light-gray mt-4 md:mt-0">
            Creating Inclusive Experiences. Pixel by Pixel
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-center md:text-left text-lg text-light-gray p-4">
            Please fill out the form below
          </p>
          <form>
            <div className="px-4">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <label
                    className="block text-left text-gray-300"
                    htmlFor="firstName"
                  >
                    First Name (required)
                  </label>

                  <Input
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        firstName: e.target.value,
                      })
                    }
                    name="firstName"
                    className={clsx(
                      "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-light-blue"
                    )}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    className="block text-left text-gray-300"
                    htmlFor="lastName"
                  >
                    Last Name (required)
                  </label>

                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className={clsx(
                      "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-light-blue"
                    )}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="block text-left text-gray-300"
                  htmlFor="email"
                >
                  Email (required)
                </label>
                <Input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={clsx(
                    "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-light-blue"
                  )}
                  name="email"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <label
                  className="block text-left text-gray-300"
                  htmlFor="subject"
                >
                  Subject (required)
                </label>
                <Input
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className={clsx(
                    "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-light-blue"
                  )}
                  name="subject"
                  type="text"
                />
                <div className="mt-4">
                  <label
                    className="block text-left text-gray-300"
                    htmlFor="content"
                  >
                    Content (required)
                  </label>
                  <Textarea
                    value={formData.content}
                    onChange={(e) =>
                      setFormData({ ...formData, content: e.target.value })
                    }
                    className={clsx(
                      "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-light-blue"
                    )}
                    name="content"
                    type="text"
                    rows={5}
                  />
                </div>
                <div className="mt-2 text-left">
                  <button
                    onClick={handleSubmit}
                    className="bg-dark-gray text-light-blue border-2 border-light-blue rounded-md w-full md:w-1/3 p-2 mt-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className=" border-t-2  border-gray-400 flex flex-col md:flex-row gap-6 md:gap-24 mt-8 text-left">
        <div className="mt-8">
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
        <div className="mt-8">
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

export default Contact;
