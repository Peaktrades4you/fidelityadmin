import React from "react";
import "../Styles/Topnav.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";

export default function Topnav() {
  const { data } = useSelector(({ Auth }) => Auth);
  console.log(data, "data");
  return (
    <>
      <div className="topnav">
        <div>
          <h1>{data?.admin?.username}</h1>
        </div>
        <div>
          <img
            src={data?.admin?.profile_image_url}
            alt="avi"
            width={50}
            height={50}
          />
          {/* <AccountCircleIcon sx={{ fontSize: 40, color: "#ff6f3c" }} /> */}
        </div>
      </div>
    </>
  );
}
