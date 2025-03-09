import React from "react";
import { GitHub, LinkedIn, Email, Link } from "@mui/icons-material";

const Footer = () => {
    return (
        <footer className="text-white py-6 mt-12 text-center">
            <div className="flexbox justify-center space-x-6">
                <div>
                    <h3>Designed & Created by Carlos A. Valdez</h3>
                </div>
                <div className="flex justify-center">
                    {/*LinkedIn*/}
                    <a href="https://www.linkedin.com/in/carlos-valdez-cv/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition">
                    <LinkedIn fontSize="large" className="text-white hover:text-amber-700" />
                    </a>

                    {/*GitHub*/}
                    <a href="https://github.com/valdcarl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition">
                    <GitHub fontSize="large" className="text-white hover:text-amber-700" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
