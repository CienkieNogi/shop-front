import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { useLoginUserMutation } from "../../../redux/features/Auth/authApi";
import { LoginUserInput } from "../../../types";
import Spinner from "../../../utils/Spinner";
import "../index.scss";

const Login = () => {
  const [loginUser, { data, isError, error, isLoading, isSuccess }] =
    useLoginUserMutation();
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem("ttl", JSON.stringify(data.ttl));
      localStorage.setItem("_id", JSON.stringify(data.id));
      localStorage.setItem("_role", JSON.stringify(data.role));
      localStorage.setItem("_username", JSON.stringify(data.username));
    //if login is succesful then redirect user to main
      window.location.href = `${
        process.env.REACT_APP_HOST_URL || "http://localhost:3000/"
      }`;
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (error && "status" in error) {
      //@ts-ignore
      setErrorMsg(error.data.error);
    }
  }, [error]);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submit = async (e: any) => {
    e.preventDefault();
    await loginUser({
      email: input.email,
      password: input.password,
    })
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="auth --center-flex">
      <form className="auth__container" onSubmit={submit}>
        <div className="auth__section">
          <h1 className="auth__header">Login</h1>
        </div>
        <div className="--underline --margin-bottom-2"></div>
        {isError && (
          <div className="auth__section">
            <div className="auth__section--error">
              <p>{errorMsg}</p>
            </div>
          </div>
        )}
        <div className="auth__section">
          <label className="auth__section--label">Email</label>
          <input
            onChange={handleInput}
            name="email"
            type="text"
            className="auth__section--input"
            autoComplete="off"
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
