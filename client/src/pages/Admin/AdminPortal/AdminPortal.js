import React, { Component } from "react";
import API from "../../../utils/API.js"
import Student from "../../../lib/Student";

class AdminPortal extends Component {
    state = {students: []};
    componentDidMount = () => {
        this.loadStudents();
    }

    loadStudents = () => {
        API.getStudents().then(res => {
            // console.log(res);
            const rows = res.data.map( (student, index) => (
                <Student 
                    firstName={student.firstName}
                    lastName={student.lastName}
                    email={student.email}
                    key={index}
                />
            ))
            this.setState({students: rows});
        })
        .catch(err => console.log(err));
    }

    sendEmail = () => {
        const email = {email: "coelomate@gmail.com"};
        API.sendEmail(email).then(res => {
            console.log("BACK FROM SENDING EMAIL")
            console.log(res);
        })
        .catch(err => console.log(err));
    }

    render() {
        const { isAuthenticated, handleLogout } = this.props;
        return (
            isAuthenticated ?
            <div className="container">
                Students
                <table>
                    <tbody>
                        {this.state.students}
                    </tbody>
                </table>
                <button onClick={handleLogout}>Logout</button>
                <button onClick={this.sendEmail}>Send email</button>
            </div> :
            <div>You must be logged in to view this page!</div>
        );
    }
}

export default AdminPortal;