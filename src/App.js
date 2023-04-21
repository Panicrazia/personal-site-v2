//import './App.css';
import React, {Component, useLayoutEffect, useRef} from 'react';
import './App.scss'
import CloudMachine from './components/LongCloud1';
import Navbar2 from './components/dissapearingNavBar';
import Hero from './components/hero';
import About from './components/about';
import Experience from './components/experience';
import Contact from './components/contact';

class App extends Component {
    render(){
        return (
            <div className="App">
                <Navbar2 />
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

export default App;