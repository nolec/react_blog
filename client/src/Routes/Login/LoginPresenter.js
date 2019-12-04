import React from "react";
import styled from "styled-components";

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
                <label htmlFor="email">Email</label>
                <span
                  className="helper-text"
                  data-error="Type a right type email"
                  data-success="right"
                />
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
                <label htmlFor="password">Password</label>
                <span
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                />
              </div>
            </div>
          </div>
          {console.log(errors)}
          <div>{errors.length > 0 && displayErrors(errors)}</div>
          <div className="row">
            <div className="col 12">
              <button
                className="btn waves-effect red lighten-2"
                type="submit"
                name="action"
                onClick={submitForm}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default LoginPresenter;
