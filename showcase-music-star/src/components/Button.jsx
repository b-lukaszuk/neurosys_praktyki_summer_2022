import React from "react";

import "./Button.css";

function Button(props) {
    const onClick = props.onClick;
    const displayedText = props.displayedText;

    return (
        <button className="button"
            onClick={onClick}>
            {displayedText}
        </button>
    );
}

export default Button;