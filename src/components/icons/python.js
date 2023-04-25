import React from "react";

const PythonLogo = ({ classProp, width, height }) => (
  <svg
    height="inherit"
    version="1.1"
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
    className={classProp}
    fill="currentColor">
    <title>Python</title>
    {/**top snake */}
    <path
      fill="var(--topSnakeColor)"
      d="m219.81 32c-18.212 0.05-35.962 1.5504-52.012 4.4004-45.2 8-53.4 24.7-53.4 55.6v40.699h106.9v13.602h-147c-31.1 0-58.301 18.699-66.801 54.199-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.701 54.201 56.801 54.201h36.699v-48.801c0-35.3 30.501-66.4 66.801-66.4h106.8c29.7 0 53.4-24.499 53.4-54.299v-101.9c0-29-24.4-50.7-53.4-55.6-17.9-2.95-36.575-4.3508-54.787-4.3008zm-58.713 32.801c11 0 20.1 9.1984 20.1 20.398s-8.9996 20.301-20.1 20.301-20.1-9.1008-20.1-20.301c0.1-11.3 8.9996-20.398 20.1-20.398z"
    />
    {/**bottom snake */}
    <path
      fill="var(--bottomSnakeColor)"
      d="m346.3 146.3v47.398c0 36.8-31.201 67.801-66.801 67.801h-106.8c-29.2 0-53.398 25.001-53.398 54.301v101.8c0 29 25.198 46.001 53.398 54.301 33.8 9.9 66.301 11.7 106.8 0 26.9-7.8 53.4-23.501 53.4-54.301v-40.699h-106.7v-13.6h160.2c31.1 0 42.6-21.701 53.4-54.201 11.2-33.5 10.7-65.7 0-108.6-7.7-30.9-22.3-54.199-53.4-54.199h-40.1zm-60.102 257.7c11.1 0 20.102 9.1008 20.102 20.301 0 11.3-9.0016 20.398-20.102 20.398-11 0-20.1-9.1984-20.1-20.398 0.1-11.3 9.0996-20.301 20.1-20.301z"
    />
  </svg>
);
export default PythonLogo;
