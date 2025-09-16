import SubHeader from "../../../components/SubHeader";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";
import FileUplodsModule from "../../../components/modules/FileUplodsModule";
function Create() {
  return (
    <div>
      <SubHeader></SubHeader>
      <div className="vendorCreatePage flex">
        <div className="itemLeft">
          <TableLayoutComp title={"Basic Information"}>
            <div className="basicCard cp">
              <div>
                <label htmlFor="name" className="label">
                  Vendor Name <span className="span">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="label">
                  Mobile <span className="span">*</span>
                </label>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="Enter mobile number"
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="email" className="label">
                  Email <span className="span">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email here"
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="password" className="label">
                  Password <span className="span">*</span>
                </label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Enter your password here"
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="conpassword" className="label">
                  Reconfirm Password <span className="span">*</span>
                </label>
                <input
                  type="text"
                  name="conpassword"
                  id="conpassword"
                  placeholder="Reconfirm your password here"
                  className="input"
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
                <label htmlFor="description" className="label">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="input"
                  placeholder="Enter your description here"
                ></textarea>
              </div>
              <div>
                <label htmlFor="profile" className="label">
                  Profile
                </label>
                <FileUplodsModule />
              </div>
            </div>
          </TableLayoutComp>
        </div>
        <div className="itemRight">
          <TableLayoutComp title={"Store Details"}>
            <div className="storeDetails cp">
              <div>
                <label htmlFor="storename" className="label">
                  Store Name <span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="storename"
                  className="input"
                  placeholder="Enter your store name"
                />
              </div>
              <div>
                <label htmlFor="storeimage" className="label">
                  Store Image
                </label>
                <FileUplodsModule />
              </div>
              <div>
                <label htmlFor="gst" className="label">
                  GST <span className="span">*</span>
                </label>
                <input
                  type="text"
                  className="input"
                  id="gst"
                  placeholder="Enter your GST number"
                />
              </div>
              <div>
                <label htmlFor="storeGalleryimage" className="label">
                  Store Gallery Images
                </label>
                <FileUplodsModule />
              </div>
            </div>
          </TableLayoutComp>
        </div>
      </div>
      <div className="secoundHalf cp">
        <TableLayoutComp title={"Address Detail"}>
          <div className="addrsscard cp">
            <div>
              <label htmlFor="country" className="label">
                Country <span className="span">*</span>
              </label>
              <select name="country" id="country" className="input">
                <option value="" selected disabled>
                  Select Country
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="state" className="label">
                State <span className="span">*</span>
              </label>
              <select name="state" id="state" className="input">
                <option value="" selected disabled>
                  Select State
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="city" className="label">
                City <span className="span">*</span>
              </label>
              <select name="city" id="city" className="input">
                <option value="" selected disabled>
                  Select City
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="pincode" className="label">
                postal Code
              </label>
              <input
                type="text"
                className="input"
                id="pincode"
                placeholder="Enter Postal Code"
              />
            </div>
            <div>
              <label htmlFor="address" className="label">
                Address
              </label>
              <input
                type="text"
                className="input"
                id="address"
                placeholder="Enter Address"
              />
            </div>
          </div>
        </TableLayoutComp>

        <TableLayoutComp title={"Bank Detail"}>
          <div className="addessgrid">
            <div>
              <label htmlFor="brandname" className="label">
                Bank Name <span className="span">*</span>
              </label>
              <input
                type="text"
                className="input"
                id="bankname"
                placeholder="Enter Bank Name"
              />
            </div>
            <div>
              <label htmlFor="accountno" className="label">
                Account no. <span className="span">*</span>
              </label>
              <input
                type="text"
                className="input"
                id="accountno"
                placeholder="Enter your account no"
              />
            </div>
            <div>
              <label htmlFor="ifsc" className="label">
                IFSC Code. <span className="span">*</span>
              </label>
              <input
                type="text"
                className="input"
                id="ifsc"
                placeholder="Enter your IFSC code."
              />
            </div>
            <div>
              <label htmlFor="swiftcode" className="label">
                Swift Code <span className="span">*</span>
              </label>
              <input
                type="text"
                className="input"
                id="swiftcode"
                placeholder="Enter your Swift code."
              />
            </div>
          </div>
        </TableLayoutComp>

        <TableLayoutComp title={"Settings"}>
          <div className="settingcard cp flex gap-10">
            <div>
              <label htmlFor="shippingamount" className="label">
                Shipping Amount
              </label>
              <input
                type="text"
                id="shippingamount"
                className="input"
                placeholder="Enter Amount"
              />
            </div>
            <div>
              <div>
                <label className="label">Show Mobile Number</label>
              </div>
              <div className="">
                <input type="checkbox" name="showmobile" id="showmobile" />{" "}
                <label htmlFor="showmobile" className="font-bold">
                  Enabel
                </label>
              </div>
            </div>
          </div>
        </TableLayoutComp>
      </div>

      <div className="submitcard cp flex items-center justify-center">
        <div className="flex gap-4">
          <button className="submit">Submit</button>
          <button className="cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Create;
