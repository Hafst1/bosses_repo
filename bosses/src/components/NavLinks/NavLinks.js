import React from 'react';
import { NavLink } from 'react-router-dom';

class NavLinks extends React.Component {
    render() {
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
};

export default NavLinks;