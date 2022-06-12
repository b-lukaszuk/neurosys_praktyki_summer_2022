import React from 'react';

import "./Video.css";

const Video = (props) => {

    const title = props.title;
    const url = props.url;

    return (
        <div className="Video">
            <iframe src={url} title={title}> </iframe>
        </div>
    );
}

export default Video;