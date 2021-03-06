import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Routes from "./Routes";
import { Auth } from "aws-amplify";

import Header from "./components/Header";

import "./App.css";

class App extends Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true
  };

  async componentDidMount() {
    try {
      if (await Auth.currentSession()) {
        this.userHasAuthenticated(true);
      }
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = async event => {
    await Auth.signOut();
    this.userHasAuthenticated(false);
    this.props.history.push("/");
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      handleLogout: this.handleLogout
    };

    return (
      !this.state.isAuthenticating &&
      <div>
        {!this.state.isAuthenticated && <Header />}
        <Routes childProps={childProps} />
      </div>
    )
  }
};

export default withRouter(App);
