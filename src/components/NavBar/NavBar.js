import React, {Component} from 'react';
import {Dropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './nav.css';
import Cookies from 'universal-cookie';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.cookies = new Cookies();

        this.state = {
            email: this.cookies.get("email")
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark mb-3 ">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <Link className="navbar-brand" to="/about">About</Link>
                    <img src="/logo50.png" alt="ClassBot" className="navbar-item"/>
                    <Link className="navbar-brand" to="/account">My Account</Link>
                    <Dropdown>
                        <Dropdown.Toggle variant="Secondary" id="dropdown-menu" className="navbar-brand">
                            {this.state.email}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item><Link to="/account" className="dropdown-item">My
                                Account</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </nav>
            </div>
        )
    }
}

export default NavBar;
