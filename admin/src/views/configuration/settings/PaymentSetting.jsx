import TableLayoutComp from "../../../components/Tables/TableLayoutComp";

function PaymentSetting() {
  return (
    <div className="paymentPage cp">
      <TableLayoutComp title={"Razorpay"} showSwitch={true}>
        <div className="razoypayCard cp">
          <div>
            <label htmlFor="Rsecretkey" className="label">
              KEY SECRET
            </label>
            <input
              type="text"
              id="Rsecretkeyss"
              className="input"
              placeholder="Enter KEY SECRET"
            />
          </div>
          <div>
            <label htmlFor="RsecretId" className="label">
              KEY ID
            </label>
            <input
              type="text"
              id="RsecretId"
              className="input"
              placeholder="Enter KEY ID"
            />
          </div>
          <div className="cmt">
            <button className="submit">Submit</button>
          </div>
        </div>
      </TableLayoutComp>
      <TableLayoutComp title={"PhonePe"} showSwitch={true}>
        <div className="phonepeCard cp">
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
          <div className="cmt">
            <button className="submit">Submit</button>
          </div>
        </div>
      </TableLayoutComp>
      <TableLayoutComp title={"PayPal"} showSwitch={true}>
        <div className="paypalCard cp">
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
          <div className="cmt">
            <button className="submit">Submit</button>
          </div>
        </div>
      </TableLayoutComp>
      <TableLayoutComp title={"Paytm"} showSwitch={true}>
        <div className="paytmCard cp">
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
          <div className="cmt">
            <button className="submit">Submit</button>
          </div>
        </div>
      </TableLayoutComp>
    </div>
  );
}

export default PaymentSetting;
