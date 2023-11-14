import { Component } from "react";
import { email } from "./config";

class Contact extends Component {
  render() {
    return (
      <section id="contactSection">
        <div className="sectionBackground" id="contactEmail">
          <h3>Want to talk?</h3>
          <p>
            Im looking for new opportunities and learning experiences, if you think I might be a
            good fit or just want to chat then my email is open, Ill try my best to get back to you.
          </p>
          <a id="emailLink" href={"mailto:" + email} rel="noopener noreferrer" target="_blank">
            <span id="contactButton">Get in touch</span>
          </a>
        </div>
      </section>
    );
  }
}

export default Contact;
