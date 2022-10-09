import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { useLoginUserMutation } from "../../../redux/features/Auth/authApi";
import { LoginUserInput } from "../../../types";
import Spinner from "../../../utils/Spinner";
import "../index.scss";

const Login = () => {
  const [loginUser, { data, isLoading }] = useLoginUserMutation();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submit = (e: any) => {
    e.preventDefault();
    handleLogin({
      email: input.email,
      password: input.password,
    });
  };
  const handleLogin = async (loginUserInput: LoginUserInput) => {
    await loginUser({ email: input.email, password: input.password });
  };
  return (
    <div className="auth --center-flex">
      {isLoading && <Spinner />}
      <form className="auth__container" onSubmit={submit}>
        <h1 className="auth__header">Login</h1>
        <div className="auth__section">
          <label className="auth__section--label">Email</label>
          <input
            onChange={handleInput}
            name="email"
            type="text"
            className="auth__section--input"
          />
        </div>
        <div className="auth__section --margin-bottom-4">
          <label className="auth__section--label">Password</label>
          <input
            onChange={handleInput}
            name="password"
            type="password"
            className="auth__section--input"
          />
        </div>
        <div className="auth__section">
          <Button title="Sign in" />
        </div>
        <div className="auth__section">
          <Link to={"/account/register"} className="auth__section--paragraph">
            Create Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
