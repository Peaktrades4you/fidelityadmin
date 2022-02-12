import React from "react";
import "./App.css";
import { Route, Router, Routes, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Users from "./Routes/Users";
import Wallet from "./Routes/Wallet";
import SignIn from "./Routes/Auth/Signin";
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import investors from "./Routes/Investors";
import Investors from "./Routes/Investors";
import Profile from "./Routes/Profile";
import ChangePassword from "./Routes/ChangePassword";
function App() {
  const { auth } = useSelector(({ Auth }) => Auth);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route
            path="/wallet/:id"
            element={
              <PrivateRoute>
                <Wallet />
              </PrivateRoute>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/admin/users"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/investors"
            element={
              <PrivateRoute>
                <Investors />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin/changepassword"
            element={
              <PrivateRoute>
                <ChangePassword />
              </PrivateRoute>
            }
          />
          {/* <Route path="/dashboard" element={<h1>Dashboard</h1>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
