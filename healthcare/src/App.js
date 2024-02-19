import "./App.css";
import React from "react";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import UpdateProfile from "./components/UpdateProfile";
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
          <Route path='/login' element={<Login />} > </Route>
          <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
          <Route path='/homepage' element={<Homepage />}></Route>
          <Route path='/update-profile' element={<UpdateProfile />}></Route>
        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
