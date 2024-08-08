import React from "react";

function AirBNB() {
  return (
    <div className="p-6 text-left text-light-gray">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-light-blue">
          Project Introduction: Fully Functional Airbnb Clone
        </h1>
        <p className="mt-4 text-lg">
          Welcome to a comprehensive breakdown of a project where I meticulously
          crafted a fully functional Airbnb clone. This endeavor was more than
          just a simple recreation; it was a deep dive into the principles and
          practices that make Airbnb one of the leading platforms in the world.
        </p>

        <h2 className="text-2xl mt-6 font-semibold text-light-blue">
          Concept and Inspiration
        </h2>
        <p className="mt-4 text-lg">
          The goal of this project was to study Airbnb's case, absorb as many
          principles as possible, and attempt to improve upon the design where
          possible. From the user experience to the back-end architecture, this
          clone helped me gain insights into the intricate details that make a
          platform like Airbnb thrive—and where it might be made even better.
        </p>

        <h2 className="text-2xl mt-6 font-semibold text-light-blue">
          Key Features
        </h2>
        <ul className="list-disc list-inside mt-4 text-lg">
          <li>
            <strong>Sign In & Sign Up:</strong> Because what's an online
            platform without the chance to create an account you'll forget about
            in a month?
          </li>
          <li>
            <strong>Listing a House:</strong> Users can list their properties,
            complete with descriptions, images, and amenities. Whether it's a
            cozy cabin in the woods or an overpriced studio in the city, this
            feature has you covered.
          </li>
          <li>
            <strong>Booking a House:</strong> The fun part—select your dates,
            browse through options, and book that perfect getaway (or at least
            pretend to).
          </li>
          <li>
            <strong>Selecting Dates:</strong> A seamless date-picker lets you
            choose when you'll theoretically stay at your dream property.
            Because planning is half the fun, right?
          </li>
          <li>
            <strong>Payment Gateway:</strong> And, of course, the crucial
            step—enter your payment details and click that shiny "Book Now"
            button. Don’t worry, this clone’s payment gateway is as fictional as
            your upcoming vacation, but it will give you the full booking
            experience.
          </li>
          <li>
            <strong>Enhanced User Experience Features:</strong> This clone
            includes a few features that I believe would enhance the user
            experience even further, such as improved filtering options for
            property searches, more intuitive navigation, and additional
            user-friendly touches that make the booking process even smoother.
          </li>
        </ul>

        <h2 className="text-2xl mt-6 font-semibold text-light-blue">
          Tech Stack
        </h2>
        <p className="mt-4 text-lg">
          <strong>Front-end:</strong> Developed using React with Tailwind CSS,
          ensuring a sleek, responsive design that mirrors the Airbnb
          experience.
          <br />
          <strong>Back-end:</strong> Powered by Node.js and MongoDB, the clone
          features a robust back-end that handles user authentication, property
          listings, bookings, and more.
        </p>

        <h2 className="text-2xl mt-6 font-semibold text-light-blue">
          Design Approach
        </h2>
        <p className="mt-4 text-lg">
          In building this Airbnb clone, my approach was to focus on the user
          journey, ensuring that every interaction is smooth, intuitive, and
          aligned with what users expect from a top-tier platform. The project
          was an exercise in understanding the granular details that contribute
          to a seamless user experience—and where thoughtful improvements could
          make it even better.
        </p>

        <p className="mt-6 text-lg">
          So, explore this project to see how these elements come together to
          form a fully functional Airbnb clone that, while imaginary, is packed
          with real-world learnings, insights, and a touch of innovation.
        </p>

        <h2 className="text-2xl mt-6 font-semibold text-light-blue">
          Final Look
        </h2>
        <div>
          <div>
            <img
              src="https://portfolio-images-2.s3.ap-south-1.amazonaws.com/airbnb-1.png"
              alt=""
            />
          </div>
          <div className="mt-4">
            <img
              src="https://portfolio-images-2.s3.ap-south-1.amazonaws.com/airbnb-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirBNB;
