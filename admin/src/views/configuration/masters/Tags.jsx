import TableLayoutComp from "../../../components/Tables/TableLayoutComp";

function Tages() {
  return (
    <div>
      <div className="tagesPage flex">
        <div className="itemRight">
          <TableLayoutComp title={"Tages"}>
            <div className="tagescard cp">
              <div>
                <label htmlFor="name" className="label">
                  Create Tage<span className="span">*</span>
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

export default Tages;
