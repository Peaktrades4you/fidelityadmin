import React, { useState, useEffect } from "react";
import MySideNav from "../Components/Sidenav";
import Topnav from "../Components/Topnav";
import "../Styles/Users.css";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Dropdown from "../Components/Dropdown";
import { handleGetUsers } from "../Redux/Actions/Users";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Users() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetUsers());
  }, []);

  const { users } = useSelector(({ users }) => users);
  console.log(users);

  const values = [
    {
      value: "wallet",
      url: "/wallet",
      status: false,
      method: null,
    },
    {
      value: "Disable",
      url: "#",
      status: false,
      method: function () {
        if (this.status) {
          console.log("yayy");
        }
      },
    },
  ];
  return (
    <>
      <MySideNav />
      <Topnav />
      <div className="t-container">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead sx={{ height: "100px" }}>
              <TableRow>
                <StyledTableCell id="t-head">Email</StyledTableCell>
                <StyledTableCell align="center" id="t-head">
                  Username
                </StyledTableCell>
                <StyledTableCell align="center" id="t-head">
                  Date Created
                </StyledTableCell>
                <StyledTableCell align="center" id="t-head">
                  Status
                </StyledTableCell>
                <StyledTableCell align="center" id="t-head">
                  Action
                </StyledTableCell>
              </TableRow>
            </TableHead>
            {/* <TableBody>
              {users?.items.map((user, i) => (
                <StyledTableRow key={i} sx={{ height: "85px" }}>
                  <StyledTableCell component="th" scope="row" id="t-cell">
                    {user.username}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.createdAt}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.isEmailVerified}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.username}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Dropdown values={values} />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody> */}
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
