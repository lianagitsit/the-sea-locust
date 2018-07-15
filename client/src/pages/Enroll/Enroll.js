import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
    HelpBlock,
    FormGroup,
    FormControl,
    ControlLabel,
    Button
} from "react-bootstrap";

import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API.js"

import "./Enroll.css";

class Enroll extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        school: "",
        firstExam: "",
        referralSource: "",
        onTLS: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        const {
            firstName,
            lastName,
            email,
            phone,
            school,
            firstExam,
            referralSource,
            onTLS
        } = this.state;

        API.saveStudent({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            school: school,
            firstExam: firstExam,
            referralSource: referralSource,
            onTLS: onTLS
        })
            .then(res => {
                const email = { email: res.data.email };
                console.log(res);
                API.sendEmail(email).then(res => {
                    console.log("BACK FROM SENDING EMAIL")
                    console.log(res);
                })
                    .catch(err => console.log(err));

                this.setState({ submitted: true });
            })
            .catch(err => console.log(err));
    };

    render() {
        const {
            firstName,
            lastName,
            email,
            phone,
            school,
            firstExam,
            referralSource,
            onTLS,
            submitted
        } = this.state;

        const requiredInfo = (firstName && lastName && email && phone && school);

        if (submitted) {
            return <Redirect to="/enroll-success" />
        }

        return (
            <div className="container">
                <h1>Enroll</h1>
                <form onSubmit={this.handleFormSubmit}>

                    <FormGroup controlId="firstName">
                        <ControlLabel>First name</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup controlId="lastName">
                        <ControlLabel>Last name</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup controlId="email">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup controlId="phone">
                        <ControlLabel>Phone number</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup controlId="school">
                        <ControlLabel>Name of law school</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            name="school"
                            value={school}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup controlId="firstExam">
                        <ControlLabel>Date of first exam</ControlLabel>
                        <FormControl
                            autoFocus
                            type="date"
                            name="firstExam"
                            value={firstExam}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup controlId="referralSource">
                        <ControlLabel>Referral source</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            name="referralSource"
                            value={referralSource}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup controlId="onTLS">
                        <ControlLabel>TLS username</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            name="onTLS"
                            value={onTLS}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <Button
                        disabled={!requiredInfo}
                        type="submit"
                        bsStyle="success"
                    >
                        Enroll
                    </Button>
                </form>
            </div>
        );
    }
}

export default Enroll;