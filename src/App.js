//import './App.css';
import React, {Component, useLayoutEffect, useRef} from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import './App.scss'
import Logo from './images/StarMLogo.svg';
import IconLogo from "./components/icons/logo";
import IconSynthLogo from './components/icons/personal synthwave logo';
import HTML5Logo from "./components/icons/html5";
import CSS3Logo from "./components/icons/css3";
import JavascriptLogo from './components/icons/javascript';
import JavaLogo from './components/icons/java';
import ReactLogo from './components/icons/reactlogo';
import PythonLogo from './components/icons/python';
import CSharpLogo from './components/icons/csharp';
import SASSLogo from './components/icons/sass';
import TypeScriptLogo from './components/icons/typescript';
import BootStrapLogo from './components/icons/bootstrap';
import LuaLogo from './components/icons/lua';
import NPMLogo from './components/icons/npmlogo';
import VisualStudioLogo from './components/icons/visualstudio';
import VSCodeLogo from './components/icons/vscode';
import UnityLogo from './components/icons/unity';
import GodotLogo from './components/icons/godot';
import LongCloud1 from './images/clouds/LongCloud1';
import { gsap } from 'gsap';
import ProfilePicture from './images/logo.svg';
import { email } from './components/config';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navigator />
        <CloudMachine />
        <div id="content">
          <Hero />
          <About />
          <Experience />
          <Contact />
        </div>
      </div>
    );
  }
}

class Navigator extends Component {
  render(){
    return (
      <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#heroSection">
            <IconSynthLogo width="50" height="50" />
            {/** 
            <IconLogo classProp="starLogoSvg ringColor" width="50" height="50"/>&nbsp;Mackenzie May
            */}
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#aboutSection">About</Nav.Link>
              <Nav.Link href="#experienceSection">Experience</Nav.Link>
              <Nav.Link href="#contactSection">Contact</Nav.Link>
              <Nav.Link href="#home">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

class Hero extends Component {
  render(){
    return (
      <section id="heroSection">
        <div id="heroContainer">
          {/** 
          <Image fluid src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" roundedCircle="true"></Image>
          */}
            <div>
              <h1>
                Mackenzie May
              </h1>
            </div>
            <div>
              <h2>
                {/* maybe have a random title or a title that keeps switching out?
                celestial architect (when the site is in full starmode)
                front end developer
                software dude (force this after celestial architect)
                boardgamer
                dead god
                website maker
                weeb
                delusions of grandeur
                allergic to melons
                he/him
                email ninja
                panicrazia
                aniquest
                future olympic sailing gold medalist
                Bo Jackson
                electric boogaloo
                quest for more money
                freerange rabbiteer
                aquarium lover
                pizza enthusiast
                hi
                watched one piece
                Sanji is better than Zoro (maybe make this forced to come after the one piece thing)
                worm reader
                traveler
                Rochesterian
                ai overlord
                doesn't like almonds
                immortality seeker
                machine god 
                tarot reader
                日本語下手
                bad at smash bros
                noun verber
                mahjonger
                */}
                {/**Front End Developer */}
                the Quest for Healthcare
              </h2>
            </div>
          </div>
      </section>
    );
  }
}

class CloudMachine extends Component {
  render(){
    return (
      <div className="cloudMachine">
        <LongCloud1 classProp={"cloudTest"} width={"300"}/>
      </div>
      
    )
  }
}

class About extends Component {
  render(){
    return (
      <section id="aboutSection">
        <div className="aboutBackground">
          <p>
            Hey, whats up? My name is Mackenzie and I am breaking my way into the 
            software industry, I have known how to code for a while now,
            specifically in java and C# with a dusting of C++, 
            Ive mostly used it to make things for myself like games 
            (both modding them and attempting to make my own) 
            and learned html and css for small projects when I couldn't find 
            anything to suit my needs, like a customized new tab.
          </p>
          <p>
            Ive mostly made money by doing crafts and small projects to 
            supplement income from working in the finance industry, which then got traction 
            into making enough money to do full time. Problem is though, Ive now 
            aged out of my parents healthcare and this added cost has made this non-viable, 
            so I thought, why not continue my original plan and go into the software 
            industry? Ive always been interested in that as a long term goal if I 
            was not able to sustain myself via my own business, not even mentioning 
            how it opens up a lot of possibilities for making my own business.
          </p>
          <p>
            This, in combination of looking to learn much more about how to make 
            bigger projects and having others to learn from, is what is pushing 
            me into this direction.
          </p>
          <p>
            Ive been working to get certifications for initially front end 
            development, but want to branch out into full stack development 
            in order to build large projects that I want to do later on.
          </p>
        </div>
      </section>
    );
  }
}

class Experience extends Component {
  render(){
    return (
      <section id="experienceSection">
        <div id="certifications">
          <h3>Here are some certifications I have, and ones I am gunning for in the future</h3>
          <ul className="noMarkers">
            <li></li>
          </ul>
        </div>
        <div id="languages">
          <h3>Some technologies Ive used to make things</h3>
          <ul className="noMarkers sideList">
            {/** */}
            <li className="svgHolder"><HTML5Logo/></li>
            <li className="svgHolder"><CSS3Logo/></li>
            <li className="svgHolder"><JavascriptLogo/></li>
            <li className="svgHolder"><TypeScriptLogo/></li>
            <li className="svgHolder"><ReactLogo/></li>
            <li className="svgHolder"><BootStrapLogo/></li>
            <li className="svgHolder"><SASSLogo/></li>
            <li className="svgHolder"><NPMLogo/></li>
            <li className="svgHolder"><PythonLogo classProp="pythonColors"/></li>
            <li className="svgHolder"><CSharpLogo/></li>
            <li className="svgHolder"><JavaLogo/></li>
            <li className="svgHolder"><LuaLogo/></li>
            <li className="svgHolder"><VisualStudioLogo/></li>
            <li className="svgHolder"><VSCodeLogo/></li>
            <li className="svgHolder"><UnityLogo/></li>
            <li className="svgHolder"><GodotLogo/></li>
          </ul>
        </div>
      </section>
    );
  }
}

class Contact extends Component {
  render(){
    return (
      <section id="contactSection">
        <div id="contactEmail">
          <h3>Want to talk?</h3>
          <p>Im looking for new opportunities and learning experiences, if you think I might be a good fit or just want to chat then my email is open, Ill try my best to get back to you.</p>
          <a id="emailLink" href={"mailto:"+email} rel="noopener noreferrer" target="_blank"><span id="contactButton">Get in touch</span></a>
        </div>
      </section>
    );
  }
}

class Footer extends Component {
  render(){
    return (
      <footer>

      </footer>
    );
  }
}

export default App;
