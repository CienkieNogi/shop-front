import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import "../index.scss"

const Login = () => {
  return (
    <div className="auth --center-flex">
      <form className="auth__container" onClick={(e)=>e.preventDefault()}>
        <h1 className="auth__header">Login</h1>
        <div className="auth__section">
          <label className="auth__section--label">Email</label>
          <input type="text" className="auth__section--input" />
        </div>
        <div className="auth__section --margin-bottom-4">
          <label className="auth__section--label">Password</label>
          <input type="password" className="auth__section--input" />
        </div>
        <div className="auth__section">
        <Button title='Sign in'/>
        </div>
        <div className="auth__section">
          <Link to={'/account/register'} className="auth__section--paragraph">Create Account</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
