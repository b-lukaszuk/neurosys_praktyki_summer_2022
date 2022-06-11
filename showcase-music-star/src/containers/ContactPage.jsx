import React from 'react';
import { useNavigate } from "react-router-dom";

import "./ContactPage.css";

const ContactPage = () => {
    const navigate = useNavigate();
    return (
        <div className="ContactPage">
            <p className="close" onClick={() => navigate(-1)}>&#10006;</p>
            <p>Contact Page</p>
        </div>
    );
}

export default ContactPage;
