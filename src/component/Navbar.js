import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    {props.title}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                {props.secondLi}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">
                                {props.thirdLi}
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                    <button className="badge text-bg-danger mx-2" onClick={props.redTheme}>Red Theme</button>
                    <button className="badge text-bg-secondary mx-2" onClick={props.toggleMode}>Grey Theme</button>
                    <button className="badge text-bg-success mx-2" onClick={props.greenTheme}>Green Theme</button>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input mx-2" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                            {`Enable ${props.mode === 'light' ? 'Dark' : 'Light'} Mode`}
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
    secondLi: PropTypes.string,
    thirdLi: PropTypes.string
}

// Navbar.defaultProps = {
//     title: "Title should be here",
//     secondLi: "Second page name should be here",
//     thirdLi: "Third page name should be here"
// }