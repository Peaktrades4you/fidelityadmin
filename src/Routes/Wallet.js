import React, { useState } from "react";
import MySideNav from "../Components/Sidenav";
import Topnav from "../Components/Topnav";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
export default function Wallet() {
  const [editable, setEditable] = useState(false);
  const handleEdit = (id) => {
    setEditable(!editable);
  };

  return (
    <div>
      <MySideNav />
      <Topnav />
      <div className="t-container">
        <h1>Wallet Details</h1>
        <h3>Ella@1234</h3>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <div className="card">
              <h3>Available profit</h3>
              <p>
                <input type={"text"} value="$1700" disabled={editable} />
              </p>
              <Stack direction={"row"} spacing={2}>
                <Button
                  variant="outlined"
                  color="secondary"
                  href="#contained-buttons"
                  sx={{ position: "unset" }}
                  onClick={handleEdit}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  href="#contained-buttons"
                  sx={{ position: "unset" }}
                >
                  Save
                </Button>
              </Stack>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div className="card">
              <h3>Total Investment</h3>
              <p>
                <input type={"text"} value="$1700" disabled />
              </p>
              <Stack direction={"row"} spacing={2}>
                <Button
                  variant="outlined"
                  color="secondary"
                  href="#contained-buttons"
                  sx={{ position: "unset" }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  href="#contained-buttons"
                  sx={{ position: "unset" }}
                >
                  Save
                </Button>
              </Stack>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div className="card">
              <h3>Total Withdrawal</h3>
              <p>
                <input type={"text"} value="$1700" disabled />
              </p>
              <Stack direction={"row"} spacing={2}>
                <Button
                  variant="outlined"
                  color="secondary"
                  href="#contained-buttons"
                  sx={{ position: "unset" }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  href="#contained-buttons"
                  sx={{ position: "unset" }}
                >
                  Save
                </Button>
              </Stack>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div className="card">
              <h3>Total Deposit</h3>
              <p>
                <input type={"text"} value="$1700" disabled />
              </p>
              <Stack direction={"row"} spacing={2}>
                <Button
                  variant="outlined"
                  color="secondary"
                  href="#contained-buttons"
                  sx={{ position: "unset" }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  href="#contained-buttons"
                  sx={{ position: "unset" }}
                >
                  Save
                </Button>
              </Stack>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div className="card">
              <h3>Referral Earnings</h3>
              <p>
                <input type={"text"} value="$1700" disabled />
              </p>
              <Stack direction={"row"} spacing={2}>
                <Button
                  variant="outlined"
                  color="secondary"
                  href="#contained-buttons"
                  sx={{ position: "unset" }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  href="#contained-buttons"
                  sx={{ position: "unset" }}
                >
                  Save
                </Button>
              </Stack>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
