import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <Link className="navbar-brand" to="/home">Home</Link>
                <Link className="navbar-brand" to="/comics">Archive</Link>
            </nav>
        </>
    )
}

export default Navbar