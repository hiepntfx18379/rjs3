import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { mustLoginSelector } from "../../proDetail/detailSlice";
import { getFromStorage, saveToStorage } from "../storage";
import { statusLoginSelector, userSlide } from "../useSlide";

// mang nguoi dung login
const USERLOGIN = "userLogin";
const userLoginedArray = getFromStorage(USERLOGIN)
  ? JSON.parse(getFromStorage(USERLOGIN))
  : [];

const SignIn = () => {
  // get data dki
  const KEY = "userArray";
  let dataUsersArr = [];
  useEffect(() => {
    dataUsersArr = JSON.parse(getFromStorage(KEY));
  });

  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // khi click add product( detailPage) => check login
  const checkLogin = useSelector(mustLoginSelector);

  const userDataLogin = {
    email: emailUser,
    password: passwordUser,
  };

  function validateData(data) {
    if (data.email === "" || data.password === "") {
      alert("Fill all fields, please");
      return false;
    } else if (dataUsersArr.length > 0) {
      const filterUser = dataUsersArr.filter(
        (u) => u.email === data.email && u.password === data.password
      );
      if (filterUser.length < 1) {
        alert(" Username or password invalid!! Again");
        setPasswordUser("");
        return false;
      } else {
        dispatch(
          userSlide.actions.ON_LOGIN({
            statusLogin: true,
            userLogined: filterUser[0],
          })
        );

        saveToStorage(USERLOGIN, JSON.stringify(filterUser));
        if (checkLogin) navigate(-1);
        else navigate("/home");
      }
    }
  }

  const handleSubmit = () => {
    validateData(userDataLogin);
  };

  // const local = useLocation();
  // console.log(local.state);
  // console.log(dataUsersArr);

  return (
    <div className="flex justify-center relative h-[600px] banner">
      <div>
        <div class="w-full max-w-sm absolute top-12 left-[34%]">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-[457px]">
            <span className="text-3xl font-bold text-gray-500 text-center flex justify-center mb-5">
              Sign In
            </span>

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

            <div class="">
              <button class="btnSign" type="button" onClick={handleSubmit}>
                Sign In
              </button>
              <div className="text-center mt-7">
                Create a account?
                <span className=" text-blue-400 ml-2">
                  <Link to="/register"> Sign up</Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
