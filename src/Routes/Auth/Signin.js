import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Checkbox } from "@mui/material";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useDispatch } from "react-redux";
import { handleUserAuth } from "../../Redux/Actions/Auth";
import { useSelector } from "react-redux";
import Spinner from "../../Components/Spinner";

function SignIn(props) {
  const dispatch = useDispatch();
  const { loading, auth } = useSelector(({ Auth }) => Auth);
  console.log(auth?.error, "error");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    dispatch(handleUserAuth(loginDetails)).then(() => {
      navigate("/admin/users");
    });
  };

  return (
    <>
      <div className="signin">
        <div className="push1"></div>
        <div className="auth-container">
          <Box sx={{ width: "100%" }}>
            <Collapse in={open}>
              <Alert
                severity="error"
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
          <h1>Sign in</h1>
          <p>Welcome to the admin, please login to manage account</p>
          <div className="c-form">
            <form onSubmit={handleSignin}>
              <div className="f-input">
                <div id="btm" className="object-cont">
                  <div className="left-icon">
                    <MailOutlineIcon className="muicon" />
                  </div>
                  <div className="right-object">
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div id="btm" className="object-cont">
                  <div className="left-icon">
                    <LockOpenIcon className="muicon" />
                  </div>
                  <div className="right-object">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="form-btn">
                {loading ? (
                  <div className="spin">
                    <Spinner />
                  </div>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
        <div className="push"></div>
        <div className="copyrite">
          <Link to="/">FidelityTrade Inc. </Link>
          <span>© 2021. All Rights Reserved.</span>
        </div>
      </div>
    </>
  );
}

export default SignIn;
