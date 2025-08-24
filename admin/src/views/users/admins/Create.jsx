import FileUplodsModule from "../../../components/modules/FileUplodsModule";
import SubHeader from "../../../components/SubHeader";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";

function Create() {
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
                  className="input"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="label">
                  Mobile <span className="span">*</span>
                </label>
                <input
                  type="text"
                  className="input"
                  id="mobile"
                  placeholder="Enter mobile number"
                />
              </div>
              <div>
                <label htmlFor="email" className="label">
                  Email <span className="span">*</span>
                </label>
                <input
                  type="text"
                  className="input"
                  id="email"
                  placeholder="Enter your email here"
                />
              </div>
              <div>
                <label htmlFor="password" className="label">
                  password <span className="span">*</span>
                </label>
                <input
                  type="text"
                  className="input"
                  id="password"
                  placeholder="Enter your password here"
                />
              </div>
              <div>
                <label htmlFor="repassword" className="label">
                  Reconfirm password <span className="span">*</span>
                </label>
                <input
                  type="text"
                  className="input"
                  id="repassword"
                  placeholder="Reconfirm your password here"
                />
              </div>
              <div className="flex gap-4 cmt">
                <span className="font-bold">Gender</span>
                <span className="flex gap-4">
                  <span className="flex gap-2 items-center">
                    <input type="radio" className="" id="male" name="gender" />
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
                  name=""
                  id="address"
                  className="textarea"
                  placeholder="Enter your address here"
                ></textarea>
              </div>
              <div>
                <label htmlFor="description" className="label">
                  Description <span className="span">*</span>
                </label>
                <textarea
                  name=""
                  id="description"
                  className="textarea"
                  placeholder="Enter your description here"
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
                  <input type="radio" id="active" name="status" />
                  <label htmlFor="active" className="label">
                    Active
                  </label>
                </span>
                <span className="flex items-center gap-2">
                  <input type="radio" id="inactive" name="status" />
                  <label htmlFor="inactive" className="label">
                    Inactive
                  </label>
                </span>
                <span className="flex items-center gap-2">
                  <input type="radio" id="blacklist" name="status" />
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
