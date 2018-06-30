import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API"

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
            this.setState({submitted: true});
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

        if (submitted){
            return <Redirect to="/enroll-success" />
        }

        return (
            <div className="container">
                <h1>Enroll</h1>
                <form>
                    <Input
                        value={firstName}
                        onChange={this.handleInputChange}
                        name="firstName"
                        placeholder="First name (required)"
                    />
                    <Input
                        value={lastName}
                        onChange={this.handleInputChange}
                        name="lastName"
                        placeholder="Last name (required)"
                    />
                    <Input
                        value={email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Email address (required)"
                    />
                    <Input
                        value={phone}
                        onChange={this.handleInputChange}
                        name="phone"
                        placeholder="Cell phone (required)"
                    />
                    <Input
                        value={school}
                        onChange={this.handleInputChange}
                        name="school"
                        placeholder="Law school (required)"
                    />
                    <Input
                        value={firstExam}
                        onChange={this.handleInputChange}
                        name="firstExam"
                        placeholder="First exam (MM/DD/YYY)"
                    />
                    <Input
                        value={referralSource}
                        onChange={this.handleInputChange}
                        name="referralSource"
                        placeholder="Referral source (optional)"
                    />
                    <Input
                        value={onTLS}
                        onChange={this.handleInputChange}
                        name="onTLS"
                        placeholder="TLS username (optional)"
                    />   
                    <FormBtn
                        disabled={!requiredInfo}
                        onClick={this.handleFormSubmit}
                    >
                        Enroll
                    </FormBtn>             
                </form>
            </div>
        );
    }
}

export default Enroll;