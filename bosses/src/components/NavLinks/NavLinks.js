import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <ul className="navlinks">
            <li>
                <NavLink exact to="/">HOME</NavLink>
            </li>
            <li>
                <NavLink to="/bosses">BOSSES</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;