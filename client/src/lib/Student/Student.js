import React, { Component } from "react";

class StudentsRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.firstName}</td>
                <td>{this.props.lastName}</td>
                <td>{this.props.email}</td>
            </tr>
        );
    }
}

export default StudentsRow;