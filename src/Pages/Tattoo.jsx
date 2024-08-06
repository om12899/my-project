import React from "react";

function Tattoo() {
  return (
    <div className="p-4 md:text-left  text-light-gray">
      <p className="text-5xl font-semibold text-light-blue text-center mb-4">
        Tattoo Design
      </p>
      <p className="text-lg md:mt-8 text-wrap mb-4">
        Welcome to the creative journey behind my personal logo design. This
        project is a reflection of my multifaceted skills and passions, captured
        in a single, cohesive visual identity. The design is not just a logo;
        it's a story told through imagery, representing the diverse ways I
        approach creativity and design.
      </p>
      <p className="text-4xl font-semibold text-light-blue mb-2">
        Concept and Inspiration
      </p>
      <p className="text-lg text-wrap mb-4">
        Explore this project to see how these elements come together to form a
        distinctive and meaningful logo that truly represents who I am as a
        designer.
      </p>
      <p className="text-lg text-wrap mb-4">
        The logo design is inspired by a tattoo I created for myself, which
        incorporates a camera, a pen, and HTML fragments. Each element was
        chosen to symbolize a different aspect of my creative expertise and
        interests:
      </p>

      <ol className="text-lg text-wrap list-decimal list-inside mb-4">
        <li className="mb-2">
          <strong className="text-light-blue">HTML Fragments</strong>:
          Representing my passion for coding and web design, these fragments
          symbolize the digital canvas where I craft interactive and engaging
          user experiences. They reflect my dedication to blending technical
          skill with creative storytelling.
        </li>
        <li className="mb-2">
          <strong className="text-light-blue">The Camera</strong>: Signifying my
          love for photography, this element captures my ability to view the
          world through a unique lens, influencing how I approach visual design.
          It represents my commitment to creating designs that are not only
          functional but also visually compelling.
        </li>
        <li className="mb-2">
          <strong className="text-light-blue">The Pen</strong>: Symbolizing my
          dual passion for writing and design, the pen reflects my talent for
          crafting narratives and creating visually appealing content. It
          represents my approach to design as a harmonious blend of form and
          function, where every detail tells a story.
        </li>
      </ol>
      <p className="text-4xl font-semibold text-light-blue mb-2">
        Design Approach
      </p>
      <p className="text-lg text-wrap mb-4">
        In designing this logo, I aimed to create a visual identity that
        encapsulates my core skills and passions. The combination of these
        elements serves as a powerful representation of how I approach design:
        with a balance of technical precision, creative vision, and narrative
        depth. The logo is designed to be versatile and impactful, making a
        memorable impression across various mediums and applications.
      </p>
      <p className="text-4xl font-semibold text-light-blue mb-2">
        Final Product
      </p>
      <div className="flex justify-center mb-4">
        <img
          src="https://drive.google.com/thumbnail?id=1NZ-gXTj7Ik3Hw-QL5_GhMdCUswEwU6oF"
          alt="Tattoo Design"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
}

export default Tattoo;
