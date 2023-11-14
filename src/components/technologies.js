import { Component } from "react";
import HTML5Logo from "./icons/html5";
import CSS3Logo from "./icons/css3";
import JavascriptLogo from "./icons/javascript";
import JavaLogo from "./icons/java";
import ReactLogo from "./icons/reactlogo";
import PythonLogo from "./icons/python";
import CSharpLogo from "./icons/csharp";
import SASSLogo from "./icons/sass";
import TypeScriptLogo from "./icons/typescript";
import BootStrapLogo from "./icons/bootstrap";
import LuaLogo from "./icons/lua";
import NPMLogo from "./icons/npmlogo";
import VisualStudioLogo from "./icons/visualstudio";
import VSCodeLogo from "./icons/vscode";
import UnityLogo from "./icons/unity";
import GodotLogo from "./icons/godot";

class Technologies extends Component {
  render() {
    return (
      <div className="sectionBackground" id="languages">
        <h3>Some technologies Ive used to make things</h3>
        <ul className="noMarkers sideList">
          {/** */}
          <li className="svgHolder">
            <HTML5Logo />
          </li>
          <li className="svgHolder">
            <CSS3Logo />
          </li>
          <li className="svgHolder">
            <JavascriptLogo />
          </li>
          <li className="svgHolder">
            <TypeScriptLogo />
          </li>
          <li className="svgHolder">
            <ReactLogo />
          </li>
          <li className="svgHolder">
            <BootStrapLogo />
          </li>
          <li className="svgHolder">
            <SASSLogo />
          </li>
          <li className="svgHolder">
            <NPMLogo />
          </li>
          <li className="svgHolder">
            <PythonLogo classProp="pythonColors" />
          </li>
          <li className="svgHolder">
            <CSharpLogo />
          </li>
          <li className="svgHolder">
            <JavaLogo />
          </li>
          <li className="svgHolder">
            <LuaLogo />
          </li>
          <li className="svgHolder">
            <VisualStudioLogo />
          </li>
          <li className="svgHolder">
            <VSCodeLogo />
          </li>
          <li className="svgHolder">
            <UnityLogo />
          </li>
          <li className="svgHolder">
            <GodotLogo />
          </li>
        </ul>
      </div>
    );
  }
}

export default Technologies;
