import React, { useState } from "react";
import MySideNav from "../Components/Sidenav";
import Topnav from "../Components/Topnav";
import { useDispatch, useSelector } from "react-redux";
import { handleChangePassword } from "../Redux/Actions/ChangePassword";
export default function ChangePassword() {
  const dispatch = useDispatch();
  const [passwordDetails, setPasswordDetails] = useState({
    current_password: "string",
    new_password: "string",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordDetails({
      ...passwordDetails,
      [name]: value,
    });
    console.log(name, value);
  };

  const passwordChange = (e) => {
    e.preventDefault();
    dispatch(handleChangePassword(passwordDetails));
  };

  return (
    <>
      <MySideNav />
      <Topnav />
      <div className="t-container">
        <div className="change-card">
          <div className="change-form">
            <form onSubmit={passwordChange}>
              <div className="change-topic">
                <b>Change Your Password</b>
              </div>
              <div className="change-input1">
                <input
                  required
                  type="password"
                  name="current_password"
                  placeholder="Enter Your Current Password"
                  onChange={handleChange}
                />
              </div>
              <div className="change-input2">
                <input
                  required
                  type="password"
                  placeholder="Enter New Password"
                  name="new_password"
                  onChange={handleChange}
                />
              </div>
              <div className="change-button">
                {" "}
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
