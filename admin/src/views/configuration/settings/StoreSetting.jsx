import TableLayoutComp from "../../../components/Tables/TableLayoutComp";

function StoreSetting() {
  return (
    <div>
      <div className="storePage cp">
        <TableLayoutComp title={"Tax"}>
          <div className="taxcard cp">
            <div>
              <label htmlFor="tax" className="label">
                Tax (%)
              </label>
              <input
                type="text"
                className="input"
                id="tax"
                placeholder="Enter Tax"
              />
            </div>
            <div className="cmt">
              <button className="submit">Submit</button>
            </div>
          </div>
        </TableLayoutComp>
        <TableLayoutComp title={"Country"}>
          <div className="countrycard cp">
            <div>
              <label htmlFor="country" className="label">
                Country
              </label>
              <select name="country" id="country" className="input">
                <option value="" selected disabled>
                  Select Country
                </option>
              </select>
            </div>
            <div className="cmt">
              <button className="submit">Submit</button>
            </div>
          </div>
        </TableLayoutComp>
        <TableLayoutComp title={"Dropship"}>
          <div className="dropshipcard cp ">
            <div className="flex items-center gap-4">
              <input type="checkbox" id="dropship" />
              <label htmlFor="dropship" className="font-bold ">
                Enabel
              </label>
            </div>
            <div className="cmt">
              <button className="submit">Submit</button>
            </div>
          </div>
        </TableLayoutComp>
        <TableLayoutComp title={"COD Enable"}>
          <div className="codenabelcard cp ">
            <div className="flex items-center gap-4">
              <input type="checkbox" id="cod" />
              <label htmlFor="cod" className="font-bold ">
                Enabel
              </label>
            </div>
            <div className="cmt">
              <button className="submit">Submit</button>
            </div>
          </div>
        </TableLayoutComp>
        <TableLayoutComp title={"Admin Commission"}>
          <div className="commissioncard cp">
            <div>
              <label htmlFor="commission" className="label">
                Commission (%)
              </label>
              <input
                type="text"
                className="input"
                id="commission"
                placeholder="Admin Commission"
              />
            </div>
            <div className="cmt">
              <button className="submit">Submit</button>
            </div>
          </div>
        </TableLayoutComp>
        <TableLayoutComp title={"Refund Duration"}>
          <div className="durationcard cp">
            <div>
              <label htmlFor="duration" className="label">
                Duration (hours)
              </label>
              <input
                type="text"
                className="input"
                id="duration"
                placeholder="Refund Duration"
              />
            </div>
            <div className="cmt">
              <button className="submit">Submit</button>
            </div>
          </div>
        </TableLayoutComp>
        <TableLayoutComp title={"Shiprocket Credentials"}>
          <div className="shiprocketcard cp">
            <div>
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="text"
                className="input"
                id="email"
                placeholder="E-mail"
              />
            </div>
            <div>
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="text"
                className="input"
                id="password"
                placeholder="Password"
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

export default StoreSetting;
