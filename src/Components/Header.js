import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    const toggleNavbar = () => {
      navbar.classList.toggle("active");
      menuIcon.classList.toggle("bx-x");
    };

    menuIcon.addEventListener("click", toggleNavbar);

    return () => {
      menuIcon.removeEventListener("click", toggleNavbar);
    };
  }, []);
  return (
    <header className="header">
      <a href="#" className="logo fw-bold">
        {/* <i className="bx bx-code-alt me-2 text-primary"></i> */}
        Dipti | Full Stack Dev
      </a>
      <i className="bx bx-menu" id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home" className="active">
          {" "}
          Home{" "}
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
