import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import googlecon from "../assets/icons/google.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Signup() {
  const [show, setShow] = useState({
    password: true,
    confirmpass: true,
  });
  const handleEye = (type) => {
    setShow((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };
  return (
    <div className="signupPage">
      <div className="registerleft">
        <img src="/signup.png" alt="" />
      </div>
      <div className="registerRight">
        <div className="registerlogo">
          <img src="/sublogo.png" alt="logo" />
        </div>
        <div className="signupForm">
          <h1 className="text-center font-bold">Signup to Dashboard</h1>
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="input"
              placeholder="Enter your name"
            />
          </div>
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
                type={show.password ? "text" : "password"}
                id="password"
                className=""
                placeholder="Enter your password"
              />
              <span
                onClick={() => {
                  handleEye("password");
                }}
              >
                {show.password ? (
                  <IoMdEye className="cursor-pointer" />
                ) : (
                  <IoMdEyeOff className="cursor-pointer" />
                )}
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="confirmPass" className="label">
              Reconfirm Password
            </label>
            <div className="input-password">
              <input
                type={show.confirmpass ? "text" : "password"}
                id="confirmPass"
                className=""
                placeholder="Re-confirm your password"
              />
              <span
                onClick={() => {
                  handleEye("confirmpass");
                }}
              >
                {show.confirmpass ? (
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
              <label htmlFor="">Already have an account?</label>
            </span>
            <span className="text-[#518EF8]">
              <NavLink to="/login">Login</NavLink>
            </span>
          </div>
          <div className="googleButton">
            <img src={googlecon} alt="" /> <span>Sign up with Google</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
