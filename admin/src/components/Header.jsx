import { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { IoLogOutSharp, IoMenuOutline } from "react-icons/io5";
import { AuthContext } from "../contexts/AuthContext";
import BasicProvider from "../authentications/BasicProvider";

function Header() {
  const { admin, setAdmin, website } = useContext(AuthContext);
  const basicProvider = BasicProvider();
  const [show, setShow] = useState(false);
  const handelLogout = async () => {
    try {
      const response = await basicProvider.getMethod("users/admin/logout");
      console.log(response);
      if (response.status === "success") {
        toast.success(response.message);
        setAdmin(null);
      } else {
        toast.error("Something went wromg try again...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDropDown = () => {
    setShow(!show);
  };
  return (
    <div className="header">
      <IoMenuOutline className="hamburger" />
      <span className="flex gap-2 items-center">
        {website && (
          <div className="websiteButtonContainer">
            <NavLink to={website?.domain} target="_blank">
              <button className="gotoWebsite">Go to website</button>
            </NavLink>
          </div>
        )}
        <img
          onClick={handleDropDown}
          src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
        />
        <div
          className="dropdown"
          style={{ display: `${show ? "inline-block" : "none"}` }}
        >
          <ul className="dropLinks">
            <li className="drop-item">
              <NavLink to={`admin/edit/${admin?._id}`}>
                <CgProfile />
                Profile
              </NavLink>
            </li>
            <li onClick={handelLogout} className="drop-item">
              <IoLogOutSharp />
              LogOut
            </li>
          </ul>
        </div>
      </span>
    </div>
  );
}

export default Header;
