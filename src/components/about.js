import { Component } from "react";
import ProfilePicture from "../images/logo.svg";

class About extends Component {
  render() {
    return (
      <section id="aboutSection">
        <div className="aboutBackground">
          <p>
            Hey, whats up? My name is Mackenzie and I am breaking my way into the software industry,
            I have known how to code for a while now, specifically in java and C# with a dusting of
            C++, Ive mostly used it to make things for myself like games (both modding them and
            attempting to make my own) and learned html and css for small projects when I couldn't
            find anything to suit my needs, like a customized new tab.
            <br />
            <br />
            Ive mostly made money by doing art and small projects to supplement income from working
            in the finance industry, which then got traction into making enough money to do full
            time. Problem is though, Ive now aged out of my parents healthcare and this added cost
            has made this non-viable, so I thought, why not continue my original plan and go into
            the software industry? Ive always been interested in that as a long term goal if I was
            not able to sustain myself via my own business, not even mentioning how it opens up a
            lot of possibilities for making my own business.
            <br />
            <br />
            I am extremely interested in the new AI revolution happening now, and how much it will
            make code easier to write, this very site has components created by AI, such as the
            navbar with how it disappears on scrolling down. I am always looking to improve myself,
            and prompt engineering has been a golden gateway into improving productivity.
            <br />
            <br />
            This, in combination of looking to learn much more about how to make bigger projects and
            having others to learn from, is what is pushing me into this direction.
            <br />
            <br />
            Ive been working to get certifications for initially front end development, but want to
            branch out into full stack development in order to build large projects that I want to
            do later on.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
