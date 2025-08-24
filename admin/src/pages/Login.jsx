import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import googlecon from "../assets/icons/google.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Login() {
  const [show, setShow] = useState(true);

  return (
    <div className="signupPage">
      <div className="registerleft">
        <img src="/login.png" alt="" style={{transform:"scaleX(-1)"}}/>
      </div>
      <div className="loginRight">
        <div className="registerlogo">
          <img src="/sublogo.png" alt="logo" />
        </div>
        <div className="signupForm">
          <h1 className="text-center font-bold">Login to Dashboard</h1>
          <div>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="input"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="label">
              Password
            </label>
            <div className="input-password">
              <input
                type={show ? "text" : "password"}
                id="password"
                className=""
                placeholder="Enter your password"
              />
              <span
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? (
                  <IoMdEye className="cursor-pointer" />
                ) : (
                  <IoMdEyeOff className="cursor-pointer" />
                )}
              </span>
            </div>
          </div>
          <div
            className="flex items-centern gap-2"
            style={{ padding: "0.5rem 0rem" }}
          >
            <input type="checkbox" id="term" />
            <label htmlFor="term" className="font-bold select-none label">
              {" "}
              I accepted all terms & conditions.
            </label>
          </div>
          <div className="signup">Sign up</div>
          <div className="flex justify-center items-center gap-2">
            <span className="or"></span>
            OR
            <span className="or"></span>
          </div>
          <div
            className="flex items-center justify-center gap-2"
            style={{ padding: "0.2rem" }}
          >
            <span>
              <label htmlFor="">I don't have an account?</label>
            </span>
            <span className="text-[#518EF8]">
              <NavLink to="/signup">Sign up</NavLink>
            </span>
          </div>
          <div className="googleButton">
            <img src={googlecon} alt="" /> <span>Login with Google</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
