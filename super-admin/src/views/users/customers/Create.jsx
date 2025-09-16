import FileUplodsModule from "../../../components/modules/FileUplodsModule";
import SubHeader from "../../../components/SubHeader";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";

function Create() {
  return (
    <div>
      <SubHeader searchFilter={false}></SubHeader>
      <div className="customerCreatePage flex">
        <div className="itemLeft">
          <TableLayoutComp title={"Basic Information"}>
            <div className="basicInformationCard cp">
              <div>
                <label htmlFor="name" className="label">
                  Name <span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="input"
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="label">
                  Email <span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="email"
                  className="input"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="label">
                  Mobile <span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="mobile"
                  className="input"
                  placeholder="Enter Your Mobile Number"
                />
              </div>
              <div>
                <label htmlFor="password" className="label">
                  Name <span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="password"
                  className="input"
                  placeholder="Enter Your Password"
                />
              </div>
              <div>
                <label htmlFor="recpassword" className="label">
                  Reconfirm password <span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="recpassword"
                  className="input"
                  placeholder="Reconfirm Your Password"
                />
              </div>
            </div>
          </TableLayoutComp>
        </div>
        <div className="itemRight">
          <TableLayoutComp title={"Profile Details"}>
            <div className="profileDetailCard cp">
              <div>
                <label htmlFor="profile" className="label">
                  Profile
                </label>
                <FileUplodsModule />
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
                <label htmlFor="dob" classNam="label">
                  Date Of Birth
                </label>
                <input
                  type="date"
                  className="input"
                  id="dob"
                  value="2025-08-19"
                />
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
            </div>
          </TableLayoutComp>
        </div>
      </div>
      <div className="flex items-center justify-center cp">
        <div className="flex gap-4">
          <button className="submit">Submit</button>
          <button className="cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Create;
