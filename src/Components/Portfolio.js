import React from 'react'

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
        <h2 className="heading fw-bold">
          Latest <span>Projects</span>
        </h2>
        <div className="portfolio-container fw-bold">
          {[
            {
              img: "port1.jpg",
              title: "E-commerce App",
              description:
                "A full-stack e-commerce web application using Spring Boot and Angular.",
            },
            {
              img: "port2.jpg",
              title: "Dock Management System",
              description:
                "Platform to manage shipments, docking schedules, and staff allocation.",
            },
            {
              img: "port3.jpg",
              title: "Portfolio Website",
              description:
                "Personal portfolio built with React, showcasing my work and skills.",
            },
            {
              img: "port4.jpg",
              title: "Food Delivery Clone",
              description:
                "React-based frontend UI for a Swiggy/Zomato clone with dummy backend.",
            },
            {
              img: "port5.jpg",
              title: "Blog API with JWT",
              description:
                "Spring Boot REST API for a blogging platform secured with JWT.",
            },
          ].map((project, idx) => (
            <div className="portfolio-box" key={idx}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/${project.img}`}
                alt={`portfolio-${idx}`}
              />
              <div className="portfolio-layer">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <a href="#">
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

  )
}

export default Portfolio;