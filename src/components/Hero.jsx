import React from "react";
import "./Hero.css"

function Hero() {
    return (
        <section id="hero-section" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="hero--section--title">Hello!, I'm Carlos!</p>
                    <h1 className="hero--section--title--header">
                        <span className="hero--section--title--colored">
                            Let's Build
                        </span>{" "}
                        <br/>
                        Together!
                    </h1>
                    <p className="hero--section--description">
                        Passionate about technology from various disciplines under the Computer Science umbrella!  
                        Including Software Engineering, Data Science, Data Analytics, AI, ML, Devops, Mobile 
                        and so much more, our skills are meant to be expansive into multiple domains!
                    </p>
                </div>
                <button className="hero--section--button button--primary">
                    <a 
                        className="hero--section--button-atag"
                        href="https://www.linkedin.com/in/carlos-valdez-cv/"
                        target="_blank"
                        rel="noopener norefferrer">
                        Let's Talk!
                    </a>
                </button>
            </div>
            <div className="hero--section--img">
                <img src={"./src/assets/profile-image-no-bg.png"} alt="My Profile Image"/>
            </div>
        </section>

    )
}

export default Hero;
