import NoRecords from "../../../components/NoRecords";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import TablePagination from "@mui/material/TablePagination";
import { MdCreate } from "react-icons/md";
import { useEffect, useState } from "react";
import {
  NavLink,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import DeleteSweetalert from "../../../components/DeleteSweetalert";
import BasicProvider from "../../../authentications/BasicProvider";
import handleSubmitHelper from "../../../helpers/handleSubmitHelper";
import toast from "react-hot-toast";

function Status() {
  const basicProvider = BasicProvider();
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const navigate = useNavigate();

  const page = searchParams.get("page") || 1;
  const count = searchParams.get("count") || 5;
  const [data, setData] = useState([]);
  const [statusType, setStusType] = useState([]);
  const [type, setType] = useState(false);
  const [pagination, setPagination] = useState({});
  const validations = [
    {
      key: "name",
      required: true,
      maxLength: 3,
    },
    {
      key: "color",
      required: true,
      maxLength: 3,
    },
    {
      key: "type",
      required: true,
      maxLength: 3,
    },
  ];
  const [initialValues, setInitialValues] = useState({
    name: "",
    color: "",
    type: "",
  });
  const [multiDelete, setMultiDelete] = useState([]);
  const [error, setError] = useState({});

  const handelChange = (e) => {
    const { name, value } = e.target;

    setInitialValues((pre) => ({
      ...pre,
      [name]: value,
    }));
    if (value === "other") {
      setType(true);
    } else {
      setType(false);
    }
  };

  const handleMultiDelete = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setMultiDelete((pre) => [...pre, value]);
    } else {
      setMultiDelete((pre) => pre.filter((id) => id !== value));
    }
  };

  const fetchData = async () => {
    try {
      const response = await basicProvider.getMethod(
        `configuration/status?page=${page}&count=${count}`
      );
      setData(response?.data?.data);
      setStusType(response.type);
      setPagination(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchStatusById = async () => {
    try {
      const response = await basicProvider.getMethod(
        `configuration/status/get/${id}`
      );
      setInitialValues(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const data = handleSubmitHelper(initialValues, validations, setError);
      let response = null;
      if (data) {
        if (id) {
          response = await basicProvider.patchMethod(
            `configuration/status/update/${id}`,
            data
          );
          if (response.status === "success") {
            toast.success(response.message);
            fetchData();
            setInitialValues({
              name: "",
              color: "",
              type: "",
            });
            setType(false);
          } else {
            toast.error(response.message);
          }
        } else {
          response = await basicProvider.postMethod(
            `configuration/status/create`,
            data
          );
          if (response.status === "success") {
            toast.success(response.message);
            fetchData();
            setInitialValues({
              name: "",
              color: "",
              type: "",
            });
            setType(false);
          } else {
            toast.error(response.message);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count, page]);

  useEffect(() => {
    fetchStatusById();
  }, [id]);

  return (
    <div>
      <div className="statusPage flex">
        <div className="itemRight">
          <TableLayoutComp title={"Status"}>
            <div className="statuscard cp">
              <div>
                <label htmlFor="name" className="label">
                  Status Name<span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={initialValues?.name}
                  className={`input ${error.name && "customeErrorInput"}`}
                  placeholder="Status name"
                  onChange={handelChange}
                />
                {error?.name && (
                  <span className="customeErrorMessage">{error.name}</span>
                )}
              </div>
              <div>
                <label htmlFor="color" className="label">
                  Color<span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="color"
                  name="color"
                  value={initialValues?.color}
                  className={`input ${error.color && "customeErrorInput"}`}
                  placeholder="Color name"
                  onChange={handelChange}
                />
                {error?.color && (
                  <span className="customeErrorMessage">{error.color}</span>
                )}
              </div>
              <div>
                <label htmlFor="type" className="label">
                  Status Type<span className="span">*</span>
                </label>
                <select
                  name="type"
                  id="type"
                  value={initialValues?.type}
                  className={`input ${error.type && "customeErrorInput"}`}
                  onChange={handelChange}
                >
                  <option value="" disabled>
                    Select Type
                  </option>
                  {statusType?.map((typ, idx) => (
                    <option key={idx} value={typ?._id}>
                      {typ?._id}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>
              {type && (
                <div>
                  <label htmlFor="other" className="label">
                    Other
                  </label>
                  <input
                    type="text"
                    id="other"
                    className="input"
                    name="other"
                    placeholder="Enter Type"
                    onChange={(e) => {
                      setInitialValues((pre) => ({
                        ...pre,
                        type: e.target.value,
                      }));
                    }}
                  />
                </div>
              )}
              <div className="cp flex gap-4">
                <button className="submit" onClick={handleSubmit}>
                  Submit
                </button>
                <button
                  className="cancel"
                  onClick={() => {
                    setInitialValues({
                      name: "",
                      color: "",
                      type: "",
                    });
                    navigate("/master/status");
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </TableLayoutComp>
        </div>
        <div className="itemLeft">
          {data?.length === 0 ? (
            <>
              <NoRecords />
            </>
          ) : (
            <div className="itemTable">
              {multiDelete && multiDelete.length > 0 && (
                <div className="w-full cp flex items-center justify-between text-2xl">
                  <div style={{ fontSize: "16px" }}>
                    {multiDelete?.length} selecte to Delete
                  </div>
                  <DeleteSweetalert
                    type={"multi-delete"}
                    multiDelete={multiDelete}
                    refresh={fetchData}
                  />
                </div>
              )}
              <Box sx={{ width: "100%" }}>
                <Paper sx={{ width: "100%", mb: 2 }}>
                  <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setMultiDelete(data.map((row) => row._id));
                                } else {
                                  setMultiDelete([]);
                                }
                              }}
                            />
                          </TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell align="center">Color</TableCell>
                          <TableCell align="center">Type</TableCell>
                          <TableCell align="center">Created</TableCell>
                          <TableCell align="center">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data?.map((row) => (
                          <TableRow
                            key={row._id}
                            hover
                            sx={{ cursor: "pointer" }}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                name={row.name}
                                value={row._id}
                                color="primary"
                                checked={multiDelete.includes(row._id)}
                                onChange={handleMultiDelete}
                              />
                            </TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.color}</TableCell>
                            <TableCell align="center">{row.type}</TableCell>

                            <TableCell align="center">
                              {row.createdAt}
                            </TableCell>
                            <TableCell align="center">
                              <div className="flex items-center gap-1 text-2xl">
                                <NavLink to={`/master/status/${row._id}/edit`}>
                                  <MdCreate className="text-blue-500" />
                                </NavLink>
                                <DeleteSweetalert
                                  type={"delete"}
                                  deleteID={row?._id}
                                  refresh={fetchData}
                                />
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[5, 15, 30, 45, 100]}
                    component="div"
                    count={pagination?.totalData}
                    rowsPerPage={pagination?.limit || 5}
                    page={pagination?.page - 1}
                    onPageChange={(e, newPage) => {
                      console.log(newPage);
                      setSearchParams(`?page=${newPage + 1}`);
                    }}
                    onRowsPerPageChange={(e) => {
                      setSearchParams(`?count=${e.target.value}`);
                    }}
                  />
                </Paper>
              </Box>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
{
}
export default Status;
