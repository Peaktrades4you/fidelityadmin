import React, { useState } from "react";
import MySideNav from "../Components/Sidenav";
import Topnav from "../Components/Topnav";
import { useDispatch, useSelector } from "react-redux";
import { handleGetProfile } from "../Redux/Actions/Profile";
import { useEffect } from "react";

export default function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    Profile();
  }, []);

  const Profile = () => {
    dispatch(handleGetProfile());
  };
  const [profileDetails, setProfileDetails] = useState({
    image: "",
    username: "",
    first_name: "",
    last_name: "",
  });

  const { data } = useSelector(({ Profile }) => Profile);
  console.log(data);
  return (
    <>
      <MySideNav />
      <Topnav />
      <div className="t-container">
        <div className="prof-body">
          <div className="prof-form">
            <div className="prof-form-head">
              <b>Update account information</b>
            </div>
            <form onSubmit="">
              <div className="pro-form-line">
                <div className="pro-text">
                  <span>Name:</span>
                </div>
                <div>
                  <input type="text" placeholder="John Doe"></input>
                </div>
              </div>

              <div className="pro-form-line">
                <div className="pro-text">
                  <span>Mobile:</span>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="+17065784563"
                    name="contact"
                  ></input>
                </div>
              </div>

              <div className="prof-form-button">
                <button type="submit">Update</button>
              </div>
            </form>
          </div>
          <div className="prof-upload">
            <div className="prof-photo">
              <b>Change account photo</b>

              <div>
                <label htmlFor="file-upload" className="custom-file-upload">
                  Select photo
                </label>
                <input
                  type="file"
                  id="file-upload"
                  name="profile-picture"
                ></input>
              </div>
              <p>Accepted formats:png,jpg</p>
              <div className="prof-photo-button">
                <button>Upload</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="push"></div>
    </>
  );
}
