import "./App.css";
import React from "react";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import UpdateProfile from "./components/UpdateProfile";
import UserInformation from "./components/UserInformation";
import Booking from "./components/Booking";
function App() {
  return (
    // <div className="w-screen h-screen">
    //   <Login />
    //   {/* <Signup /> */}
    //   {/* <ForgotPassword /> */}
    // </div>

    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} > </Route>
          <Route path='/' element={<Login />} > </Route>
          <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
          <Route path='/homepage' element={<Homepage />}></Route>
          <Route path='/update-profile' element={<UpdateProfile />}></Route>
          <Route path='/user' element={<UserInformation />}></Route>
          <Route path='/profile' element={<UserInformation />} > </Route>
          <Route path='/booking' element={<Booking />} > </Route>
        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
