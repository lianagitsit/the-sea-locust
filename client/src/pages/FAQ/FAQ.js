import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import questions from "../../lib/FAQ-data";


class FAQ extends Component {
    renderQuestions = () => {
        const questionsList = questions.map((question, index) => (
            <Panel key={index}>
                <Panel.Heading>
                    <Panel.Title toggle>
                        {question.ask}
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                    <Panel.Body>
                        {question.answer}
                    </Panel.Body>
                </Panel.Collapse>
            </Panel>
        )
    );
        return questionsList;
    }

    render() {

        return (
            <div className="container">
                <h1>FAQ</h1>
                {this.renderQuestions()}
            </div>
        )
    }

};

export default FAQ;