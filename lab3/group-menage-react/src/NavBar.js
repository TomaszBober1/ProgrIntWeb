import React from "react";
import { Link } from "react-router-dom";


function NavBar(){
    return(
        <ul>
            <li><Link to="/new-group">Dodaj grupę</Link></li>
            <li><Link to="/annoucements">Dodaj ogłoszenie</Link></li>
            <li><Link to="/search-annoucements">Szukaj ogłoszeń</Link></li>
            <li><Link to="/search-groups">Szukaj grup</Link></li>
        </ul>
    );
}

export default NavBar;