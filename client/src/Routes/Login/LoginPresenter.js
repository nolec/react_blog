import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const LoginPresenter = ({
  email,
  password,
  errors,
  submitForm,
  handleChange,
  displayErrors
}) => {
  return (
    <Container className="container">
      <h2>Login</h2>
      <div className="row">
        <form className="col s12" onSubmit={event => submitForm(event)}>
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
                <label className="action" htmlFor="password">
                  Password
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
                Login
              </button>
            </div>
            <div className="col 6">
              <Link to="/register">
                <button
                  className="btn waves-effect red lighten-2"
                  type="submit"
                  name="action"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default LoginPresenter;
