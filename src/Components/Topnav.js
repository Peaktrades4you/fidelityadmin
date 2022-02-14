import React, { useEffect } from "react";
import "../Styles/Topnav.css";

export default function Topnav() {
  const { username, profile_image_url } = JSON.parse(
    localStorage.getItem("admin")
  );
  console.log(username);

  return (
    <>
      <div className="topnav">
        <div>
          <h1>{username}</h1>
        </div>
        <div>
          <img src={profile_image_url} alt="avi" width={50} height={50} />
          {/* <AccountCircleIcon sx={{ fontSize: 40, color: "#ff6f3c" }} /> */}
        </div>
      </div>
    </>
  );
}
