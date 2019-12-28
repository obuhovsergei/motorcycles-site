import React, {useContext, useEffect} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from "../context/AuthContext";

export const  Navbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext)
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    //Use navigation for mobile
    useEffect(() => {
        const elem = document.querySelector(".sidenav");
        window.M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }, [])


    return (
        <div>
            <nav>
                <div className="nav-wrapper blue-grey darken-1">
                    <a href="/" className="brand-logo">Logo</a>
                    <a href="!#" data-target="mobile-demo" className="sidenav-trigger">
                        <i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink to="/create">Create</NavLink></li>
                        <li><NavLink to="/links">Links</NavLink></li>
                        <li><a href="/" onClick={logoutHandler}>Logout</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><NavLink to="/create">Create</NavLink></li>
                <li><NavLink to="/links">Links</NavLink></li>
                <li><a href="/" onClick={logoutHandler}>Logout</a></li>
            </ul>
        </div>
    )
}