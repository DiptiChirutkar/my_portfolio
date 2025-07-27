import React, { useState } from "react";

function Profile() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="home" id="home">
      <div className="home-content">
        {/* === Static Header === */}
        <div className="intro-header">
          <h3>Hello, It's Me</h3>
          <h1>Dipti Chirutkar</h1>
          <h3 className="fw-bold">
            And I'm a{" "}
            <span className="multiple-text">Full Stack Developer</span>
          </h3>
        </div>

        {/* === Short Description === */}
        <p className="fw-bold">
          Welcome to my portfolio! I specialize in building scalable and secure
          web applications using{" "}
          <strong>Java, Spring Boot, MySQL, React, and Angular</strong>. Let’s
          create meaningful digital solutions together!
        </p>

        {/* === Expandable Content === */}
        {showMore && (
          <div className="extended-content fw-bold">
            <p>
              I’m a results-oriented <strong>Full Stack Developer</strong> with
              practical experience in designing, developing, and testing
              web-based solutions. I hold a Master of Computer Applications
              (MCA) from P.E.S. Modern College of Engineering, Pune. I possess
              strong knowledge in{" "}
              <strong>
                Core Java, Spring Boot, REST APIs, HTML, CSS, Bootstrap,
                JavaScript, ReactJS, MySQL, and GitHub
              </strong>
              .
              <br />
              <br />
              I have worked on real-time projects involving both frontend and
              backend development. I'm comfortable using Git for version control
              and Postman for API testing. My academic and hands-on experience
              has prepared me to contribute effectively in dynamic development
              teams and fast-paced environments.
              <br />
              <br />
              I’m passionate about continuous learning and always eager to
              explore new technologies and tools in the software development
              ecosystem.
            </p>
          </div>
        )}

        {/* === Read More Button === */}
        <a
          className="btn read-more-btn"
          style={{ cursor: "pointer", marginTop: "1rem" }}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Read More"}
        </a>

        {/* === Social Media Icons === */}
        <div className="social-media">
          <a
            href="mailto:diptichirutkar1998@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-gmail"></i>
          </a>
          <a
            href="https://diptichirutkar.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/diptichirutkar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        {/* === Resume Download === */}
        <a
          href={`${process.env.PUBLIC_URL}/assets/cv.pdf`}
          className="btn"
          download="DiptiChirutkar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "1rem" }}
        >
          <i className="bx bx-download" style={{ marginRight: "6px" }}></i>
          My Resume
        </a>
      </div>

      {/* === Profile Image === */}
      <div className="home-img">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/Profile.jpeg`}
          alt="profile"
        />
      </div>
    </section>
  );
}

export default Profile;
