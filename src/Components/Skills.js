import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Skills() {
  return (
    <section className="skills-section py-5">
      <div className="container text-center">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          The technologies I use to bring ideas to life.
        </p>
        <div className="row gy-4 justify-content-center">
          {/* Programming Languages */}
          <div className="col-md-5 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-code-slash me-2 text-primary"></i>
                  Programming Languages
                </h5>
                <div className="badge-container">
                  <span className="badge badge-skill">
                    <i className="devicon-java-plain colored me-1"></i> Java
                  </span>
                  <span className="badge badge-skill">
                    <i className="devicon-python-plain colored me-1"></i> Python
                  </span>
                  <span className="badge badge-skill">
                    <i className="devicon-postgresql-plain colored me-1"></i>{" "}
                    SQL
                  </span>
                  <span className="badge badge-skill">
                    <i className="devicon-javascript-plain colored me-1"></i>{" "}
                    JavaScript
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Front-End */}
          <div className="col-md-5 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-window-sidebar me-2 text-primary"></i>
                  Front-End
                </h5>
                <div className="badge-container">
                  <span className="badge badge-skill">
                    <i className="devicon-html5-plain colored me-1"></i> HTML
                  </span>
                  <span className="badge badge-skill">
                    <i className="devicon-css3-plain colored me-1"></i> CSS
                  </span>
                  <span className="badge badge-skill">
                    <i className="devicon-bootstrap-plain colored me-1"></i>{" "}
                    Bootstrap
                  </span>
                  <span className="badge badge-skill">
                    <i className="devicon-react-original colored me-1"></i>{" "}
                    React
                  </span>
                  <span className="badge badge-skill">
                    <i className="devicon-angularjs-plain colored me-1"></i>{" "}
                    Angular
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div className="col-md-5 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-tools me-2 text-primary"></i>Frameworks &
                  Tools
                </h5>
                <div className="badge-container">
                  <span className="badge badge-skill">
                    <i className="devicon-spring-plain colored me-1"></i> Spring
                    Boot
                  </span>
                  <span className="badge badge-skill">
                    <i className="devicon-postman-plain colored me-1"></i>{" "}
                    Postman
                  </span>
                  <span className="badge badge-skill">
                    <i className="devicon-git-plain colored me-1"></i> Git
                  </span>
                  <span className="badge badge-skill">
                    <i className="devicon-vscode-plain colored me-1"></i> VS
                    Code
                  </span>
                  <span className="badge badge-skill">
                    <i className="devicon-eclipse-plain colored me-1"></i>{" "}
                    Eclipse
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-database-fill-gear me-2 text-primary "></i>
                  Database Technologies
                </h5>
                <div className="badge-container justify-content-center">
                  <span className="badge badge-skill">
                    <i className="devicon-mysql-plain colored me-1"></i> MySQL
                  </span>
                  <span className="badge badge-skill">
                    <i className="bi bi-window-desktop me-1 text-info"></i>{" "}
                    MySQL Workbench
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-people-fill me-2 text-primary"></i>
                  Soft Skills
                </h5>
                <div className="badge-container justify-content-center">
                  <span className="badge badge-skill">
                    <i className="bi bi-chat-dots me-1"></i> Effective
                    Communication
                  </span>
                  <span className="badge badge-skill">
                    <i className="bi bi-lightbulb me-1"></i> Problem-Solving
                  </span>
                  <span className="badge badge-skill">
                    <i className="bi bi-award me-1"></i> Leadership
                  </span>
                  <span className="badge badge-skill">
                    <i className="bi bi-clock-history me-1"></i> Time Management
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
