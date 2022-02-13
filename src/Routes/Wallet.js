import React, { useState } from "react";
import MySideNav from "../Components/Sidenav";
import Topnav from "../Components/Topnav";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleGetUserDetails } from "../Redux/Actions/Users";
import { useEffect } from "react";
import { handleEditUserWallet } from "../Redux/Actions/Wallet";
export default function Wallet() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [walletArr, setWalletArr] = useState([]);
  const [walletValues, setWalletValues] = useState([]);
  const [walletKeys, setWalletKeys] = useState([]);

  const getUserDetails = async () => {
    await dispatch(handleGetUserDetails(id));
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const { userDetails, loading } = useSelector(({ Users }) => Users);

  const [walletDetails, setWalletDetails] = useState({
    cash_balance: userDetails?.wallet?.cash_balance,
    profit: userDetails?.wallet?.profit,
    refferalProfit: userDetails?.wallet?.refferalProfit,
    depositBalance: userDetails?.wallet?.depositBalance,
    withdrawBalance: userDetails?.wallet?.withdrawBalance,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWalletDetails({
      ...walletDetails,
      [name]: value,
    });
    console.log(name, value);
  };

  const editWalletDetails = () => {
    dispatch(handleEditUserWallet(id, walletDetails));
  };

  //handle toggle of several buttons with one state
  const initialState = Array.from({ length: 4 }).map((_, idx) => {
    return { id: idx + 1, clicked: true };
  }); //creates an array  of 4 elements , maps through it and retuns an object
  const [buttons, setButtons] = React.useState(initialState);

  const handleEdit = (buttonId) => {
    const nextState = buttons.map((button) => {
      if (button.id !== buttonId) {
        return button;
      }
      return { ...button, clicked: !button.clicked };
    });
    setButtons(nextState);
  };

  const userWalletValues = [
    "Cash Balance",
    "Available Profit",
    "Referral Earnings",
    "Total Deposit",
    "Total Withdrawal",
  ];

  useEffect(() => {
    handleWallet();
    // alert("chnaged");
  }, [userDetails]);

  const handleWallet = () => {
    const walletDetails = Object.entries(
      (userDetails.wallet && userDetails.wallet) || {}
    );
    setWalletArr((arr) => [...walletDetails]); //did this to convert the object from endpoint to an array
  };

  useEffect(() => {
    handleWalletValues();
  }, [walletArr]);

  useEffect(() => {
    handleWalletKeys();
  }, [walletValues]);

  const handleWalletKeys = () => {
    const keys = walletArr.map((arr) => {
      return arr[0];
    }); // returning just the first elements of each array
    setWalletKeys((arr) => [...keys]);
  };

  const handleWalletValues = () => {
    const keys = walletArr.map((arr) => {
      return arr[1];
    });
    setWalletValues((arr) => [...keys]);
    // returning just the second elements of each array
  };

  return (
    <div>
      <MySideNav />
      <Topnav />
      <div className="t-container">
        <h1>Wallet Details</h1>
        <h3>{userDetails.user && userDetails?.user.username}</h3>
        <Grid container spacing={6}>
          {buttons.map((key, i) => (
            <Grid item xs={12} md={6} lg={4}>
              <div className="card" key={i}>
                <h3>{userWalletValues[i]}</h3>
                <p>
                  <input
                    type={"text"}
                    defaultValue={walletValues[i]}
                    placeholder="$"
                    disabled={key.clicked}
                    name={walletKeys[i]}
                    onChange={handleChange}
                  />
                </p>
                <Stack direction={"row"} spacing={2}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ position: "unset" }}
                    onClick={() => handleEdit(key.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ position: "unset" }}
                    onClick={editWalletDetails}
                  >
                    Save
                  </Button>
                </Stack>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
