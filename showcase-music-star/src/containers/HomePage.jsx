import React from 'react';

import VideoCarousel from "./VideoCarousel";

import "./HomePage.css";

const HomePage = () => {
    return (
        <div className="HomePage">
            <h1>Strona główna</h1>
            <p>Zapraszam do obejrzenia klipów kilku moich ulubionych piosenek</p>
            <p>Warto :)</p>
            <VideoCarousel />
        </div>
    );
}

export default HomePage;
