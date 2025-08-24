import { useState } from "react";
import { MdAdd } from "react-icons/md";

function TableLayoutComp({
  children,
  title,
  showSwitch = false,
  required = false,
  addButton = false,
}) {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const buttonCss = {
    justifyContent: `${toggle ? "right" : "left"}`,
    backgroundColor: `${toggle ? "#0D6EFD" : "white"}`,
  };
  const switchCss = {
    backgroundColor: `${toggle ? "white" : "gray"}`,
  };

  const cardTemplateCss = {
    height: `${toggle ? "2.7rem" : ""}`,
    overflow: `${toggle ? "hidden" : ""}`,
  };
  return (
    <div className="cardTemplate" style={cardTemplateCss}>
      <div className={`${title ? "templateHeading" : ""}`}>
        <div className="tableTitle">
          {title} {required && <span className="text-red-700">*</span>}{" "}
        </div>
        {showSwitch && (
          <div
            className="tableToggleButton"
            onClick={handleToggle}
            style={buttonCss}
          >
            <div className="toggle-switch" style={switchCss}></div>
          </div>
        )}
        {addButton && (
          <button className="add flex items-center gap-1">
            <MdAdd /> Add New
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

export default TableLayoutComp;
