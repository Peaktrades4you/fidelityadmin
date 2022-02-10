import "./App.css";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Users from "./Routes/Users";
import Wallet from "./Routes/Wallet";
import SignIn from "./Routes/Auth/Signin";
import PrivateRoute from "./PrivateRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
