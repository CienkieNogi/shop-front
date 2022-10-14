import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useAppDispatch } from "../../redux/app/hooks";
import { logoutReducer } from "../Auth/authSlice";
import "./index.scss";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutReducer());
    navigate("/account/login");
  };

  const redirect = () => {
    navigate("/account/adminboard");
  };
  return (
    <div className="profile">
      <div className="profile__content">
        <h1 className="profile__content--header">My account</h1>
        <h3 className="profile__content--details">Username</h3>
        <h3 className="profile__content--details">Email</h3>
        <h3 className="profile__content--details">Role</h3>
        <div className="profile__content--admin">
          <Button
            actionOnClick={redirect}
            color="secondary"
            title="Manage Shop"
          />
        </div>
        <div className="profile__btn">
          <Button actionOnClick={handleLogout} title="Logout" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
