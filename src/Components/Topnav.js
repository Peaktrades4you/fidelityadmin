import React from "react";
import "../Styles/Topnav.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function Topnav() {
  return (
    <>
      <div className="topnav">
        <div>
          <h1>Chima</h1>
        </div>
        <div>
          <AccountCircleIcon sx={{ fontSize: 40, color: "#ff6f3c" }} />
        </div>
      </div>
    </>
  );
}
