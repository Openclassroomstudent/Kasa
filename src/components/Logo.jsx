import React from 'react';
import { Link } from "react-router-dom";
import logoKasa from "../assets/LOGOKASA.svg";

const Logo = () => {
    return (
            <Link to={'/'} className="logo-container">
                <img className="logo-img" src={logoKasa} alt="logo kasa" />
            </Link>
    );
};

export default Logo;