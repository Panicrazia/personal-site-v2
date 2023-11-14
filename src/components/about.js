import { Component } from "react";
import ProfilePicture from "../images/logo.svg";
import self from "../images/104038004_p0.png";

class About extends Component {
  render() {
    return (
      <section id="aboutSection">
        <div className="aboutBackground sectionBackground">
          <p>
            Hi there! I'm Mackenzie May, and I'm all about diving into the world of software
            development with unbridled enthusiasm. My journey in this field is in its early stages,
            but my appetite for learning is insatiable, and I'm on the hunt for a professional
            experience to nurture my passion for coding and enable me to create some big ideas I
            have.
            <br />
            <br />
            I'm not just looking for a job; I'm on a mission to soak up as much knowledge and
            experience as I can. My drive to learn is matched only by my commitment to contributing
            my skills and dedication to a forward-thinking team. If your company is in search of a
            junior developer with a deep interest in learning and a commitment to excellence, I
            could be the perfect fit to fulfill that role.
          </p>
        </div>
        <div>
          <div className="imageCircle">
            <img src={self} alt="pictur" className="w-100"></img>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
