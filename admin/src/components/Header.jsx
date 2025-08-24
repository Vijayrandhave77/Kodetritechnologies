import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoLogOutSharp, IoMenuOutline } from "react-icons/io5";

function Header() {
  const [show, setShow] = useState(false);
  return (
    <div className="header">
      <IoMenuOutline  className="hamburger"/>
      <img
        onClick={() => {
          setShow(!show);
        }}
        src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
        alt=""
      />
      <div
        className="dropdown"
        style={{ display: `${show ? "inline-block" : "none"}` }}
      >
        <ul>
          <li>
            <CgProfile />
            Profile
          </li>
          <li>
            <IoLogOutSharp />
            LogOut
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
