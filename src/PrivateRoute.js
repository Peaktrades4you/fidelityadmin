import React from "react";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
  const { auth } = useSelector(({ Auth }) => Auth);
  console.log(auth);
  return auth ? children : <Navigate to="/signin" />;
}
