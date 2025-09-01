import { useState } from "react";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";
import handleSubmitHelper from "../../../helpers/handleSubmitHelper";

function PaymentSetting() {
  const [razorpay, setRazorpay] = useState({
    key_id: "",
    key_secret: "",
  });
  console.log(razorpay);
  const razorpayHandleChange = (e) => {
    const { name, value } = e.target;
    setRazorpay((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const razorpayHandleSubmit = async () => {
    try {
      const data = handleSubmitHelper(razorpay);
      if (data) {
        // const response = await basicProvider.postMethod("website/create", data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="paymentPage cp">
      <TableLayoutComp title={"Razorpay"} showSwitch={true}>
        <div className="razoypayCard cp">
          <div>
            <label htmlFor="RsecretId" className="label">
              KEY ID
            </label>
            <input
              type="text"
              id="RsecretId"
              className="input"
              name="key_id"
              value={razorpay.key_id}
              placeholder="Enter KEY ID"
              onChange={razorpayHandleChange}
            />
          </div>
          <div>
            <label htmlFor="Rsecretkey" className="label">
              KEY SECRET
            </label>
            <input
              type="text"
              id="Rsecretkeyss"
              className="input"
              name="key_secret"
              value={razorpay.key_secret}
              placeholder="Enter KEY SECRET"
              onChange={razorpayHandleChange}
            />
          </div>
          <div className="cmt">
            <button className="submit" onClick={razorpayHandleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </TableLayoutComp>
      <TableLayoutComp title={"PhonePe"} showSwitch={true}>
        <div className="phonepeCard cp">
          <div>
            <label htmlFor="phonepayId" className="label">
              KEY ID
            </label>
            <input
              type="text"
              id="phonepayId"
              className="input"
              placeholder="Enter KEY ID"
            />
          </div>
          <div>
            <label htmlFor="phonepekey" className="label">
              KEY SECRET
            </label>
            <input
              type="text"
              id="phonepekey"
              className="input"
              placeholder="Enter KEY SECRET"
            />
          </div>

          <div className="cmt">
            <button className="submit">Submit</button>
          </div>
        </div>
      </TableLayoutComp>
      <TableLayoutComp title={"PayPal"} showSwitch={true}>
        <div className="paypalCard cp">
          <div>
            <label htmlFor="paypayId" className="label">
              KEY ID
            </label>
            <input
              type="text"
              id="paypayId"
              className="input"
              placeholder="Enter KEY ID"
            />
          </div>
          <div>
            <label htmlFor="paypalkey" className="label">
              KEY SECRET
            </label>
            <input
              type="text"
              id="paypalkey"
              className="input"
              placeholder="Enter KEY SECRET"
            />
          </div>

          <div className="cmt">
            <button className="submit">Submit</button>
          </div>
        </div>
      </TableLayoutComp>
      <TableLayoutComp title={"Paytm"} showSwitch={true}>
        <div className="paytmCard cp">
          <div>
            <label htmlFor="paytmId" className="label">
              KEY ID
            </label>
            <input
              type="text"
              id="paytmId"
              className="input"
              placeholder="Enter KEY ID"
            />
          </div>
          <div>
            <label htmlFor="paytmkey" className="label">
              KEY SECRET
            </label>
            <input
              type="text"
              id="paytmkey"
              className="input"
              placeholder="Enter KEY SECRET"
            />
          </div>
          <div className="cmt">
            <button className="submit">Submit</button>
          </div>
        </div>
      </TableLayoutComp>
    </div>
  );
}

export default PaymentSetting;
