import React from "react";

const VisualStudioLogo = ({ classProp, width, height }) => (
  <svg
    version="1.1"
    height="inherit"
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={classProp}>
    <title>Visual Studio</title>
    <path d="M95 2.3l30.5 12.3v98.7l-30.7 12.4-49-48.7-31 24.1-12.3-6.2V33.1l12.3-5.9 31 24.3zM14.8 45.7v37.5l18.5-19zm48.1 18.5l31.9 25.1V39z"></path>
    {/**   No whitespace around it version
    viewBox="0 0 123 123.4" 
    <path d="m92.5 0 30.5 12.3v98.7l-30.7 12.4-49-48.7-31 24.1-12.3-6.2v-61.8l12.3-5.9 31 24.3zm-80.2 43.4v37.5l18.5-19zm48.1 18.5 31.9 25.1v-50.3z" />
    */}
  </svg>
);
export default VisualStudioLogo;
