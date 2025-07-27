import React from 'react'

function Service() {
  return (
      <section className="services" id="services">
        <h2 className="heading fw-bold">
          Our <span>Services</span>
        </h2>
        <div className="services-container">
          <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3 className="fw-bold">Web Development</h3>
            <p className="fw-bold">
              Built a Dock & Yard management platform and E-commerce app using Spring
              Boot and Angular.
            </p>
          </div>
          <div className="services-box">
            <i className="bx bxs-paint"></i>
            <h3 className="fw-bold">UI Design</h3>
            <p className="fw-bold">
              Designed responsive and modern interfaces in Angular and React.
            </p>
          </div>
          <div className="services-box">
            <i className="bx bxs-pencil"></i>
            <h3 className="fw-bold">Documentation</h3>
            <p className="fw-bold">
              Created Swagger, Postman test collections, and integrated Email
              OTP systems.
            </p>
          </div>
        </div>
      </section>
  )
}

export default Service;