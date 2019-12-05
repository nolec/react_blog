import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const RegisterPresenter = ({
  lastname,
  name,
  email,
  password,
  passwordConfirmation,
  errors,
  handleChange,
  displayErrors,
  submitForm
}) => {
  return (
    <Container className="container">
      <h2>Sign Up</h2>
      <div className="row">
        <form className="col s12" onSubmit={event => submitForm(event)}>
          <div className="row">
            <div className="input-field col s12">
              <div>
                <input
                  name="lastname"
                  value={lastname}
                  onChange={event => handleChange(event)}
                  id="lastname"
                  type="text"
                  className="validate"
                />
                <label className="action" htmlFor="lastname">
                  Lastname
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <div>
                <input
                  name="name"
                  value={name}
                  onChange={event => handleChange(event)}
                  id="name"
                  type="text"
                  className="validate"
                />
                <label className="action" htmlFor="name">
                  Name
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <div>
                <input
                  name="email"
                  value={email}
                  onChange={event => handleChange(event)}
                  id="email"
                  type="email"
                  className="validate"
                />
                <label className="action" htmlFor="email">
                  Email
                </label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <div>
                <input
                  name="password"
                  value={password}
                  onChange={event => handleChange(event)}
                  id="password"
                  type="password"
                  className="validate"
                />
                <label className="action" htmlFor="name">
                  Password
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <div>
                <input
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={event => handleChange(event)}
                  id="passwordConfirmation"
                  type="password"
                  className="validate"
                />
                <label className="action" htmlFor="passwordConfirmation">
                  PasswordConfirmation
                </label>
              </div>
            </div>
          </div>
          {console.log(errors)}
          <div>{errors.length > 0 && displayErrors(errors)}</div>
          <div className="row">
            <div className="col 6">
              <button
                className="btn waves-effect red lighten-2"
                type="submit"
                name="action"
                onClick={event => submitForm(event)}
              >
                Create an account
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default RegisterPresenter;
