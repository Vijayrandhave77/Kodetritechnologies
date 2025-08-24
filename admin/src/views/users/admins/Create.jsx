import { useState } from "react";
import FileUplodsModule from "../../../components/modules/FileUplodsModule";
import SubHeader from "../../../components/SubHeader";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";

function Create() {
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    gender: "",
    address: "",
    description: "",
    profileImage: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setInitialValues((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <div>
      <SubHeader></SubHeader>
      <div className=" adminCreatePage flex">
        <div className="itemLeft">
          <TableLayoutComp title={"Add Admin"}>
            <div className="adminCard cp">
              <div>
                <label htmlFor="name" className="label">
                  Name <span className="span">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  id="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="mobile" className="label">
                  Mobile <span className="span">*</span>
                </label>
                <input
                  type="text"
                  className="input"
                  name="mobile"
                  id="mobile"
                  placeholder="Enter mobile number"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="label">
                  Email <span className="span">*</span>
                </label>
                <input
                  type="text"
                  className="input"
                  name="email"
                  id="email"
                  placeholder="Enter your email here"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="label">
                  password <span className="span">*</span>
                </label>
                <input
                  type="text"
                  className="input"
                  name="password"
                  id="password"
                  placeholder="Enter your password here"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="repassword" className="label">
                  Reconfirm password <span className="span">*</span>
                </label>
                <input
                  type="text"
                  className="input"
                  name="confirmPassword"
                  id="repassword"
                  placeholder="Reconfirm your password here"
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-4 cmt">
                <span className="font-bold">Gender</span>
                <span className="flex gap-4">
                  <span className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className=""
                      id="male"
                      name="gender"
                      value="male"
                      onChange={handleChange}
                    />
                    <label htmlFor="male" className="label">
                      Male
                    </label>
                  </span>
                  <span className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className=""
                      id="female"
                      name="gender"
                      value="female"
                      onChange={handleChange}
                    />
                    <label htmlFor="female" className="label">
                      Female
                    </label>
                  </span>
                </span>
              </div>

              <div>
                <label htmlFor="address" className="label">
                  Address <span className="span">*</span>
                </label>
                <textarea
                  name="address"
                  id="address"
                  className="textarea"
                  placeholder="Enter your address here"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <label htmlFor="description" className="label">
                  Description <span className="span">*</span>
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="textarea"
                  placeholder="Enter your description here"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </TableLayoutComp>
        </div>
        <div className="itemRight">
          <TableLayoutComp title={"Profile details"}>
            <div className="submitcard cp">
              <div>
                <label htmlFor="profile" className="label">
                  Profile
                </label>
                <FileUplodsModule />
              </div>
              <div className="flex gap-4 cmt">
                <span>admin status</span>
                <span className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="active"
                    name="status"
                    value="active"
                    onChange={handleChange}
                  />
                  <label htmlFor="active" className="label">
                    Active
                  </label>
                </span>
                <span className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="inactive"
                    name="status"
                    value="inactive"
                    onChange={handleChange}
                  />
                  <label htmlFor="inactive" className="label">
                    Inactive
                  </label>
                </span>
                <span className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="blacklist"
                    name="status"
                    value="blacklist"
                  />
                  <label htmlFor="blacklist" className="label">
                    Inactive
                  </label>
                </span>
              </div>
              <div className="flex gap-2 cmt">
                <button className="submit">Submit</button>
                <button className="cancel">Cancel</button>
              </div>
            </div>
          </TableLayoutComp>
        </div>
      </div>
    </div>
  );
}

export default Create;
