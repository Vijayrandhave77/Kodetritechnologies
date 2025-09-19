import { useEffect, useState } from "react";
import SubHeader from "../../../components/SubHeader";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";
import handleSubmitHelper from "../../../helpers/handleSubmitHelper";
import BasicProvider from "../../../authentications/BasicProvider";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

function Create() {
  const { id } = useParams();
  const navigate = useNavigate()
  const basicProvider = BasicProvider()
  const [initialValues, setInitialValues] = useState({
    name: "",
    title: "",
    slug: "",
    rating: "",
    description: "",
    publish_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitialValues((pre) => ({ ...pre, [name]: value }));
  };

  const fetchData = async () => {
    const response = await basicProvider.getMethod(`cms/testimonial/by/${id}`);
    setInitialValues(response.data);
  }

  const handleSubmit = async () => {
    let response = ''
    const data = handleSubmitHelper(initialValues)
    if (data) {
      if (id) {
        response = await basicProvider.patchMethod(`cms/testimonial/update/${id}`, data);
      } else {
        response = await basicProvider.postMethod("cms/testimonial/create", data);
        if (response?.data) {
          navigate(`/cms/testimonials/${response?.data?._id}/edit`)
        }
      }
    }

    if (response.status === "success") {
      toast.success(response.message);
      fetchData();
    } else {
      toast.error(response.message);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData()
    }
  }, [id])

  return (
    <div>
      <SubHeader searchFilter={false}></SubHeader>
      <div className="faqsPage flex">
        <div className="itemLeft">
          <TableLayoutComp title={"Main Details of Testimonials"}>
            <div className="testimonialDetailCard cp">
              <div>
                <label htmlFor="name" className="label">
                  Name <span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={initialValues?.name}
                  className="input"
                  placeholder="Testimonial Name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="title" className="label">
                  Title <span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={initialValues?.title}
                  className="input"
                  placeholder="Testimonial Title"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="rating" className="label">
                  Rating <span className="span">*</span>
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  value={initialValues?.rating}
                  className="input"
                  placeholder="Testimonial Rating"
                  onChange={handleChange}
                />
              </div>
            </div>
          </TableLayoutComp>

          <TableLayoutComp
            title={"Description"}

          >
            <div className="cp">
              <textarea type="textarea" className="input" style={{ height: "150px" }} name="description" placeholder="Enter descriptions" value={initialValues?.description} onChange={handleChange} />
            </div>
          </TableLayoutComp>
        </div>

        <div className="itemRight">
          <TableLayoutComp title={"Publish"}>
            <div className="publishCard cp">
              <div>
                <label htmlFor="publish_date" className="label">
                  Publish Date
                </label>
                <input
                  type="date"
                  id="publish_date"
                  name="publish_date"
                  className="input"
                  value={initialValues?.publish_date}
                  onChange={handleChange}
                />
              </div>
              <hr className="horizontalRuler" />
              <div className="flex items-center gap-4">
                <button className="submit" onClick={handleSubmit}>
                  Submit
                </button>
                <button className="cancel" onClick={() => {
                  setInitialValues({
                    name: "",
                    title: "",
                    slug: "",
                    rating: null,
                    description: "",
                    publish_date: "",
                  })
                }}>Cancel</button>
              </div>
            </div>
          </TableLayoutComp>

          <TableLayoutComp title={"Slug"}>
            <div className="cp">
              <input
                type="text"
                name="slug"
                value={initialValues?.slug}
                className="input"
                placeholder="Slug"
                onChange={handleChange}
              />
            </div>
          </TableLayoutComp>
        </div>
      </div>
    </div>
  );
}

export default Create;
