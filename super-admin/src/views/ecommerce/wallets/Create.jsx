import NoRecords from "../../../components/NoRecords";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";

function Create() {
  return (
    <div className="walletPage">
      <div className="itemRight">
        <TableLayoutComp title={"Create Customer Wallet"}>
          <div className="createWallet cp">
            <div className="walletMode flex items-center gap-20">
              <div className="flex gap-2">
                <input type="radio" id="credit" name="mode" className="w-5" />
                <label htmlFor="credit" className="font-bold">
                  {" "}
                  Credit
                </label>
              </div>
              <div className="flex gap-2">
                <input type="radio" id="debit" name="mode" className="w-5" />
                <label htmlFor="debit" className="font-bold">
                  {" "}
                  Debit
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="amount" className="label">
                Amount <span className="text-red-700">*</span>
              </label>
              <input type="text" className="input" placeholder="Enter Amount" />
            </div>
            <div>
              <label htmlFor="message" className="label">
                Message <span className="text-red-700">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                className="textarea"
              ></textarea>
            </div>
            <div className="userMode flex items-center gap-20">
              <div className="flex gap-2">
                <input type="radio" id="vendor" name="user" className="w-5" />
                <label htmlFor="vendor" className="font-bold">
                  {" "}
                  Vendor
                </label>
              </div>
              <div className="flex gap-2">
                <input type="radio" id="customer" name="user" className="w-5" />
                <label htmlFor="customer" className="font-bold">
                  {" "}
                  Customer
                </label>
              </div>
            </div>
            <div className="cmt">
              <label htmlFor="type" className="label">
                Select vendor <span className="span">*</span>
              </label>
              <select name="user" id="type" className="input">
                <option value="" disabled selected>
                  Select Vendor
                </option>
              </select>
            </div>
            <div className="cmt">
              <button className="submit">Subnit</button>
            </div>
          </div>
        </TableLayoutComp>
      </div>
      <div className="itemLeft">
        <NoRecords />
      </div>
    </div>
  );
}

export default Create;
