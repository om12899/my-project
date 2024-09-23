function Turia() {
  return (
    <div className="text-light-gray text-left p-6">
      <h1 className="text-4xl font-bold text-light-blue mb-4">
        Turia: Streamlining CA Practice Management with MERN Stack
      </h1>

      <p className="text-lg mb-4">
        Turia is a comprehensive practice management platform designed
        specifically for Chartered Accountants (CAs). Built on the powerful MERN
        stack, Turia integrates all the necessary tools a CA needs to manage
        client data, track tasks, ensure timely compliance, and deliver seamless
        services. It is built to empower CAs by providing a modern, scalable,
        and efficient way to manage their daily operations and interactions with
        clients.
      </p>

      <h2 className="text-3xl font-semibold text-light-blue mt-6 mb-4">
        Concept and Inspiration
      </h2>
      <p className="text-lg mb-4">
        Turia was conceptualized to address the increasing demands faced by CAs
        in a digital age. As compliance and regulatory complexities grow,
        Chartered Accountants need tools that not only help them manage their
        daily workload but also ensure that they can meet deadlines and provide
        their clients with the best service. The vision behind Turia is to
        create a digital workspace that simplifies task management, client
        communication, and document handling, making it easier for CAs to
        perform their core functions.
      </p>

      <h2 className="text-3xl font-semibold text-light-blue mt-6 mb-4">
        Key Features
      </h2>
      <ul className="list-disc list-inside text-lg mb-4">
        <li className="mb-2">
          <strong>Client Management:</strong> Turia provides a centralized
          database where CAs can easily store and access client details,
          documents, and contact information, ensuring all client data is
          organized and up-to-date.
        </li>
        <li className="mb-2">
          <strong>Task and Deadline Tracking:</strong> CAs can create tasks for
          each client and assign deadlines, making it easy to stay on top of
          critical filing dates such as tax returns, audits, and compliance
          submissions.
        </li>
        <li className="mb-2">
          <strong>Document Upload and Storage:</strong> The app allows for
          seamless document upload, organization, and storage, ensuring that all
          necessary documents are readily available for review and submission.
        </li>
        <li className="mb-2">
          <strong>Billing and Invoicing:</strong> Turia simplifies the billing
          process by generating professional invoices, tracking payments, and
          managing client billing history.
        </li>
        <li className="mb-2">
          <strong>Compliance Reminders:</strong> With built-in reminders and
          alerts, Turia ensures that CAs never miss a compliance deadline,
          helping them stay compliant with government regulations.
        </li>
        <li className="mb-2">
          <strong>Role-based Access Control:</strong> CAs can assign different
          roles to team members, ensuring that access to sensitive client
          information is appropriately restricted.
        </li>
        <li className="mb-2">
          <strong>Seamless Communication:</strong> Integrated communication
          tools allow CAs to send updates and messages to clients directly from
          the platform, keeping communication organized and professional.
        </li>
        <li className="mb-2">
          <strong>Dashboard Analytics:</strong> Turia provides a comprehensive
          dashboard that displays key analytics such as tasks completed,
          upcoming deadlines, and financial summaries, giving CAs a clear
          overview of their practice performance.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold text-light-blue mt-6 mb-4">
        Tech Stack
      </h2>
      <ul className="list-disc list-inside text-lg mb-4">
        <li className="mb-2">
          <strong>MongoDB:</strong> A robust NoSQL database that stores client
          data, documents, and financial records securely.
        </li>
        <li className="mb-2">
          <strong>Express:</strong> A fast and flexible Node.js web application
          framework that powers the backend of Turia.
        </li>
        <li className="mb-2">
          <strong>React:</strong> A powerful frontend JavaScript library that
          delivers a responsive and interactive user interface, ensuring a
          smooth user experience.
        </li>
        <li className="mb-2">
          <strong>Node.js:</strong> The backend framework that powers Turia,
          handling everything from API requests to business logic.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold text-light-blue mt-6 mb-4">
        Conclusion
      </h2>
      <p className="text-lg mb-4">
        Turia is designed to be the perfect assistant for Chartered Accountants,
        providing an all-in-one solution for practice management. By leveraging
        the power of the MERN stack, Turia offers a modern, secure, and scalable
        platform that helps CAs stay organized, meet compliance deadlines, and
        provide excellent service to their clients. From managing clients and
        tasks to simplifying billing and communication, Turia revolutionizes the
        way CAs operate.
      </p>

      <p className="text-3xl text-light-blue font-semibold">Final Product</p>
      <div className="mt-6">
        <div>
          <img
            src="https://portfolio-images-2.s3.ap-south-1.amazonaws.com/turia1.jpeg"
            alt="Turia Dashboard"
          />
        </div>
        <div className="mt-4">
          <img
            src="https://portfolio-images-2.s3.ap-south-1.amazonaws.com/turia2.png"
            alt="Turia Client Management"
          />
        </div>
        <div className="mt-4">
          <img
            src="https://portfolio-images-2.s3.ap-south-1.amazonaws.com/turia3.jpeg"
            alt="Turia Task Management"
          />
        </div>
        <div className="mt-4">
          <img
            src="https://portfolio-images-2.s3.ap-south-1.amazonaws.com/turia4.png"
            alt="Turia Task Management"
          />
        </div>
        <div className="mt-4">
          <img
            src="https://portfolio-images-2.s3.ap-south-1.amazonaws.com/turia5.jpeg"
            alt="Turia Task Management"
          />
        </div>
      </div>
      <div className="mt-4">
        <img
          src="https://portfolio-images-2.s3.ap-south-1.amazonaws.com/turia6.png"
          alt="Turia Task Management"
        />
      </div>
    </div>
  );
}

export default Turia;
