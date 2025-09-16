import SubHeader from "../../../components/SubHeader";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";

function Create() {
  return (
    <>
      <SubHeader searchFilter={false}></SubHeader>
      <div className="coupanPage flex">
        <div className="itemLeft">
          <TableLayoutComp title={"Create Coupan"}>
            <div className="coupanlayout cp">
              <div>
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="input"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="description" className="label">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="textarea"
                ></textarea>
              </div>
              <div>
                <label htmlFor="code" className="label">
                  Coupan Code <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="code"
                  className="input"
                  placeholder="ENTER COUPAN CODE"
                />
              </div>
              <div>
                <label htmlFor="codeno" className="label">
                  No of Coupan<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="codeno"
                  className="input"
                  placeholder="Enter number of coupan"
                />
              </div>
              <div>
                <label htmlFor="type" className="label">
                  Type<span className="text-red-700">*</span>
                </label>
                <select name="type" id="type" className="input">
                  <option value="" disabled selected>
                    Select Discount Type
                  </option>
                  <option value="">By Precentage</option>
                  <option value="">Fix Amount</option>
                </select>
              </div>
              <div>
                <label htmlFor="min" className="label">
                  Minimum Amount<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="min"
                  className="input"
                  placeholder="Enter Amount"
                />
              </div>
              <div>
                <label htmlFor="max" className="label">
                  Maximum Amount<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="max"
                  className="input"
                  placeholder="Enter Amount"
                />
              </div>
            </div>
          </TableLayoutComp>
        </div>
        <div className="itemRight">
          <TableLayoutComp>
            <div className="cupanSubmit cp">
              <div className="flex gap-2">
                <div>
                  <label htmlFor="start" className="label">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value="2025-08-16"
                    id="start"
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="end" className="label">
                    End Date
                  </label>
                  <input
                    type="date"
                    value="2025-08-16"
                    id="end"
                    className="input"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="w-full">
                  <label htmlFor="selecttype" className="label">
                    Select Type <span className="text-red-700">*</span>
                  </label>
                  <select name="selecttype" id="selecttype" className="input">
                    <option value="" selected disabled>
                      Select Type
                    </option>
                    <option value="">Category</option>
                    <option value="">Product</option>
                  </select>
                </div>
              </div>
              <div className="firstTimeUser flex gap-4 cmt">
                <span className="label">First Time User Only</span>
                <span className="gap-1 flex items-center">
                  <input
                    type="radio"
                    name="firstUser"
                    id="yes"
                    className="radioYes"
                  />
                  <label htmlFor="yes" className="font-bold">
                    Yes
                  </label>
                </span>
                <span className="gap-1 flex items-center">
                  <input
                    type="radio"
                    name="firstUser"
                    id="no"
                    className="radioNo"
                  />
                  <label htmlFor="no" className="font-bold">
                    No
                  </label>
                </span>
              </div>
              <div className="flex gap-2 cmt">
                <button className="submit">Submit</button>
                <button className="cancel">Cancel</button>
              </div>
            </div>
          </TableLayoutComp>
        </div>
      </div>
    </>
  );
}

export default Create;
