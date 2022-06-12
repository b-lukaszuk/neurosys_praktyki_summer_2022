import React from 'react';

import VideoCarousel from "./VideoCarousel";

import "./HomePage.css";

const HomePage = () => {

    return (
        <div className="HomePage">
            <h1>Strona główna</h1>
            <p>Cześć, tu Ed Sheeran.</p>
            <p>Zapraszam do obejrzenia klipów moich ulubionych piosenek. Warto :)</p>
            <VideoCarousel />
        </div>
    );
}

export default HomePage;
