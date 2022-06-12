import React from "react";

import { Link } from "react-router-dom";

import "./Hero.css";

const getUl = (routes) => {
    return (
        <ul>
            {routes.map((r) => {
                return (
                    <li key={r.id}>
                        <Link to={r.path}>
                            {r.name}
                        </Link>
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
