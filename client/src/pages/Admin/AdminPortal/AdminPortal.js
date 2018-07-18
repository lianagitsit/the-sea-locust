import React, { Component } from "react";
import API from "../../../utils/API.js"
import Student from "../../../lib/Student";
import { Table } from "react-bootstrap";

class AdminPortal extends Component {
    state = { students: [] };
    componentDidMount = () => {
        this.loadStudents();
    }

    loadStudents = () => {
        API.getStudents().then(res => {
            // console.log(res);
            const rows = res.data.map((student, index) => (
                <tr>
                    <td>{index + 1}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>{student.school}</td>
                    <td>{student.firstExam}</td>
                    <td>{student.referralSource}</td>
                    <td>{student.onTLS}</td>
                </tr>
            ));
            this.setState({ students: rows });
        })
            .catch(err => console.log(err));
    }

    sendEmail = () => {
        const email = { email: "coelomate@gmail.com" };
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
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Schoool</th>
                                <th>First exam</th>
                                <th>Referral source</th>
                                <th>TLS username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.students}
                        </tbody>
                    </Table>
                    <button onClick={handleLogout}>Logout</button>
                    <button onClick={this.sendEmail}>Send email</button>
                </div> :
                <div>You must be logged in to view this page!</div>
        );
    }
}

export default AdminPortal;