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
import UseFetch from "../Hooks/UseFetch";
import ReactPaginate from "react-paginate";
import { ContactSupportOutlined } from "@mui/icons-material";
import Spinner from "../Components/Spinner";
import moment from "moment";
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

export default function Users() {
  const dispatch = useDispatch();
  const [pagenum, setPageNum] = useState(1);

  useEffect(() => {
    getUsers();
  }, [pagenum]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPageNum(selectedPage + 1);
  };
  const getUsers = async () => {
    await dispatch(handleGetUsers(pagenum));
  };
  const [pageCount, setPageCount] = useState(1);
  const { users, loading } = useSelector(({ Users }) => Users);
  console.log(users, "userss");

  const getPageCount = () => {
    const total = users.total;
    const pageSize = users.size;
    var count = Math.trunc(total / pageSize);

    if (total % pageSize !== 0) {
      setPageCount(count + 1);
    } else {
      setPageCount(count);
    }
  };
  useEffect(() => {
    getPageCount();
  }, [users]);

  return (
    <>
      <MySideNav />
      <Topnav />
      <div className="t-container">
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
                {users?.items &&
                  users.items.map((user, i) => (
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
                        {user.uin} true
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <Dropdown
                          values={[
                            {
                              value: "wallet",
                              url: `/wallet/${user.uin}`,
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
                          ]}
                        />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
        <br />
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
