import React, { useState } from "react";
import { UilLock, UilEnvelopeAlt, UilMedicalSquareFull } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [doctorCode, setDoctorCode] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    let hasError = false;
  
    // Kiểm tra xem các trường thông tin đã được điền đầy đủ chưa
    if (!email || !password || !doctorCode) {
      setError("All fields are required.");
      hasError = true;
    }
  
    if (!hasError) {
      // Kiểm tra định dạng email
      if (!email.endsWith("@gmail.com")) {
        setError("Email must end with @gmail.com");
        hasError = true;
      }
  
      // Kiểm tra định dạng mật khẩu
      if (
        !hasError &&
        (password.length < 6 ||
          !/\d/.test(password) ||
          !/[a-zA-Z]/.test(password))
      ) {
        setError(
          "Password must be at least 6 characters and contain both letters and numbers."
        );
        hasError = true;
      }
  
      // Kiểm tra định dạng mã bác sĩ
      if (!hasError && !/^[A-Z]\w{0,4}$/i.test(doctorCode)) {
        setError("Doctor Code must start with a capital letter and be up to 5 characters long.");
        hasError = true;
      }
    }
  
    if (!hasError) {
      try {
        // Lấy dữ liệu từ máy chủ
        const response = await fetch("http://localhost:9999/infor");
        if (response.ok) {
          const data = await response.json();
          // Kiểm tra dữ liệu từ máy chủ
          if (data.some(entry => entry.email === email)) {
            setError("Email already exists. Please choose another email.");
            hasError = true;
          }
          if (data.some(entry => entry.doctorCode === doctorCode)) {
            setError("Doctor Code already exists. Please choose another code.");
            hasError = true;
          }
        } else {
          setError("Error checking existing data. Please try again later.");
          return;
        }
      } catch (error) {
        setError("An error occurred while processing your request.");
        return;
      }
    }
  
    if (!hasError) {
      try {
        const response = await fetch("http://localhost:9999/infor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            doctorCode,
          }),
        });
  
        if (response.ok) {
          console.log("Signup successful!");
          // Chuyển hướng URL sau khi đăng ký thành công
          window.location.href = "/login";
        } else {
          setError("Signup failed. Please try again later.");
        }
      } catch (error) {
        setError("An error occurred while processing your request.");
      }
    }
  };
  
  

  return (
    <div className="bg-[#DDE5F4] w-screen h-screen flex items-center justify-center">
      <div className="w-[350px] h-[550px] bg-[#ffff] rounded-[30px]">
        <div className="w-full h-auto flex justify-center">
          <div className="w-[150px] h-[150px]">
            <img
              src="https://media.istockphoto.com/id/1321617070/vector/health-medical-logo.jpg?s=612x612&w=0&k=20&c=sus8vhG3c__vCdvOBLDhuf2vPUgIAudIAeUBApU_7Ew="
              alt="Logo"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-full h-auto flex justify-center">
          <div className="w-3/4 h-[70px] bg-[#F1F7FA] rounded-[10px]">
            <p className="ml-[10px] mt-[5px] font-mono">Email address:</p>
            <div className="flex items-center mt-[8px]">
              <div className="w-[20px] h-[20px] ml-[10px]">
                <UilEnvelopeAlt size={20} />
              </div>
              <input
                type="text"
                placeholder="username@gmail.com"
                className="pl-[5px] pb-[4px] font-mono  font-[10px] w-4/5 h-full outline-none rounded-[10px] ml-[10px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center mt-[15px]">
          <div className="w-3/4 h-[70px] bg-[#F1F7FA] rounded-[10px]">
            <p className="ml-[10px] mt-[5px] font-mono">Password:</p>
            <div className="flex items-center mt-[8px]">
              <div className="w-[20px] h-[20px] ml-[10px]">
                <UilLock size={20} />
              </div>
              <input
                type="password"
                placeholder="password..."
                className="pl-[5px] pb-[4px] font-mono  font-[10px] w-4/5 h-full outline-none rounded-[10px] ml-[10px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center mt-[15px]">
          <div className="w-3/4 h-[70px] bg-[#F1F7FA] rounded-[10px]">
            <p className="ml-[10px] mt-[5px] font-mono">Doctor Code:</p>
            <div className="flex items-center mt-[8px]">
              <div className="w-[20px] h-[20px] ml-[10px]">
                <UilMedicalSquareFull size={20} />
              </div>
              <input
                type="text"
                placeholder="optional"
                className="pl-[5px] pb-[4px] font-mono  font-[10px] w-4/5 h-full outline-none rounded-[10px] ml-[10px]"
                value={doctorCode}
                onChange={(e) => setDoctorCode(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex justify-center mt-[30px]">
          <button
            onClick={handleSignup}
            className="w-3/4 h-[40px] bg-[#0872BB] text-white rounded-[10px] font-mono font-bold font-[10px]"
          >
            Sign Up
          </button>
        </div>
        {error && (
          <div className="w-full h-auto flex justify-center mt-[10px]">
            <p className="text-red-500 font-mono font-bold text-[13px]">
              {error}
            </p>
          </div>
        )}
        <div className="w-full h-auto flex justify-center mt-[10px]">
          <div className="w-full flex justify-center font-mono font-bold text-[13px] items-center">
            <a href="/login">Already have an account?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
