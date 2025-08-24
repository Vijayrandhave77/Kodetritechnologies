import TableLayoutComp from "../../../components/Tables/TableLayoutComp";

function Units() {
  return (
    <div>
      <div className="unitPage flex">
        <div className="itemRight">
          <TableLayoutComp title={"Unit"}>
            <div className="unitcard cp">
              <div>
                <label htmlFor="name" className="label">
                  Unit Name<span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="input"
                  placeholder="Unit name"
                />
              </div>
              <div>
                <label htmlFor="symbol" className="label">
                  Symbol (Ex: kg)<span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="symbol"
                  className="input"
                  placeholder="Symbol"
                />
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

export default Units;
