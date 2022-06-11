import React from "react";

import "./Checkbox.css";

const Checkbox = (props) => {

    const name = props.name;
    const displayedText = props.displayedText;
    const checked = props.checked;
    const onClick = props.onClick;

    return (
        <div className="checkbox">
            <input type="checkbox" name={name} checked={checked}
                onChange={() => onClick()} />
            <label htmlFor={name} >{displayedText}</label>
        </div>
    )
}

export default Checkbox;