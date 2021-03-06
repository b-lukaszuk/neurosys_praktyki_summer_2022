import React from "react";

import "./TextInput.css";

const InputElt = (props) => {

    const changeHandlerIn = props.changeHandlerIn;
    const labelIn = props.labelIn;
    const nameIn = props.nameIn;
    const patternIn = props.patternIn ? props.patternIn : ".*";
    const placeholderIn = props.placeholderIn ? props.placeholderIn : "";
    const typeIn = props.typeIn ? props.typeIn : "text"
    const valueIn = props.valueIn;

    return (
        <div className="textInput">
            <span className="label">{labelIn}: &nbsp;</span>
            <input
                name={nameIn}
                type={typeIn}
                pattern={patternIn}
                placeholder={placeholderIn}
                value={valueIn}
                maxLength={30}
                size={30}
                onChange={changeHandlerIn}
            />
        </div>
    );
};

export default InputElt;
