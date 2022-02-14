import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ComputerIcon from "@mui/icons-material/Computer";
import MoneyIcon from "@mui/icons-material/Money";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsIcon from "@mui/icons-material/Settings";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import "../Styles/Sidenav.css";
import { useNavigate } from "react-router";
export default function MySideNav() {
  const [toggled, setToggled] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setToggled(!toggled);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <div className={toggled ? " expanded sidenav " : "sidenav "}>
        <div
          onClick={handleToggle}
          onTouchMove={handleToggle}
          className="side-ham"
        >
          {toggled ? <CloseIcon /> : <MenuIcon />}
        </div>
        <div className={toggled ? " display sidenav-li " : "sidenav-li "}>
          <div className="nav-li">
            <div onClick={handleToggle}>
              <ComputerIcon />
            </div>
            <Link to="/admin/users">
              <div>{toggled ? "Users" : ""}</div>
            </Link>
          </div>

          <div className="nav-li">
            <div onClick={handleToggle}>
              <PersonOutlineOutlinedIcon />
            </div>
            <Link to="/admin/investors">
              <div> {toggled ? "Investors" : ""}</div>
            </Link>
          </div>
          <div id="more"></div>
          <div className="nav-li" onClick={handleToggle}>
            <div>
              <SettingsIcon />
            </div>
            <Link to="/admin/profile">
              <div> {toggled ? "Profile Settings" : ""}</div>
            </Link>
          </div>
          <div className="nav-li" onClick={handleToggle}>
            <div>
              <VisibilityOffIcon />
            </div>
            <Link to="/admin/changepassword">
              <div> {toggled ? "Change Password" : ""}</div>
            </Link>
          </div>
          <div className="nav-li" onClick={handleToggle}>
            <div>
              <PowerSettingsNewIcon />
            </div>

            <div onClick={logout}> {toggled ? "Logout" : ""}</div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
