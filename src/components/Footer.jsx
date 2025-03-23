import React from 'react';

import "./Footer.css"

import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer () {
    return (
        <div className="footer--section">
            <div className="footer--section--description">
                © Created & Designed by Carlos A. Valdez
            </div>
            <div className="footer--section--links">
                {/*LinkedIn Link*/}
                <a
                    className="footer--section--icons"
                    href="https://www.linkedin.com/in/carlos-valdez-cv/"
                    target="_blank"
                    rel="noopener norefferrer"
                >
                    <FaLinkedin />
                </a>
                {/*GitHub Link*/}
                <a
                    className="footer--section--icons"
                    href="https://github.com/valdcarl"
                    target="_blank"
                    rel="noopener norefferrer"
                >
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}

export default Footer;
