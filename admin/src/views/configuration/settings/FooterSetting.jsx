import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";
import { FaSquareInstagram } from "react-icons/fa6";
import SummernoteEditor from "../../../components/textEditor/SummernoteEditor";
import { useState } from "react";
import handleSubmitHelper from "../../../helpers/handleSubmitHelper";

function FooterSetting() {
  const validations = [
    {
      key: "email",
      required: true,
      maxLength: 8,
    },
    {
      key: "mobile",
      required: true,
      maxLength: 10,
    },
  ];
  const [error, setError] = useState({});
  const [address, setAddress] = useState({
    address: "",
    email: "",
    mobile: "",
    time: "",
    description: "",
  });

  console.log(address);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((pre) => ({ ...pre, [name]: value }));
  };

  const [initialValues, setInitialValues] = useState({
    name: "",
    content: "",
  });

  const handleSubmit = async () => {
    const data = handleSubmitHelper(address, validations, setError);
    if (data) {
      console.log(data);
    }
  };
  return (
    <div>
      <div className="footerPage cp">
        <TableLayoutComp title={"Address Details"}>
          <div className="addresscard cp">
            <div>
              <label htmlFor="address" className="label">
                Address
              </label>
              <textarea
                name="address"
                value={address.address}
                id="address"
                className="input"
                style={{ minHeight: "4rem" }}
                onChange={handleAddressChange}
              ></textarea>
            </div>
            <div>
              <label htmlFor="address" className="label">
                Email Address
              </label>
              <input
                name="email"
                value={address.email}
                id="email"
                className={`input ${error.email && "customeErrorInput"}`}
                placeholder="Enter your email"
                onChange={handleAddressChange}
              ></input>
              {error?.email && (
                <span className="customeErrorMessage">{error.email}</span>
              )}
            </div>
            <div>
              <label htmlFor="mobile" className="label">
                Mobile
              </label>
              <input
                name="mobile"
                value={address.mobile}
                id="mobile"
                className={`input ${error.mobile && "customeErrorInput"}`}
                placeholder="Enter your mobile number"
                onChange={handleAddressChange}
              ></input>
              {error?.mobile && (
                <span className="customeErrorMessage">{error.mobile}</span>
              )}
            </div>
            <div>
              <label htmlFor="time" className="label">
                Time schedule
              </label>
              <input
                name="time"
                value={address.time}
                id="time"
                className="input"
                onChange={handleAddressChange}
              ></input>
            </div>
            <div>
              <label htmlFor="description" className="label">
                Description
              </label>
              <textarea
                name="description"
                value={address.description}
                id="description"
                className="input"
                style={{ minHeight: "4rem" }}
                onChange={handleAddressChange}
              ></textarea>
            </div>
            <div>
              <button className="submit cmt">Submit</button>
            </div>
          </div>
        </TableLayoutComp>
        <TableLayoutComp title={"Social Media Icons"}>
          <div className="socialLinksCard cp flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <FaFacebookSquare className="text-4xl" />{" "}
              <input
                type="facebook"
                className="input"
                placeholder="Enter facebook url"
              />
            </div>
            <div className="flex items-center gap-4">
              <FaTwitterSquare className="text-4xl" />{" "}
              <input
                type="twitter"
                className="input"
                placeholder="Enter twitter url"
              />
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-4xl" />{" "}
              <input
                type="linkedin"
                className="input"
                placeholder="Enter linkedin url"
              />
            </div>
            <div className="flex items-center gap-4">
              <FaSquareInstagram className="text-4xl" />{" "}
              <input
                type="instagram"
                className="input"
                placeholder="Enter instagram url"
              />
            </div>
            <div className="cmt">
              <button className="submit">Submit</button>
            </div>
          </div>
        </TableLayoutComp>
        <TableLayoutComp title={"Quick Links"}>
          <div className="quickLinkCard cp">
            <div>
              <SummernoteEditor
                initialValues={initialValues.content}
                setInitialValues={setInitialValues}
              />
            </div>
            <div className="cmt">
              <button className="submit">Submit</button>
            </div>
          </div>
        </TableLayoutComp>
        <TableLayoutComp title={"Support Links"}>
          <div className="supportCard cp">
            <div>
              <SummernoteEditor
                initialValues={initialValues.content}
                setInitialValues={setInitialValues}
              />
            </div>
            <div className="cmt">
              <button className="submit">Submit</button>
            </div>
          </div>
        </TableLayoutComp>
        <TableLayoutComp title={"Shipping Details"}>
          <div className="shippingDetailCard cp">
            <div>
              <label htmlFor="shippingEmail" className="label">
                Email <span className="span">*</span>
              </label>
              <input
                type="text"
                id="shippingEmail"
                className="input"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="shippingMobile" className="label">
                Mobile <span className="span">*</span>
              </label>
              <input
                type="text"
                id="shippingMobile"
                className="input"
                placeholder="Enter your mobile number"
              />
            </div>
            <div>
              <label htmlFor="shippingpostalcode" className="label">
                PostalCode <span className="span">*</span>
              </label>
              <input
                type="text"
                id="shippingpostalcode"
                className="input"
                placeholder="Enter your Postal Code"
              />
            </div>
            <div className="cmt">
              <button className="submit">Submit</button>
            </div>
          </div>
        </TableLayoutComp>
      </div>
    </div>
  );
}

export default FooterSetting;
