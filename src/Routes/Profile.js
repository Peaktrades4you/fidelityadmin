import React from "react";
import MySideNav from "../Components/Sidenav";
import Topnav from "../Components/Topnav";

export default function Profile() {
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
            {/* <div className="prof-kyc">
              <b>Kyc verification</b>
              <p>
                Upload an identity document, for example, driver license, voters
                card, international passport, national ID
              </p>
              <div className="verification-status">Unverified</div>

              <div>
                <label for="file-upload" class="custom-file-upload">
                  Select document
                </label>
                <input type="file" id="file-upload" name="document"></input>
              </div>
              <div className="prof-kyc-button">
                <button type="submit">Upload</button>
              </div>
            </div> */}
            <div className="prof-photo">
              <b>Change account photo</b>

              <div>
                <label for="file-upload" class="custom-file-upload">
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
