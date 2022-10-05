import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/ui/Navigation";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Routes>

        <Route path="/" element={<Main/>} /> 
        <Route path="/account/login" element={<Login/>} /> 
        <Route path="/account/register" element={<Register/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
