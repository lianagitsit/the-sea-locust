import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
    HelpBlock,
    FormGroup,
    FormControl,
    ControlLabel,
    Button
} from "react-bootstrap";
import { Auth } from "aws-amplify";

class AdminLogin extends Component {
    state = {
        username: "",
        password: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = async event => {
        event.preventDefault();

        const {
            username,
            password
        } = this.state;

        try {
            await Auth.signIn(username, password);
            this.props.userHasAuthenticated(true);
        } catch (e) {
            alert(e.message);
        }
    };

    render() {
        const { username, password } = this.state;

        const { isAuthenticated } = this.props;

        const requiredInfo = (username && password);

        if (isAuthenticated) {
            return <Redirect to="/admin-portal" />
        }

        return (
            <div className="container">
                <h1>Login to Admin Portal</h1>
                <form onSubmit={this.handleFormSubmit}>

                    <FormGroup controlId="username">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            name="password"
                            value={password}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>
                    <Button
                        disabled={!requiredInfo}
                        bsStyle="primary"
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

    export default AdminLogin;