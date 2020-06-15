import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import {Link} from "react-router-dom";
class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "test"
        }
    }
    render () {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark mb-3 ">
                    <Link className="navbar-brand"to="/">Home</Link>
                    <Link className="navbar-brand" to="/about">About</Link>
                    <b className="navbar-brand">ClassBot</b>
                    <Link className="navbar-brand" to="/account">My Account</Link>
                    <Dropdown>
                            <Dropdown.Toggle variant="Secondary" id="dropdown-basic" className="navbar-brand">
                            {this.state.username}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </nav>
            </div>
        )
    }
}
export default NavBar;
