import React, { useState } from 'react';

import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import TextInput from "../components/TextInput";

import "./ContactForm.css";

const ContactForm = () => {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [msg, setMsg] = useState("");
    const [isRobot, setIsRobot] = useState(true);

    const toggleIsRobot = () => {
        setIsRobot((prev) => !prev);
    }

    const sendForm = () => {
        if (isRobot) {
            window.alert("Zaznacz pole 'Nie jestem Robotem'");
        } else {
            console.log(msg);
            window.alert("Formularz wysłany");
        }
    }

    return (
        <div className="ContactForm">
            {/* simple regexes written by me, not 100% effective */}
            {/* normally I would just downloaded proper, spacious ones from the internet*/}
            <TextInput nameIn={"name"}
                changeHandlerIn={(e) => setName(e.target.value)}
                labelIn={"Imię i nazwisko"}
                patternIn={"^[A-Z][a-z]{1,} [A-Z][a-z]{1,}$"}
                placeholderIn={"Jan Kowalski"}
                valueIn={name}
            />
            <TextInput nameIn={"mail"}
                changeHandlerIn={(e) => setMail(e.target.value)}
                labelIn={"E-mail"}
                patternIn={"^[a-z.]{1,}@([a-z]{1,}\\.)[a-z]{2,4}$"}
                placeholderIn={"jan.kowalski@wp.pl"}
                valueIn={mail}
            />
            <TextInput nameIn={"phone"}
                changeHandlerIn={(e) => setPhone(e.target.value)}
                labelIn={"Nr telefonu"}
                patternIn={"^[0-9]{6,9}$"}
                placeholderIn={"555323488"}
                valueIn={phone}
            />
            <label htmlFor="msg">Twoja wiadomość:&nbsp;</label>
            <textarea name="msg" id="msg"
                cols="30" rows="10"
                placeholder="wpisz swoją wiadomość"
                onChange={(e) => setMsg(e.target.value)}
            />

            <Checkbox name="robotCheck"
                displayedText="Nie jestem robotem"
                checked={!isRobot}
                onClick={toggleIsRobot}
            />
            <Button displayedText="Wyślij formularz"
                onClick={sendForm} />
        </div>
    );
}

export default ContactForm;
