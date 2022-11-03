import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/ui/Navigation";
import ProtectedRoute from "./components/utilities/ProtectedRoute";
import { Login, Main, Profile, Register,AdminBoard,EditCategory } from "./pages";
import Product from "./pages/AdminBoard/ProductBoard/Product";
import { loginReducer } from "./pages/Auth/authSlice";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import ProductPage from "./pages/Shop/ProductPage";
import { useAppDispatch } from "./redux/app/hooks";

function App() {
  const ttl = localStorage.getItem("ttl");
  const role = localStorage.getItem("_role")?.replace(/"/g, "");

  const isAllowed = ttl ? true : false;
  const isAdminAllowed = ttl && role==="ADMIN"? true : false;
  console.log(isAllowed);
  const dateNow = new Date(Date.now()).toISOString();

  const dispatch = useAppDispatch();

  useEffect(() => {
    //If there is ttl item in storage, we verify if it is expired
    if (ttl) {
      dispatch(loginReducer(role));
      const tokenExpDate = JSON.parse(ttl);
      if (dateNow > tokenExpDate) {
        //token is expired
        localStorage.clear();
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
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/product/:id' element={<ProductPage/>} />
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
            path="/cart"
            element={
              <ProtectedRoute
                redirectPath="/account/login"
                isAllowed={isAllowed}
              >
                <Cart />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/account/adminboard"
            element={
              <ProtectedRoute
                redirectPath="/profile"
                isAllowed={isAdminAllowed}
              >
                <AdminBoard />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/account/adminboard/category/:categoryId"
            element={
              <ProtectedRoute
                redirectPath="/profile"
                isAllowed={isAdminAllowed}
              >
                <EditCategory />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/account/adminboard/product/:productId"
            element={
              <ProtectedRoute
                redirectPath="/profile"
                isAllowed={isAdminAllowed}
              >
                <Product />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
