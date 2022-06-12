import React from "react";

import "./Button.css";

function Button(props) {

    const displayedText = props.displayedText;
    const onClick = props.onClick;

    return (
        <button className="button"
            onClick={onClick}>
            {displayedText}
        </button>
    );
}

export default Button;