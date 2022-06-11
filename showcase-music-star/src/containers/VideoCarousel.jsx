import React, { useState } from 'react';

import Video from "../components/Video";

import "./VideoCarousel.css";

const VideoCarousel = () => {
    const videosUrls = [
        "https://www.youtube.com/embed/2Vv-BfVoq4g",
        "https://www.youtube.com/embed/orJSJGHjBLI",
        "https://www.youtube.com/embed/nSDgHBxUbVQ",
        "https://www.youtube.com/embed/K0ibBPhiaG0",
        "https://www.youtube.com/embed/lp-EO5I60KA",
        "https://www.youtube.com/embed/JGwWNGJdvx8",
    ];
    const [displVideoId, setDisplVideoId] = useState(0);

    const changeVideo = (by) => {
        let newId = displVideoId + by;
        if (newId < 0) { newId = videosUrls.length - 1 }
        if (newId >= videosUrls.length) { newId = 0 }
        setDisplVideoId(newId);
    }

    return (
        <div className="VideoCarousel">
            <h2 onClick={() => changeVideo(-1)}>&#x25c0;</h2>
            <Video url={videosUrls[displVideoId]} title={`Video${displVideoId}`} />
            <h2 onClick={() => changeVideo(1)}>&#x25b6;</h2>
        </div>
    )
}

export default VideoCarousel;
