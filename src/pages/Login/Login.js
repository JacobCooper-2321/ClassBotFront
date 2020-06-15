import React, {Component} from 'react';
import './Login.css';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Login extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {}

    }

    handleSubmit(e) {
        cookies.set("email", e.target.email)
        cookies.set("email", e.target.password)
        this.props.history.push("/")



    }


    render() {
        return (
            <div className="Container">
                <input type="email" placeholder="email" name="email"/>
                <br/>
                <input type="password" placeholder="password" name="password"/>
                <br/>
                <button type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
        );
    }
}

export default Login;
