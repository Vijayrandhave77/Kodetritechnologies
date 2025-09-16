import TableLayoutComp from "../../../components/Tables/TableLayoutComp";

function Regions() {
  return (
    <div>
      <div className="regionPage flex">
        <div className="itemRight">
          <TableLayoutComp title={"Create Region"}>
            <div className="regionscard cp">
              <div>
                <label htmlFor="name" className="label">
                  Region Name<span className="span">*</span>
                </label>
                <textarea name="name" id="name" className="textarea"></textarea>
              </div>
              <div>
                <label htmlFor="type" className="label">
                  Select Type<span className="span">*</span>
                </label>
                <select name="type" id="type" className="input">
                  <option value="" selected disabled>
                    Select Type
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
              <div>
                <label htmlFor="parent" className="label">
                  Parent<span className="span">*</span>
                </label>
                <select name="parent" id="parent" className="input">
                  <option value="" selected disabled>
                    Select...
                  </option>
                </select>
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

export default Regions;
