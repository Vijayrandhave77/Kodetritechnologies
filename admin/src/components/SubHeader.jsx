import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaRectangleList } from "react-icons/fa6";
import { IoCreate } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";

function SubHeader({ searchFilter = true, addButton = true }) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="subheader">
      <div className="subhLeft">
        <div
          id="dropdown"
          className="subheaderDropdown"
          onClick={() => setDropdown(!dropdown)}
        >
          <div>All Products</div> <MdArrowDropDown />
          <ul
            className="dropdownList"
            style={{ display: `${dropdown ? "inline-block" : "none"}` }}
          >
            <li>
              <FaRectangleList />
              All Products
            </li>
            <li>
              <IoCreate />
              Create Products
            </li>
            <li>
              <FaTrashAlt />
              Trash Products
            </li>
          </ul>
        </div>
        {addButton && <button>Add New</button>}
      </div>
      {searchFilter && (
        <div className="subright">
          <input
            className="subheaderSearch"
            type="search"
            placeholder="Search..."
          />

          <div className="searchButton">
            <button>Search</button>
            <button>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubHeader;
