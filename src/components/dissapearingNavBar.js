import React, { useState, useEffect, useRef } from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import Logo from "../images/StarMLogo.svg";
import IconLogo from "../components/icons/logo";
import IconSynthLogo from "../components/icons/personal synthwave logo.js";

const Navbar2 = () => {
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const sections = document.querySelectorAll("section[id]");
      setVisible(prevScrollpos > currentScrollPos || currentScrollPos < 60);
      prevScrollpos = currentScrollPos;
      const newActiveSection = [...sections]
        .reverse()
        .find((section) => currentScrollPos >= section.offsetTop - 100);
      setActiveSection(newActiveSection ? newActiveSection.id : null);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: visible ? "0" : "-76px",
        left: 0,
        right: 0,
        height: "76px",
        backgroundColor: "#fff",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        zIndex: "1000",
        transition: "top 0.3s",
      }}>
      <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#heroSection">
            <IconSynthLogo width="50" height="50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#aboutSection" active={activeSection === "aboutSection"}>
                About
              </Nav.Link>
              <Nav.Link href="#experienceSection" active={activeSection === "experienceSection"}>
                Experience
              </Nav.Link>
              <Nav.Link href="#contactSection" active={activeSection === "contactSection"}>
                Contact
              </Nav.Link>
              <Nav.Link
                id="resumeButton"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer">
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

{
  /** 
<IconLogo classProp="starLogoSvg ringColor" width="50" height="50"/>&nbsp;Mackenzie May
*/
}

export default Navbar2;
