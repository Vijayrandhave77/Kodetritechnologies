import TableLayoutComp from "../../../components/Tables/TableLayoutComp";

function Status() {
  return (
    <div>
      <div className="statusPage flex">
        <div className="itemRight">
          <TableLayoutComp title={"Status"}>
            <div className="statuscard cp">
              <div>
                <label htmlFor="name" className="label">
                  Status Name<span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="input"
                  placeholder="Status name"
                />
              </div>
              <div>
                <label htmlFor="slug" className="label">
                  Slug Name<span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="slug"
                  className="input"
                  placeholder="Slug"
                />
              </div>
              <div>
                <label htmlFor="color" className="label">
                  Select Color<span className="span">*</span>
                </label>
                <select name="color" id="color" className="input">
                  <option value="" selected disabled>
                    Select Color
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="otherType" className="label">
                  Other Type<span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="otherType"
                  className="input"
                  placeholder="Other Type"
                />
              </div>
              <div className="cp">
                <button className="submit">Submit</button>
              </div>
            </div>
          </TableLayoutComp>
        </div>
        <div className="itemLeft"></div>
      </div>
    </div>
  );
}

export default Status;
