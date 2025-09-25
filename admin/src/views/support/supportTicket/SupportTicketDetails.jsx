import { MdCall, MdEmail } from "react-icons/md";
import { IoIosAttach, IoMdSend } from "react-icons/io";
import BasicProvider from "../../../authentications/BasicProvider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import handleSubmitHelper from "../../../helpers/handleSubmitHelper";
import toast from "react-hot-toast";
function SupportTicketDetails() {
  const basicProvider = BasicProvider();
  const { id } = useParams();
  const [data, setData] = useState({});
  const validation = [
    {
      key: "message",
      required: true,
      maxLength: 3,
    },
  ];
  const [error, setError] = useState({});
  const [initialValues, setinitialValues] = useState({
    message: "",
    gallery: [],
    status: "open",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setinitialValues((pre) => ({ ...pre, [name]: value }));
  };

  const fetchData = async () => {
    const response = await basicProvider.getMethod(
      `support/support-ticket/by/${id}`
    );
    setData(response.data);
    setinitialValues((pre) => ({ ...pre, status: response?.data?.status }));
  };

  const handleSubmit = async () => {
    const data = handleSubmitHelper(initialValues, validation, setError);
    if (error?.message) {
      toast.error(error?.message);
    }
    if (data) {
      const response = await basicProvider.patchMethod(
        `support/support-ticket/reply/${id}`,
        data
      );
      if (response.status === "success") {
        setinitialValues({
          message: "",
          gallery: [],
          status: "open",
        });
        fetchData();
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <>
      <div className="supportHeader">
        <div>
          <div>
            <span className="font-bold">Ticket</span> / #{data?.ticket_no}
          </div>
          <div>
            <span className="font-bold">Subject : </span>
            {data?.subject}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <span>Priority :</span>{" "}
            <button className="support-priority">{data?.priority}</button>
          </div>
          <button className="">
            <span>Created At : </span>
            {data?.createdAt}
          </button>
        </div>
      </div>
      <div className="support-ticket-details">
        <div className="supportLeft">
          <div className="containet">
            {data?.message?.map((msg) => (
              <>
                {msg?.from === "customer" && (
                  <div style={{ padding: "0.5rem" }}>
                    <div className="customerReplay">
                      <div
                        className="bg-[#EBEDEF]"
                        style={{ padding: "0.5rem", borderRadius: "8px" }}
                      >
                        {msg?.message}
                      </div>
                      <div
                        className="flex items-center gap-2 cpl"
                        style={{ marginTop: "4px" }}
                      >
                        {msg?.from === "customer" && (
                          <span>{msg?.createdAt}</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {msg?.from === "admin" && (
                  <div
                    className="w-full flex justify-end items-end float-end"
                    style={{ padding: "0.5rem" }}
                  >
                    <div className="adminReplay">
                      <div
                        className="bg-[#D2E6F8]"
                        style={{ padding: "0.5rem", borderRadius: "8px" }}
                      >
                        {msg?.message}
                      </div>
                      <div
                        className="flex items-center gap-2 justify-end cpr"
                        style={{ marginTop: "4px" }}
                      >
                        {msg?.from === "admin" && <span>{msg?.createdAt}</span>}
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>

          <div className="supportReplay">
            <div className="flex items-center gap-5">
              <div>
                <label htmlFor="files">
                  <IoIosAttach className="text-2xl cursor-pointer" />
                </label>
                <input type="file" id="files" className="hidden" />
              </div>
              <textarea
                type="text"
                name="message"
                onChange={handleChange}
                value={initialValues?.message}
                className="inputReplay"
                placeholder="Replay..."
              ></textarea>
            </div>
            <div>
              <IoMdSend
                className="text-blue-400 text-2xl cursor-pointer"
                onClick={handleSubmit}
              />
            </div>

            <select
              name="status"
              value={initialValues?.status}
              onChange={handleChange}
              className="input supportStatus"
            >
              <option value="open">Open</option>
              <option value="close">Close</option>
            </select>
          </div>
        </div>

        <div className="supportRight">
          <div>
            <div className="flex items-center gap-2">
              <img
                width={45}
                src="https://www.selectmarket.ae/wp-content/uploads/2016/05/5ed0bc59411f1356d4fdf40b_dummy-person.png"
                alt=""
              />
              <span>{data?.customer?.name}</span>
            </div>
            <hr className="horizontalRuler" />
            <div className="cmt">
              <div className="flex items-center gap-2">
                <MdEmail /> {data?.customer?.email}
              </div>
              <div className="flex items-center gap-2">
                <MdCall /> {data?.customer?.mobile}
              </div>
            </div>
          </div>

          <div className="itemsDetails cmt">
            <div className="font-bold" style={{ marginBottom: "0.3rem" }}>
              Item Name
            </div>
            <div className="w-full flex items-center gap-2">
              <div className="itemImage">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=578&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>

              <div className="itemName">
                boAt Rockerz 425 w/ 25 hrs Playtime,40 mm Drivers
              </div>
            </div>
          </div>
          <div>
            <img src="/support.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportTicketDetails;
