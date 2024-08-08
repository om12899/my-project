import "react-toastify/dist/ReactToastify.css"; // Import the toastify CSS

import { Input, Textarea } from "@headlessui/react";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import api from "../api/axios";
import card from "../assets/card.png";
import clsx from "clsx";

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

    const submitPromise = api.post("/submit", formData);

    toast.promise(submitPromise, {
      pending: "Submitting data...",
      success: "Data submitted successfully",
      error: "Error submitting data",
    });

    // You can handle additional logic here if needed, e.g., clearing the form
    // setFormData({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   subject: "",
    //   content: "",
    // });
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
          <form onSubmit={handleSubmit}>
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
                    required
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
                    required
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
                  type="email"
                  required
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
                  required
                />
              </div>
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
                  rows={5}
                  required
                />
              </div>
              <div className="mt-2 text-left">
                <button
                  type="submit"
                  className="bg-dark-gray text-light-blue border-2 border-light-blue rounded-md w-full md:w-1/3 p-2 mt-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="border-t-2 border-gray-400 flex flex-col md:flex-row gap-6 md:gap-24 mt-8 text-left">
        <div className="mt-8">
          <p className="text-2xl text-dark-blue">Connect</p>
          <p className="text-light-gray mt-2">
            <a
              className="items-center gap-1 flex"
              href="https://www.instagram.com/iamomthakkar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
                alt="Instagram"
                style={{ height: "30px" }}
              />
              Instagram
            </a>
          </p>
          <p className="text-light-gray">
            <a
              className="items-center gap-1 flex"
              href="https://www.linkedin.com/in/om-thakkar-7534b312a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                alt="LinkedIn"
                style={{ height: "30px" }}
              />
              LinkedIn
            </a>
          </p>
          <p className="text-light-gray">
            <a
              className="items-center gap-1 flex"
              href="https://x.com/iamomthakkar?t=xEI_sGZ3s3E0NLmlwsYHow&s=08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=5MQ0gPAYYx7a&format=png&color=000000"
                alt="X (Twitter)"
                style={{ height: "30px" }}
              />
              X (Twitter)
            </a>
          </p>
        </div>
        <div className="mt-8">
          <p className="text-2xl text-dark-blue">Contact</p>
          <p className="flex gap-1 text-light-gray mt-2">
            <img
              src="https://img.icons8.com/?size=100&id=eKlyMs0XteXZ&format=png&color=000000"
              alt="Email"
              style={{ height: "30px" }}
            />
            <a
              className="items-center gap-1"
              href="mailto:omthakkar03@gmail.com"
            >
              om12899@gmail.com
            </a>
          </p>
          <p className="flex gap-1 text-light-gray">
            <img
              src="https://img.icons8.com/?size=100&id=12921&format=png&color=000000"
              alt="Phone"
              style={{ height: "30px" }}
            />
            <a className="items-center gap-1" href="tel:+917659662989">
              +91 91687 33397
            </a>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Contact;
