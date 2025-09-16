import { useEffect, useState } from "react";
import FileUplodsModule from "../../../components/modules/FileUplodsModule";
import SubHeader from "../../../components/SubHeader";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";
import BasicProvider from "../../../authentications/BasicProvider";
import handleSubmitHelper from "../../../helpers/handleSubmitHelper";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function Create() {
  const basicProvider = BasicProvider();
  const navigate = useNavigate()
  const { id } = useParams();
  const validation = [
    {
      key: "name",
      required: true,
      maxLength: 3,
    },
    {
      key: "email",
      required: true,
      maxLength: 3,
    },
    {
      key: "mobile",
      required: true,
      maxLength: 10,
    },
    {
      key: "password",
      required: true,
      maxLength: 8,
    },
  ];
  const [status, setStatus] = useState([])
  const [error, setError] = useState({})
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confpassword: "",
    gender: "",
    dob: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitialValues((pre) => ({ ...pre, [name]: value }))
  }

  const fetchStatus = async () => {
    const response = await basicProvider.getMethod(`configuration/status/type/account`)
    if (response.status === "success") {
      setStatus(response.data)
    }
  }

  const fetchData = async () => {
    const response = await basicProvider.getMethod(
      `users/admin/customer/byId/${id}`
    );
    if (response.status === "success") {
      setInitialValues({ ...response.data, confpassword: response.data.password })
    }
  }

  const handelSubmit = async () => {
    if (initialValues.password !== initialValues.confpassword) {
      toast.error("Password and Confirm Password do not match");
      return;
    }
    let response = ''
    const data = handleSubmitHelper(initialValues, validation, setError);
    try {
      if (data) {
        if (id) {
          response = await basicProvider.patchMethod(
            `users/admin/customer/update/${id}`,
            data
          );
        } else {
          response = await basicProvider.postMethod(
            "users/admin/customer/create",
            data
          );
        }

        if (response.status === "success") {
          toast.success(response.message);
          fetchData()
          if (response?.data) {
            navigate(`/customer/${response?.data?._id}/edit`)
          }
        } else {
          toast.error(response.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStatus()
  }, [])

  useEffect(() => {
    if (id) {
      fetchData()
    }
  }, [])
  return (
    <div>
      <SubHeader searchFilter={false}></SubHeader>
      <div className="customerCreatePage flex">
        <div className="itemLeft">
          <TableLayoutComp title={"Basic Information"}>
            <div className="basicInformationCard cp">
              <div>
                <label htmlFor="name" className="label">
                  Name <span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={initialValues.name}
                  className={`input ${error.name && "customeErrorInput"}`}
                  placeholder="Enter Name"
                  onChange={handleChange}
                />
                {error?.name && (
                  <span className="customeErrorMessage">{error.name}</span>
                )}
              </div>
              <div>
                <label htmlFor="email" className="label">
                  Email <span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={initialValues.email}
                  className={`input ${error.email && "customeErrorInput"}`}
                  placeholder="Enter Your Email"
                  onChange={handleChange}
                />
                {error?.email && (
                  <span className="customeErrorMessage">{error.email}</span>
                )}
              </div>
              <div>
                <label htmlFor="mobile" className="label">
                  Mobile <span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={initialValues.mobile}
                  className={`input ${error.mobile && "customeErrorInput"}`}
                  placeholder="Enter Your Mobile Number"
                  onChange={handleChange}
                />
                {error?.mobile && (
                  <span className="customeErrorMessage">{error.mobile}</span>
                )}
              </div>
              <div>
                <label htmlFor="password" className="label">
                  Password <span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  value={initialValues.password}
                  className={`input ${error.password && "customeErrorInput"}`}
                  placeholder="Enter Your Password"
                  onChange={handleChange}
                />
                {error?.password && (
                  <span className="customeErrorMessage">{error.password}</span>
                )}
              </div>
              <div>
                <label htmlFor="confpassword" className="label">
                  Reconfirm password <span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="confpassword"
                  name="confpassword"
                  value={initialValues.confpassword}
                  className={`input ${error.confpassword && "customeErrorInput"}`}
                  placeholder="Reconfirm Your Password"
                  onChange={handleChange}
                />
                {error?.confpassword && (
                  <span className="customeErrorMessage">{error.confpassword}</span>
                )}
              </div>
            </div>
          </TableLayoutComp>
        </div>
        <div className="itemRight">
          <TableLayoutComp title={"Profile Details"}>
            <div className="profileDetailCard cp">
              <div>
                <label htmlFor="profile" className="label">
                  Profile
                </label>
                <FileUplodsModule />
              </div>
              <div className="flex gap-4 cmt">
                <span className="font-bold">Gender</span>
                <span className="flex gap-4">
                  <span className="flex gap-2 items-center">
                    <input type="radio" className="" value="male" id="male" name="gender" onChange={handleChange} checked={initialValues.gender === "male"} />
                    <label htmlFor="male" className="label">
                      Male
                    </label>
                  </span>
                  <span className="flex gap-2 items-center">
                    <input
                      type="radio"
                      id="female"
                      value="female"
                      checked={initialValues.gender === "female"}
                      name="gender"
                      onChange={handleChange}
                    />
                    <label htmlFor="female" className="label">
                      Female
                    </label>
                  </span>
                </span>
              </div>
              <div>
                <label htmlFor="dob" className="label">
                  Date Of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={initialValues.dob}
                  className="input"
                  id="dob"
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-4 cmt">
                <span>Status</span>
                {status?.map((sta, idx) => (
                  <span className="flex items-center gap-2" key={idx}>
                    <input type="radio" id={sta?.name} name="status" value={sta?.name} onChange={handleChange} checked={initialValues.status === sta.name} />
                    <label htmlFor={sta?.name} className="label">
                      {sta?.name}
                    </label>
                  </span>
                ))}
              </div>
              <div className="flex gap-4 cp cmt">
                <button className="submit" onClick={handelSubmit}>Submit</button>
                <button className="cancel" onClick={() => {
                  setInitialValues({
                    name: "",
                    email: "",
                    mobile: "",
                    password: "",
                    confpassword: "",
                    gender: "",
                    dob: "",
                    status: "",
                  })
                }}>Cancel</button>
              </div>
            </div>
          </TableLayoutComp>
        </div>
      </div>
    </div>
  );
}

export default Create;
