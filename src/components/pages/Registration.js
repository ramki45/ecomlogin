import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";

class RegistrationPage extends React.Component {
  submit = (data) => {
    this.props.login(data).then(() => this.props.history.push("/"));
  };

  render() {
    return (
      <div>
        <h1>Registration Page</h1>

        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

RegistrationPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(RegistrationPage);
