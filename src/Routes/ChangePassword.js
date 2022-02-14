import React, { useEffect, useState } from "react";
import MySideNav from "../Components/Sidenav";
import Topnav from "../Components/Topnav";
import { useDispatch, useSelector } from "react-redux";
import { handleChangePassword } from "../Redux/Actions/ChangePassword";
import Spinner from "../Components/Spinner";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
export default function ChangePassword() {
  const dispatch = useDispatch();
  const { loading, success, error, data } = useSelector(
    ({ ChangePassword }) => ChangePassword
  );
  console.log(success);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (success) {
      setOpen(true);
      setMessage("password changed successfully");
    } else if (success == false) {
      setOpen(true);

      setMessage("error");
    } else return;
  }, [success]);

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
        <Box sx={{ width: "80%", margin: "auto" }}>
          <Collapse in={open}>
            <Alert
              severity={success ? "success" : "error"}
              // color="info"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {message}
            </Alert>
          </Collapse>
        </Box>
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
                <button type="submit" id="btnn">
                  {loading ? (
                    <div className="spint">
                      <Spinner />
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
