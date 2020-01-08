import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <Link className="navbar-brand" to="/home">Comics!</Link>
            </nav>
            <Link className="nav-link" to="/comics">~comics~</Link>
        </>
    )
}

export default Navbar