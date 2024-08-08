import React from "react";

function CMS() {
  return (
    <div className="p-6 text-left text-light-gray">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-light-blue">
          Product Introduction: CMS Portal
        </h1>
        <p className="mt-4 text-lg">
          Welcome to an in-depth look at a recent project where I designed and
          developed the UI for a comprehensive CMS Portal for a client whose
          details must remain confidential. This project exemplifies my
          commitment to creating user-friendly and secure digital solutions.
        </p>

        <h2 className="text-2xl mt-6 font-semibold text-light-blue">
          Concept and Inspiration
        </h2>
        <p className="mt-4 text-lg">
          The goal was to create a CMS Portal that integrates all essential
          features an ideal CMS should have, focusing on both security and ease
          of use. The UI is tailored to enhance efficiency and usability,
          ensuring that content management is as seamless and intuitive as
          possible.
        </p>

        <h2 className="text-2xl mt-6 font-semibold text-light-blue">
          Key Features
        </h2>
        <ul className="list-disc list-inside mt-4 text-lg">
          <li>
            <strong>Security & Ease of Use:</strong> The portal prioritizes
            robust security measures while maintaining a user-friendly interface
            suitable for admins with varying levels of technical expertise.
          </li>
          <li>
            <strong>Expandable/Collapsible Side-Navbar:</strong> The side-navbar
            can be expanded or collapsed to maximize workspace, providing
            flexibility and convenience for users.
          </li>
          <li>
            <strong>Extensive Logo Usage:</strong> Given the bilingual nature of
            the content (English and Spanish) and the possibility of
            Spanish-only speaking admins, extensive use of logos aids in
            intuitive navigation and understanding.
          </li>
          <li>
            <strong>Organized Navigation:</strong> The navbar is meticulously
            divided into categories and subcategories, enhancing readability and
            ease of access to different sections.
          </li>
          <li>
            <strong>Comprehensive Content Indexing:</strong> Each category’s
            content is indexed with detailed information, including:
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Title</li>
              <li>Publisher details (admin name, time of publish)</li>
              <li>Content state (Published, Draft, Archived)</li>
              <li>Active device type (Web, Mobile, Both)</li>
              <li>
                For specific content types, additional details like images (for
                logos) are included.
              </li>
            </ul>
          </li>
          <li>
            <strong>Content Management Options:</strong> Users can modify,
            publish immediately or schedule, and delete content with ease. The
            soft delete feature ensures that no content is lost accidentally,
            providing an added layer of security.
          </li>
          <li>
            <strong>User Management Screen:</strong> The portal includes a user
            management screen to easily allow the creation and
            activation/deactivation of user accounts. It also contains options
            to reset passwords for users and show details like the last login of
            all users and who created each user. The navbar differs for the two
            roles available:
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Admin</li>
              <li>Creator</li>
            </ul>
          </li>
          <li>
            <strong>Two-Factor Authentication (2FA):</strong> To ensure security
            at all times, the portal includes two-factor authentication, adding
            an extra layer of protection for user accounts.
          </li>
        </ul>

        <h2 className="text-2xl mt-6 font-semibold text-light-blue">
          Tech Stack
        </h2>
        <p className="mt-4 text-lg">
          <strong>Front-end:</strong> The UI is developed in React with Tailwind
          CSS, ensuring a modern and responsive design.
          <br />
          <strong>Back-end:</strong> The back-end is written in Node.js with
          MongoDB, providing a robust and scalable infrastructure for the
          portal.
        </p>

        <h2 className="text-2xl mt-6 font-semibold text-light-blue">
          Design Approach
        </h2>
        <p className="mt-4 text-lg">
          In designing this CMS Portal, I aimed to create a visual identity that
          encapsulates the core needs of a content management system. The
          combination of these elements serves as a powerful representation of
          how I approach design: with a balance of technical precision, creative
          vision, and user-centric functionality. The portal is designed to be
          versatile and impactful, making a memorable impression across various
          applications.
        </p>

        <p className="mt-6 text-lg">
          Explore this project to see how these elements come together to form a
          distinctive and meaningful CMS Portal that truly represents the
          client's needs and goals.
        </p>
        <h2 className="text-2xl mt-6 font-semibold text-light-blue">
          Final Product
        </h2>
        <div className="grid mt-6 sm:grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <img
              src="https://portfolio-images-2.s3.ap-south-1.amazonaws.com/CMS1.png"
              alt="cms1"
            />
          </div>
          <div>
            <img
              src="https://portfolio-images-2.s3.ap-south-1.amazonaws.com/CMS2.png"
              alt="cms2"
            />
          </div>
          <div>
            <img
              src="https://portfolio-images-2.s3.ap-south-1.amazonaws.com/CMS3.png"
              alt="cms3"
            />
          </div>
          <div>
            <img
              src="https://portfolio-images-2.s3.ap-south-1.amazonaws.com/CMS4.png"
              alt="cms4"
            />
          </div>
        </div>
        <p className="text-light-gray font-extralight text-sm mt-2">
          Some sensitive information is hidden due to NDA agreement
        </p>
      </div>
    </div>
  );
}

export default CMS;
