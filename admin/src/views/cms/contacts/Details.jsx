import { useEffect, useState } from "react";
import BasicProvider from "../../../authentications/BasicProvider";
import { useParams } from "react-router-dom";

function Details() {
  const basicProvider = BasicProvider();
  const params = useParams();
  const [data, setData] = useState({});
  const { id } = params;
  const fetchData = async () => {
    const response = await basicProvider.getMethod(`cms/contact/by/${id}`);
    if (response.status === "success") {
      setData(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="contactDetailPage">
      <div className="contactLeft">
        <div className="contactCard">
          <div className="imgSection">
            <img
              src="https://www.selectmarket.ae/wp-content/uploads/2016/05/5ed0bc59411f1356d4fdf40b_dummy-person.png"
              alt=""
            />
            <span>{data?.customer?.name || data.values?.name}</span>
            <span>{data?.customer?.email || data.values?.email}</span>
          </div>
          <hr className="horizontalRuler" />
          <div className="contactDetails">
            {data?.values &&
              Object?.entries(data?.values)?.map(([key, value]) => (
                <div className="flex gap-2 items-center" key={key}>
                  <label htmlFor="" className="label font-bold">
                    {key} :
                  </label>
                  <span>{value}</span>
                </div>
              ))}
            {data?.values?.message && (
              <div>
                <label htmlFor="" className="label">
                  Message
                </label>
                <textarea name="" className="input" readOnly id=""></textarea>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="contactRight">
        <div>
          <h4 className="text-center font-bold">Submission Info</h4>
        </div>
        <div className="cmt">
          <div>
            <span className="font-bold text-sm">Date :</span>{" "}
            <span>{data?.createdAt}</span>
          </div>
          <div>
            <span className="font-bold text-sm">Customer Id :</span>{" "}
            <span>{id}</span>
          </div>
          <div>
            <img src="/contactDetails.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
