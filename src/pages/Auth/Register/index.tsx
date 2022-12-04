import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import {
    useCreateUserMutation, useGetAllUsersQuery
} from "../../../redux/features/Auth/authApi";
import { RegisterUserInput } from "../../../types";
import Spinner from "../../../utils/Spinner";
import "../index.scss";

const Register = () => {
    const [createUser, { isError, error }] = useCreateUserMutation();
    const { isFetching } = useGetAllUsersQuery();
    const navigate = useNavigate();
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [passwordErr, setPasswordErr] = useState(false);

    const handleInput = (e: any) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const submit = (e: any) => {
        e.preventDefault();
        handleRegister({
            username: input.username,
            email: input.email,
            password: input.password,
            confirmPassword: input.confirmPassword,
        });
    };

    const handleRegister = async (registerInput: RegisterUserInput) => {
        if (registerInput.password !== registerInput.confirmPassword) {
            setErrorMsg("Passwords do not match");
            setPasswordErr(true);
            return;
        }
        await createUser({
            username: registerInput.username,
            email: registerInput.email,
            password: registerInput.password,
        });
        navigate("/account/login");
    };
    useEffect(() => {
        if (error && "status" in error) {
            //@ts-ignore
            setErrorMsg(error.data.error);
        }
    }, [error]);

    return (
        <div className="auth --center-flex">
            {isFetching && <Spinner />}
            <form className="auth__container" onSubmit={submit}>
                <div className="auth__section">
                    <h1 className="auth__header">Create Account</h1>
                </div>
                <div className="--underline --margin-bottom-2"></div>
                {(passwordErr || isError) && (
                    <div className="auth__section">
                        <div className="auth__section--error">
                            <p>{errorMsg}</p>
                        </div>
                    </div>
                )}
                <div className="auth__section">
                    <label className="auth__section--label">Username</label>
                    <input
                        onChange={handleInput}
                        name="username"
                        type="text"
                        className="auth__section--input"
                        autoComplete="off"
                    />
                </div>
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
                <div className="auth__section ">
                    <label className="auth__section--label">Password</label>
                    <input
                        onChange={handleInput}
                        name="password"
                        type="password"
                        className="auth__section--input"
                    />
                </div>
                <div className="auth__section --margin-bottom-4">
                    <label className="auth__section--label">Confirm Password</label>
                    <input
                        onChange={handleInput}
                        name="confirmPassword"
                        type="password"
                        className="auth__section--input"
                    />
                </div>
                <div className="auth__section">
                    <Button title="Sign in" />
                </div>
                <div className="auth__section">
                    <Link to={"/account/login"} className="auth__section--paragraph">
                        Login
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
