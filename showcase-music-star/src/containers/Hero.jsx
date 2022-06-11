import React from "react";

import "./Hero.css";

const Hero = (props) => {
    return (
        <div className="Hero">
            <h1>{props.artistName}</h1>
            <ul>
                <li>Home</li>
                <li>News</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Hero;
