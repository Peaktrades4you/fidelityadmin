import React from "react";
import "./App.css";
import { Route, Router, Routes, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Users from "./Routes/Users";
import Wallet from "./Routes/Wallet";
import SignIn from "./Routes/Auth/Signin";
import { useSelector } from "react-redux";
function App() {
  const { auth } = useSelector(({ Auth }) => Auth);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="/dashboard" element={<Users />} /> */}
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
