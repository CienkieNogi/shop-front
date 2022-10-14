import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/ui/Navigation";
import ProtectedRoute from "./components/utilities/ProtectedRoute";
import { Login, Main, Profile, Register } from "./pages";
import AdminBoard from "./pages/AdminBoard";
import { loginReducer } from "./pages/Auth/authSlice";
import { useAppDispatch } from "./redux/app/hooks";

function App() {
  const ttl = localStorage.getItem("ttl");

  const isAllowed = ttl ? true : false;
  const dateNow = new Date(Date.now()).toISOString();

  const dispatch = useAppDispatch();

  useEffect(() => {
    //If there is ttl item in storage, we verify if it is expired
    if (ttl) {
      dispatch(loginReducer());
      const tokenExpDate = JSON.parse(ttl);
      if (dateNow > tokenExpDate) {
        //token is expired
        localStorage.clear()
      }
    }
    //TODO if localStorage is empty, check if backend response has valid token
  }, [ttl, dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/register" element={<Register />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                redirectPath="/account/login"
                isAllowed={isAllowed}
              >
                <Profile />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/account/adminboard"
            element={
              <ProtectedRoute
                redirectPath="/profile"
                //TODO: check if user has admin role
                isAllowed={isAllowed}
              >
                <AdminBoard />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
