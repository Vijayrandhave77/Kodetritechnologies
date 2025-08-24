import FileUplodsModule from "../../../components/modules/FileUplodsModule";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";

function WebsiteSetting() {
  return (
    <div>
      <div className="websitesettingPage cp">
        <TableLayoutComp title={"Website Setting"}>
          <div className="websirecard cp">
            <div>
              <label htmlFor="name" className="label">
                Website Name <span className="span">*</span>
              </label>
              <input
                type="text"
                className="input"
                id="name"
                placeholder="Enter your webbsite name.."
              />
            </div>
            <div>
              <label htmlFor="url" className="label">
                Website URL<span className="span">*</span>
              </label>
              <input
                type="text"
                id="url"
                className="input"
                placeholder="Enter your website URL"
              />
            </div>
            <div>
              <label htmlFor="url" className="label">
                Email<span className="span">*</span>
              </label>
              <input
                type="text"
                id="email"
                className="input"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="label">
                Mobile<span className="span">*</span>
              </label>
              <input
                type="text"
                id="mobile"
                className="input"
                placeholder="Enter your mobile number"
              />
            </div>
            <div>
              <label htmlFor="address" className="label">
                Address<span className="span">*</span>
              </label>
              <textarea
                name="address"
                id="address"
                className="input"
                style={{ minHeight: "4rem" }}
                placeholder="Enter your address"
              ></textarea>
            </div>
            <div>
              <label htmlFor="logo" className="label">
                Logo<span className="span">*</span>
              </label>
              <FileUplodsModule />
            </div>
            <div className="cp cmt">
              <button className="submit">Submit</button>
            </div>
          </div>
        </TableLayoutComp>
      </div>
    </div>
  );
}

export default WebsiteSetting;
