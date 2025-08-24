import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";
import { FaSquareInstagram } from "react-icons/fa6";
import SummernoteEditor from "../../../components/textEditor/SummernoteEditor";
import { useState } from "react";

function FooterSetting() {
  const [initialValues, setInitialValues] = useState({
    name: "",
    content: "",
  });
  return (
    <div>
      <div className="footerPage cp">
        <TableLayoutComp title={"Address Details"}>
          <div className="addresscard cp">
            <div>
              <label htmlFor="address" className="label">
                Address <span className="span">*</span>
              </label>
              <textarea
                name="address"
                id="address"
                className="input"
                style={{ minHeight: "4rem" }}
              ></textarea>
            </div>
            <div>
              <label htmlFor="address" className="label">
                Email Address <span className="span">*</span>
              </label>
              <input
                name="email"
                id="email"
                className="input"
                placeholder="Enter your email"
              ></input>
            </div>
            <div>
              <label htmlFor="mobile" className="label">
                Mobile <span className="span">*</span>
              </label>
              <input
                name="mobile"
                id="mobile"
                className="input"
                placeholder="Enter your mobile number"
              ></input>
            </div>
            <div>
              <label htmlFor="time" className="label">
                Time schedule <span className="span">*</span>
              </label>
              <input name="time" id="time" className="input"></input>
            </div>
            <div>
              <label htmlFor="description" className="label">
                Description <span className="span">*</span>
              </label>
              <textarea
                name="description"
                id="description"
                className="input"
                style={{ minHeight: "4rem" }}
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
        <TableLayoutComp title={"Support Center"}>
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
