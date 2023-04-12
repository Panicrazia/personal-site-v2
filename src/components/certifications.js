import React from 'react';
import responsiveWebDesignCertificate from "../images/certifications/responsiveWebDesignCertificate.png";
import javascriptCertificate from "../images/certifications/javascriptCertificate.png";
import frontEndCertificate from "../images/certifications/frontEndCertificate.png";

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
  gap: '1rem',
};

//responsiveGrid
const Certifications = () => {
  return (
    <div id="certifications">
        <h3>Here are some certifications I have, and ones I am gunning for in the future</h3>
        <div className="noMarkers " style={gridStyles}>
            <a class="certificate" href="https://www.freecodecamp.org/certification/Mackenzie-May/responsive-web-design">
                <p class="certificateHeader">Responsive Web Design</p>
                <img src={responsiveWebDesignCertificate} alt="responsiveCert" width="100%" display="block"/>
                <div class="certificateBackground"></div>
            </a>
            <a class="certificate" href="https://www.freecodecamp.org/certification/Mackenzie-May/javascript-algorithms-and-data-structures">
                <p class="certificateHeader">Javascript and data structures</p>
                <img src={javascriptCertificate} alt="javascriptCert" width="100%" display="block"/>
            </a>
            <a class="certificate" href="https://www.freecodecamp.org/certification/Mackenzie-May/front-end-development-libraries">
                <p class="certificateHeader">Front end technologies</p>
                <img src={frontEndCertificate} alt="frontendCert" width="100%" display="block"/> 
            </a>
        </div>
    </div>
  );
};

export default Certifications;
