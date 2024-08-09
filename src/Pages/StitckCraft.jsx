import React from "react";

function StitchCraftBlog() {
  return (
    <div
      className="text-light-gray text-left
     p-6"
    >
      <h1 className="text-4xl font-bold text-light-blue mb-4">
        StitchCraft: A Tailor-Made E-Commerce Experience
      </h1>

      <p className="text-lg mb-4">
        In this project, I developed StitchCraft—an e-commerce website
        specifically designed for a tailor, offering a seamless and personalized
        shopping experience for custom-made clothing. StitchCraft is more than
        just an online store; it's a platform that caters to the unique needs of
        tailoring services, combining modern e-commerce features with the
        intricacies of custom tailoring.
      </p>

      <h2 className="text-3xl font-semibold text-light-blue mt-6 mb-4">
        Concept and Inspiration
      </h2>
      <p className="text-lg mb-4">
        The goal behind StitchCraft was to create a user-centric platform that
        simplifies the process of ordering custom clothing. By integrating
        features tailored to the needs of both the tailor and the customers,
        StitchCraft enhances the overall user experience. The design utilizes
        vertical and horizontal scrolling on the homepage, allowing users to
        easily explore different categories and find what they need.
      </p>

      <h2 className="text-3xl font-semibold text-light-blue mt-6 mb-4">
        Key Features
      </h2>
      <ul className="list-disc list-inside text-lg mb-4">
        <li className="mb-2">
          <strong>Category Segregation:</strong> The homepage is thoughtfully
          organized into categories, making it easy for users to browse various
          types of clothing and fabric options.
        </li>
        <li className="mb-2">
          <strong>Custom Fabric Selection:</strong> StitchCraft allows users to
          customize all relevant fabrics needed for a particular garment. From
          material and color to patterns, the customization options are
          extensive.
        </li>
        <li className="mb-2">
          <strong>Size Measurement Options:</strong> Recognizing the importance
          of accurate measurements, StitchCraft offers three convenient methods
          for taking measurements:
          <ul className="list-disc list-inside ml-6">
            <li>
              Upload Measurements: Users can upload their measurements directly
              on the website.
            </li>
            <li>
              Home Visit: A tailor can visit the customer’s home to take precise
              measurements.
            </li>
            <li>
              In-Store Visit: Customers can visit the store for a professional
              fitting.
            </li>
          </ul>
        </li>
        <li className="mb-2">
          <strong>Search Functionality:</strong> A search bar in the top
          navigation bar ensures that users can quickly find what they need from
          any page, streamlining the shopping experience.
        </li>
        <li className="mb-2">
          <strong>Order Summary & Pricing:</strong> After making their
          selections, users can view a detailed summary of their order,
          including the total price of the item, before proceeding to checkout.
        </li>
        <li className="mb-2">
          <strong>User Account Section:</strong> StitchCraft includes a user
          account section where customers can store payment details, order
          history, and addresses for easy and quick checkout. This feature
          simplifies repeat purchases and enhances the overall user experience.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold text-light-blue mt-6 mb-4">
        Tech Stack
      </h2>
      <p className="text-lg mb-4">
        StitchCraft is built using the MERN stack (MongoDB, Express.js, React,
        Node.js), providing a robust and scalable foundation for the platform.
        The use of Tailwind CSS ensures a clean and responsive design,
        delivering a consistent user experience across all devices.
      </p>

      <h2 className="text-3xl font-semibold text-light-blue mt-6 mb-4">
        Conclusion
      </h2>
      <p className="text-lg mb-4">
        StitchCraft is designed to revolutionize how customers shop for custom
        clothing online. By combining the best practices in e-commerce with the
        specific needs of tailoring services, this platform offers a seamless,
        intuitive, and secure shopping experience. Whether you’re a customer
        looking for the perfect fabric or a tailor managing orders, StitchCraft
        makes the process effortless and enjoyable.
      </p>

      <p className="text-3xl text-light-blue font-semibold">Final Product</p>
      <div className="mt-6">
        <div>
          <img
            src="https://portfolio-images-2.s3.ap-south-1.amazonaws.com/tailor-ecom-1.png"
            alt=""
          />
        </div>
        <div className="mt-4">
          <img
            src="https://portfolio-images-2.s3.ap-south-1.amazonaws.com/tailor-ecom-2.png"
            alt=""
          />
        </div>
        <div className="mt-4">
          <img
            src="https://portfolio-images-2.s3.ap-south-1.amazonaws.com/tailor-ecom-3.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default StitchCraftBlog;
