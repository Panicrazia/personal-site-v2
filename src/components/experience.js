import { Component } from "react";
import Certifications from "./certifications";
import Technologies from "./technologies";

class Experience extends Component {
    render(){
        return (
        <section id="experienceSection">
            <Certifications />
            <Technologies />
        </section>
        );
    }
}

export default Experience;