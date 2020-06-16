import React, {Component} from 'react';
import './Login.css';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Login extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            email: '',
            password: '',
        }

    }

    handleEmailChange(e) {
        this.setState({email: e.target.value})
    };

    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }

    handleSubmit(e) {
        cookies.set("email", this.state.email)
        cookies.set("password", this.state.password)
        this.props.history.push("/")


    }


    render() {
        return (
            <div className="Container">
                <input type="email" placeholder="email" name="email" onChange={this.handleEmailChange.bind(this)}/>
                <br/>
                <input type="password" placeholder="password" onChange={this.handlePasswordChange.bind(this)}
                       name="password"/>
                <br/>
                <button type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>

        );
    }
}

export default Login;
