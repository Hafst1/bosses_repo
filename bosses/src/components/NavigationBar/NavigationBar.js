import React from 'react';
import NavLinks from '../NavLinks/NavLinks';

class NavigationBar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <NavLinks />
            </nav>
        );
    };
};

export default NavigationBar;