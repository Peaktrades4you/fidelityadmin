import React from "react";
import MySideNav from "../Components/Sidenav";
import Topnav from "../Components/Topnav";

export default function ChangePassword() {
  return (
    <>
      <MySideNav />
      <Topnav />
      <div className="t-container">
        <div className="change-card">
          <div className="change-form">
            <form>
              <div className="change-topic">
                <b>Change Your Password</b>
              </div>
              <div className="change-input1">
                <input
                  required
                  type="password"
                  name="oldPassword"
                  placeholder="Enter Your Current Password"
                ></input>
              </div>
              <div className="change-input2">
                <input
                  required
                  type="password"
                  placeholder="Enter New Password"
                  name="newPassword"
                ></input>
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
