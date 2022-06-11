import React from 'react';

import "./Video.css";

const Video = (props) => {
    const url = props.url;
    const title = props.title;
    return (
        <div className="Video">
            <iframe src={url} title={title}> </iframe>
        </div>
    );
}

export default Video;