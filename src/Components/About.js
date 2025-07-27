import React, { useState } from "react";

function About() {
  const [showAboutMore, setShowAboutMore] = useState(false);

  return (
    <section className="about" id="about">
      <div className="about-img">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/about.jpeg`}
          alt="about"
        />
      </div>

      <div className="about-content fw-bold">
        <h2 className="heading fw-bold">
          About <span>Me</span>
        </h2>
        <h3 className="fw-bold">Full Stack Developer</h3>

        <p className="fw-bold">
          I’m a dedicated and enthusiastic <strong>Full Stack Developer</strong> with hands-on experience in building responsive web applications using technologies like <strong>Java, Spring Boot, MySQL, React, and Angular</strong>.
          {showAboutMore && (
            <div className="fw-bold">
              {" "}
              I completed my <strong>MCA</strong> from <strong>P.E.S. Modern College of Engineering, Pune</strong>, and I'm passionate about delivering clean, secure, and scalable solutions. 
              I’ve gained practical knowledge through real-time projects, where I designed REST APIs, implemented secure authentication flows, and collaborated using Git and Postman. 
              <br /><br />
              With a strong foundation in core programming and modern frameworks, I aim to grow as a developer who bridges business needs with high-quality technical implementation. I continuously strive to improve and stay updated with new tools and industry trends.
            </div>
          )}
        </p>

        <a
          className="btn"
          style={{ cursor: "pointer" }}
          onClick={() => setShowAboutMore(!showAboutMore)}
        >
          {showAboutMore ? "Show Less" : "Read More"}
        </a>
      </div>
    </section>
  );
}

export default About;
