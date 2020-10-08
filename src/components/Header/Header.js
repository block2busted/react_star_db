import React, { Component } from "react";
import { Link } from "react-router-dom";


import './Header.css'

export default class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-sm">
                <Link to="/" className="navbar-brand">StarWarsAPI</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/people/" className="nav-link">People</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/planets/" className="nav-link">Planets</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/starships/" className="nav-link">Starships</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/secret" className="nav-link">SecretPage</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}