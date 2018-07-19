import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    Button
} from "react-bootstrap";

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
                const student = { firstName: res.data.firstName, email: res.data.email };
                console.log(res);
                API.sendEmail(student).then(res => {
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
            <div className="container body-container">
                <h1>Enroll</h1>
                <Form onSubmit={this.handleFormSubmit}>

                    <FormGroup className="form-group" controlId="firstName">
                        <ControlLabel>First name</ControlLabel>
                        <FormControl
                            autoFocus
                            required
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup className="form-group" controlId="lastName">
                        <ControlLabel>Last name</ControlLabel>
                        <FormControl
                            required
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup className="form-group" controlId="email">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            required
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleInputChange}
                            placeholder="name@email.com"
                        />
                    </FormGroup>

                    <FormGroup className="form-group" controlId="phone">
                        <ControlLabel>Phone number</ControlLabel>
                        <FormControl
                            required
                            type="tel"
                            pattern="^\d{3}-\d{3}-\d{4}$"
                            name="phone"
                            value={phone}
                            onChange={this.handleInputChange}
                            placeholder="555-555-5555"
                        />
                    </FormGroup>

                    <FormGroup className="form-group" controlId="school">
                        <ControlLabel>Name of law school</ControlLabel>
                        <FormControl
                            required
                            type="text"
                            name="school"
                            value={school}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup className="form-group" controlId="firstExam">
                        <ControlLabel>Date of first exam</ControlLabel>
                        <FormControl
                            type="date"
                            name="firstExam"
                            value={firstExam}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup className="form-group" controlId="referralSource">
                        <ControlLabel>Referral source</ControlLabel>
                        <FormControl
                            type="text"
                            name="referralSource"
                            value={referralSource}
                            placeholder="optional"
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup className="form-group" controlId="onTLS">
                        <ControlLabel>TLS username</ControlLabel>
                        <FormControl
                            type="text"
                            name="onTLS"
                            value={onTLS}
                            placeholder="optional"
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
                </Form>
            </div>
        );
    }
}

export default Enroll;