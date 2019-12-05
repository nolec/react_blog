import React, { Component } from "react";
import RegisterPresenter from "./RegisterPresenter";
import { connect } from "react-redux";
import { registerUser } from "../../actions/user_actions";

class RegisterContainer extends Component {
  state = {
    lastname: "",
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    errors: []
  };
  displayErrors = errors => {
    errors.map((error, i) => {
      return <p key={i}>{error}</p>;
    });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //-------------------------------------------------------------------
  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all Fields" };
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Password is Invalid" };
    }
    this.setState({ errors: errors.concat(error) });
  };
  isFormEmpty = ({ lastname, name, email, password, passwordConfirmation }) => {
    return (
      !name.length ||
      !lastname.length ||
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };
  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };
  submitForm = event => {
    event.preventDefault();

    let dataToSubmit = {
      email: this.state.email,
      name: this.state.name,
      lastname: this.state.lastname,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation
    };
    if (!this.isFormValid()) {
      this.setState({ errors: [] });
      this.props
        .dispatch(registerUser(dataToSubmit))
        .then(response => {
          if (response.payload.success) {
            alert(response);
            this.props.history.push("/");
          } else {
            this.setState({
              errors: this.state.errors.concat(
                "your attempt to send data to DB was failed"
              )
            });
          }
        })
        .catch(err => {
          this.setState({ errors: this.state.errors.concat(err) });
        });
    } else {
      console.error("form is not valid");
    }
  };
  render() {
    return (
      <RegisterPresenter
        {...this.state}
        handleChange={this.handleChange}
        displayErrors={this.displayErrors}
        submitForm={this.submitForm}
      ></RegisterPresenter>
    );
  }
}

export default connect()(RegisterContainer);
