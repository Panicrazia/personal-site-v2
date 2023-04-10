import React, {Component, useLayoutEffect, useRef} from 'react';
import { gsap } from 'gsap';

const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

function LongCloud1({classProp, width}) {
    const cloud = useRef();
    const circle = useRef();
    
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

        gsap.fromTo(".cloud", {
            right: /*  -window.innerWidth  */- (width * rem),
        },
        {
            right: window.innerWidth-1,//TODO: this should be longer, so there 
            // is no chance of it stopping on resizing the window
            //xPercent: -100,
            duration: 20,
            repeat: -1,//-1
            ease: 'none',
            repeatDelay: 2,
        });
        }, cloud);// <- Scope!
        
        return () => ctx.revert();
    }, []);
  
    return (
        <div ref={cloud}>
            <svg width={width+"rem"} version="1.1" viewBox="0 0 230.71 30" xmlns="http://www.w3.org/2000/svg" /* fill="currentColor" */ className={"cloud "+classProp}>
            <defs>
                <linearGradient id="sunray" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stop-color="#fff930"/>
                <stop offset="38%" stop-color="#ff9a00"/>
                <stop offset="82%" stop-color="#ff515a"/>
                <stop offset="100%" stop-color="#ff00bd"/>
                </linearGradient>
            </defs>
            <g transform="translate(-2.6064 -90)" fill="url(#sunray)">
            <path d="m15.817 90c-2.77 0-4.9997 2.2302-4.9997 5.0002 0 2.77 2.2297 4.9997 4.9997 4.9997h22.258c2.7058 0.011404 4.8808 2.1929 4.8808 4.9015v0.19585c0 2.7157-2.1863 4.902-4.902 4.902h-10.973v5.1e-4h-19.474c-2.77 0-5.0002 2.2302-5.0002 5.0002 0 2.77 2.2302 5.0002 5.0002 5.0002h91.005c2.77 0 5.0002-2.2302 5.0002-5.0002 0-2.77-2.2302-5.0002-5.0002-5.0002h-22.752v-5.1e-4h-4.1057c-2.77 0-5.0002-2.2297-5.0002-4.9997 0-2.7634 2.2198-4.9891 4.9806-4.9997h58.177c2.7058 0.011404 4.8808 2.1929 4.8808 4.9015v0.19585c0 2.7157-2.1864 4.902-4.902 4.902h-10.973v5.1e-4h9.0501c-2.77 0-5.0002 2.2302-5.0002 5.0002 0 2.77 2.2302 5.0002 5.0002 5.0002h91.005c2.77 0 5.0002-2.2302 5.0002-5.0002 0-2.77-2.2302-5.0002-5.0002-5.0002h-51.275v-5.1e-4h-4.1057c-2.77 0-5.0002-2.2297-5.0002-4.9997 0-2.7634 2.2198-4.9891 4.9806-4.9997h1.5751c2.77 0 5.0002-2.2297 5.0002-4.9997 0-2.77-2.2302-5.0002-5.0002-5.0002h-149.33zm181.7 0c-2.77 0-5.0002 2.2302-5.0002 5.0002 0 2.77 2.2302 4.9997 5.0002 4.9997h13.383c2.77 0 4.9997-2.2297 4.9997-4.9997 0-2.77-2.2297-5.0002-4.9997-5.0002h-13.383zm27.565 0c-2.77 0-5.0002 2.2302-5.0002 5.0002 0 2.77 2.2302 4.9997 5.0002 4.9997h3.2308c2.77 0 4.9997-2.2297 4.9997-4.9997 0-2.77-2.2297-5.0002-4.9997-5.0002h-3.2308z"/>
            </g>
            </svg>
        </div>
    );
}

export default LongCloud1;


  