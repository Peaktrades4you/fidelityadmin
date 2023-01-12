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
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import ReactPaginate from "react-paginate";
import { ContactSupportOutlined } from "@mui/icons-material";
import Spinner from "../Components/Spinner";
import moment from "moment";
import {
  handleGetInvestorPlan,
  handleGetInvestors,
} from "../Redux/Actions/Investors";
import { Button } from "@mui/material";
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

export default function Investors() {
  //popover control
  const [anchorEl, setAnchorEl] = useState(null);
  const [uin, setUin] = useState("");
  const handleClick = (event, uin) => {
    setAnchorEl(event.currentTarget);
    // setUin(uin);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //dispatching api calls
  const [pageCount, setPageCount] = useState(1);
  const { data, loading, plans } = useSelector(({ Investors }) => Investors);
  console.log(data, "userss");
  const dispatch = useDispatch();
  const [pagenum, setPageNum] = useState(1);

  const getInvestors = async () => {
    await dispatch(handleGetInvestors());
  };
  const getInvestorPlans = async () => {
    await dispatch(handleGetInvestorPlan(uin));
  };

  const handleUin = (uin) => {
    setUin(uin);
  };
  console.log(uin, "uin");

  useEffect(() => {
    getInvestors();
  }, [pagenum]);

  useEffect(() => {
    data && getInvestorPlans();
    console.log(uin);
  }, [uin]);

  useEffect(() => {
    getPageCount();
  }, [data]);

  //handle pagination

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPageNum(selectedPage + 1);
  };

  const getPageCount = () => {
    const total = data.total;
    const pageSize = data.size;
    var count = Math.trunc(total / pageSize);

    if (total % pageSize !== 0) {
      setPageCount(count + 1);
    } else {
      setPageCount(count);
    }
  };
  console.log(data.items, "investors");
  return (
    <>
      <MySideNav />
      <Topnav />
      <div className="t-container">
        <h2>Investors</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead sx={{ height: "100px" }}>
              <TableRow>
                <StyledTableCell id="t-head">S/N</StyledTableCell>

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
            {loading ? (
              <Spinner />
            ) : (
              <TableBody>
                {data?.items &&
                  data?.items.map((user, i) => (
                    <StyledTableRow key={i} sx={{ height: "85px" }}>
                      <StyledTableCell component="th" scope="row" id="t-cell">
                        {i + 1}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row" id="t-cell">
                        {user.email}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {user.username}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {moment(user.createdAt).format("Do MMM YYYY")}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {user.isEmailVerified ? (
                          <Button
                            color="primary"
                            variant="contained"
                            sx={{ position: "unset" }}
                          >
                            Active
                          </Button>
                        ) : (
                          <Button
                            color="secondary"
                            variant="outlined"
                            sx={{ position: "unset" }}
                          >
                            Inactive
                          </Button>
                        )}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <Button
                          aria-describedby={id}
                          variant="contained"
                          onClick={handleClick}
                          onMouseEnter={() => handleUin(user?.uin)}
                          sx={{ position: "unset" }}
                        >
                          See Plans
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
        <br />

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="customized table">
              <TableHead sx={{ height: "100px" }}>
                <TableRow>
                  <StyledTableCell id="t-head">S/N</StyledTableCell>

                  <StyledTableCell id="t-head">Plan</StyledTableCell>
                  <StyledTableCell align="center" id="t-head">
                    Amount
                  </StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {plans?.items &&
                  plans?.items.map((data, i) => (
                    <TableRow>
                      <StyledTableCell id="t-head">{i + 1}</StyledTableCell>

                      <StyledTableCell component="th" scope="row" id="t-cell">
                        {data?.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        ${data?.amount}
                      </StyledTableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Popover>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}
