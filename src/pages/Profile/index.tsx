import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { useLogoutMutation } from "../../redux/features/Auth/authApi";
import { logoutReducer, selectLoggedCredentials } from "../Auth/authSlice";
import "./index.scss";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {username,role} = useAppSelector(selectLoggedCredentials);
  const [logout]=useLogoutMutation()

  const isAdmin = localStorage.getItem('_role')?.replace(/"/g,'')

  const handleLogout = async() => {
    await logout()
    dispatch(logoutReducer());
    navigate("/account/login");
    window.location.reload()
  };

  const redirect = () => {
    navigate("/account/adminboard");
  };
  return (
    <div className="profile">
      <div className="profile__content">
        <h1 className="profile__content--header">My account</h1>
        <h3 className="profile__content--details">Username</h3>
        <p>{username}</p>
        <h3 className="profile__content--details">Role</h3>
        <p>{role}</p>
        {isAdmin === "ADMIN" && (

        <div className="profile__content--admin">
          <Button
            actionOnClick={redirect}
            color="secondary"
            title="Manage Shop"
          />
        </div>
        )}
        <div className="profile__btn">
          <Button actionOnClick={handleLogout} title="Logout" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
