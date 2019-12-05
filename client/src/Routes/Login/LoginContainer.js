import React, { Component } from "react";
import LoginPresenter from "./LoginPresenter";
import { connect } from "react-redux";
import { loginUser } from "../../actions/user_actions";

class LoginContainer extends Component {
  state = {
    email: "",
    password: "",
    errors: []
  };
  displayErrors = errors => {
    console.log(errors);
    return errors.map((error, i) => <p key={i}>{error}</p>);
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitForm = event => {
    event.preventDefault();
    let dataToSubmit = {
      email: this.state.email,
      password: this.state.password
    };

    if (this.isFormValid(this.state)) {
      this.setState({ errors: [] });
      this.props.dispatch(loginUser(dataToSubmit)).then(response => {
        if (response.payload.loginSuccess) {
          this.props.history.push("/");
        } else {
          this.setState({
            errors: this.state.errors.concat(
              "Failed to log in, tou can check ur email or password"
            )
          });
        }
      });
    } else {
      this.setState({ errors: this.state.errors.concat("Form is not valid") });
    }
  };

  isFormValid = ({ email, password }) => email && password;

  render() {
    const { email, password, errors } = this.state;
    return (
      <LoginPresenter
        email={email}
        password={password}
        errors={errors}
        submitForm={this.submitForm}
        handleChange={this.handleChange}
        displayErrors={this.displayErrors}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(LoginContainer);
