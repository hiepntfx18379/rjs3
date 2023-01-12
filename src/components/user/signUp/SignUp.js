import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { getFromStorage, saveToStorage } from "../storage";

const KEY = "userArray";
const dataUsersArr = JSON.parse(getFromStorage(KEY)) || [];
function validateData(data) {
  if (
    data.name === "" ||
    data.email === "" ||
    data.password === "" ||
    data.phone === ""
  ) {
    alert("Fill all fields, please");
    return false;
  } else if (data.password.length <= 8) {
    alert("Length of password has more than 8 characters");
    return false;
  } else {
    if (dataUsersArr.length > 0) {
      for (let user of dataUsersArr) {
        if (user.email === data.email) {
          alert("Email has exist, choose other, please!");
          return false;
        }
      }
    }
  }
  return true;
}
const SignUp = () => {
  const [nameUser, setNameUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [phoneUser, setPhoneUser] = useState("");
  const navigate = useNavigate();

  const userInput = {
    name: nameUser,
    email: emailUser,
    password: passwordUser,
    phone: phoneUser,
  };

  function clearAll() {
    setNameUser("");
    setEmailUser("");
    setPasswordUser("");
    setPhoneUser("");
  }

  const handleSubmit = () => {
    if (validateData(userInput)) {
      dataUsersArr.push(userInput);
      saveToStorage(KEY, JSON.stringify(dataUsersArr));
      clearAll();
      navigate("/login", { state: userInput });
    }
  };
  return (
    <div className="flex justify-center relative h-[600px] banner">
      <div>
        <div class="w-full max-w-sm absolute top-12 left-[34%]">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <span className="text-3xl font-bold text-gray-500 text-center flex justify-center">
              Sign Up
            </span>
            <div class="mb-4 mt-6">
              <input
                class="inputSignUp"
                id="username"
                type="text"
                placeholder="Full name"
                value={nameUser}
                onChange={(e) => setNameUser(e.target.value)}
              />
            </div>
            <div class="mb-4">
              <input
                class="inputSignUp"
                id="email"
                type="text"
                placeholder="Email"
                value={emailUser}
                onChange={(e) => setEmailUser(e.target.value)}
              />
            </div>
            <div class="mb-4">
              <input
                class="inputSignUp"
                id="password"
                type="password"
                placeholder="Password"
                value={passwordUser}
                onChange={(e) => setPasswordUser(e.target.value)}
              />
            </div>

            <div class="mb-4">
              <input
                class="inputSignUp"
                id="phone"
                type="text"
                placeholder="Phone"
                value={phoneUser}
                onChange={(e) => setPhoneUser(e.target.value)}
              />
            </div>

            <div class="">
              <button class="btnSign" type="submit" onClick={handleSubmit}>
                Sign In
              </button>
              <div className="text-center mt-7">
                Login?
                <span className=" text-blue-400 ml-2">
                  <Link to="/login">Click</Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
