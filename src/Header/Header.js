import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className = 'header'>
            <h1 className = 'header_title'>Book Search App</h1>
            <h2 className = 'header_subtitle'> Find Books on Google</h2>
        </header>
    );
}

export default Header;