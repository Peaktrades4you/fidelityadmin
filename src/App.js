import "./App.css";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Users from "./Routes/Users";
import Wallet from "./Routes/Wallet";
import SignIn from "./Routes/Auth/Signin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
