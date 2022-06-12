import React, { useState } from 'react';

import Button from "../../components/Button";
import ContactForm from "./ContactForm";

import "./ContactPage.css";

const ContactPage = () => {

    const [displContactForm, setDisplContactForm] = useState(false);

    return (
        <div className="ContactPage">
            <h1>Kontakt</h1>
            <p>Na codzień mieszkam i pracuję w Wielkiej Brytanii.</p>
            <p>Jakkolwiek, jeśli masz dla mnie ciekawą ofertę to jestem dostępny niemal wszędzie.</p>
            <p>&nbsp;</p>
            <p><b>Wciśnij przycisk kontaktowy poniżej.</b></p>
            <p><b>Skontaktuj się z moim managerem i przedstaw swoją propozycję.</b></p>
            <Button onClick={() => setDisplContactForm(true)}
                displayedText={"Kontakt (Napisz do mnie)"} />
            <ContactForm isDisplayed={displContactForm}
                onClose={() => setDisplContactForm(false)} />
        </div>
    );
}

export default ContactPage;
