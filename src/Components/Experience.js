import React from "react";

function Experience() {
  return (
    <section className="skills-section py-5" id="experience">
      <div className="container text-center">
        <h2 className="section-title fw-bold">Work Experience</h2>
        <p className="section-subtitle fw-bold">Professional Background & Projects</p>

        <div className="row gy-4 justify-content-center">

          {/* Flynaut SaaS Experience */}
          <div className="col-12">
            <div className="card skill-card w-100">
              <div className="card-body text-start">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/FlynautSaaS_logo.png`}
                    alt="Flynaut Logo"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                      marginRight: "15px",
                      borderRadius: "10px",
                      backgroundColor: "#fff"
                    }}
                  />
                  <h5 className="card-title m-0 fw-bold">
                    <i className="bi bi-briefcase-fill me-2 text-primary fw-bold"></i>
                    Software Developer – Java Developer | Flynaut SaaS Pvt. Ltd, Pune <br />
                    <span className="text-muted fw-normal">Jan 2024 – Present</span>
                  </h5>
                </div>

                <h6 className="mt-3 text-muted fw-bold">Project: Dock and Yard Management System</h6>

                <ul className="fw-bold" style={{ fontSize: "1.4rem", paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                  <li>Worked on the <strong>Load & Unload Automation</strong> module to optimize warehouse logistics.</li>
                  <li>Developed <strong>digital checklists</strong> to verify cargo, improving accuracy and reducing human error.</li>
                  <li>Integrated <strong>smart sensors</strong> for real-time weight tracking during loading/unloading.</li>
                  <li>Implemented <strong>AI-driven time tracking</strong> to boost operational efficiency.</li>
                  <li>Automated <strong>forklift and workforce assignment</strong> based on schedules and cargo type.</li>
                  <li>Utilized <strong>Java, Spring Boot</strong> for backend and <strong>MySQL</strong> for data persistence.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Internship at PHN */}
          <div className="col-12">
            <div className="card skill-card w-100">
              <div className="card-body text-start">
                <h5 className="card-title fw-bold">
                  <i className="bi bi-briefcase-fill me-2 text-primary fw-bold"></i>
                  Software Developer (Intern) – Full Stack Developer | PHN Technology Pvt Ltd <br />
                  <span className="text-muted fw-normal">July 2023 – Dec 2023</span>
                </h5>

                <h6 className="mt-3 text-muted fw-bold">Project 1: Hotel Reservation System</h6>
                <ul className="fw-bold" style={{ fontSize: "1.4rem", paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                  <li>Built a hotel reservation system using the <strong>MERN stack</strong>.</li>
                  <li>Implemented <strong>real-time availability</strong> and automated reservation workflows.</li>
                  <li>Worked on <strong>frontend (React.js)</strong> and <strong>backend (Node.js, MongoDB)</strong>.</li>
                </ul>

                <h6 className="mt-4 text-muted fw-bold">Project 2: NeoAgrotech E-commerce Platform</h6>
                <ul className="fw-bold" style={{ fontSize: "1.4rem", paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                  <li>Developed a full-stack e-commerce platform using <strong>React and Node.js</strong>.</li>
                  <li>Used <strong>MongoDB</strong> for real-time data and <strong>Firebase</strong> for authentication.</li>
                  <li>Implemented <strong>NoSQL schema flexibility</strong> to handle dynamic data.</li>
                  <li>Styled UI using <strong>Tailwind CSS</strong> and connected backend using Express APIs.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
