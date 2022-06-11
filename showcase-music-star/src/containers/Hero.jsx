import React from "react";

import "./Hero.css";

const getUl = (routes) => {
    return (
        <ul>
            {routes.map((r) => {
                return (
                    <li key={r.id}>
                        <a href={r.path}> {r.name} </a>
                    </li>
                );
            })}
        </ul>
    );
}

const Hero = (props) => {
    const artistName = props.artistName;
    const validRoutes = props.validRoutes;

    return (
        <div className="Hero">
            <h1>{artistName}</h1>
            {getUl(validRoutes)}
        </div>
    )
}

export default Hero;
