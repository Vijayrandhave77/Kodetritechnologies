import { useState } from "react";
import FileUplodsModule from "../../../components/modules/FileUplodsModule";
import SubHeader from "../../../components/SubHeader";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";
import JoditTextEditor from "../../../components/textEditor/JoditTextEditor";
import { useNavigate, useParams } from "react-router-dom";
import BasicProvider from "../../../authentications/BasicProvider";
import { useEffect } from "react";
import handleSubmitHelper from "../../../helpers/handleSubmitHelper";
import toast from "react-hot-toast";

function Create() {

  const { id } = useParams();
  const navigate = useNavigate()
  const basicProvider = BasicProvider()
  const [initialValues, setInitialValues] = useState({
    title: "",
    slug: "",
    content: "",
    featured: false,
    publish_date: "",
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setInitialValues((pre) => ({ ...pre, [name]: type === "checkbox" ? checked : value, }));
  };

  const fetchData = async () => {
    const response = await basicProvider.getMethod(`cms/blog/by/${id}`);
    setInitialValues(response.data);
  }

  const handleSubmit = async () => {
    let response = ''
    const data = handleSubmitHelper(initialValues)
    if (data) {
      if (id) {
        response = await basicProvider.patchMethod(`cms/blog/update/${id}`, data);
      } else {
        response = await basicProvider.postMethod("cms/blog/create", data);
        if (response.data) {
          navigate(`/cms/blog/${response?.data?._id}/edit`)
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
  }, [])
  return (
    <div>
      <SubHeader searchFilter={false}></SubHeader>
      <div className="blogPage flex">
        <div className="itemLeft">
          <TableLayoutComp title={"Main Details of Blog"}>
            <div className="blogDetailCard cp">
              <div>
                <label htmlFor="title" className="label">
                  Blog Title <span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={initialValues?.title}
                  className="input"
                  placeholder="Blog Title"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="content" className="label">
                  Content <span className="span">*</span>
                </label>
                <JoditTextEditor
                  initialValues={initialValues?.content}
                  setInitialValues={(value) => {
                    setInitialValues((pre) => ({ ...pre, content: value }))
                  }}
                ></JoditTextEditor>
              </div>
            </div>
          </TableLayoutComp>
        </div>
        <div className="itemRight">
          <TableLayoutComp title={"Publish"}>
            <div className="publishCard cp">
              <div>
                <label htmlFor="date" className="label">
                  Publish Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="publish_date"
                  value={initialValues?.publish_date}
                  className="input"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-2 cmt">
                <input type="checkbox" id="feturedblog" name="featured" value={initialValues?.featured} checked={initialValues.featured} onChange={handleChange} />
                <label htmlFor="feturedblog" className="label">
                  Featured Blog
                </label>
              </div>
              <hr className="horizontalRuler" />
              <div className="flex items-center gap-4">
                <button className="submit" onClick={handleSubmit}>Submit</button>
                <button className="cancel" onClick={() => {
                  setInitialValues({
                    title: "",
                    slug: "",
                    content: "",
                    featured: false,
                    publish_date: "",
                  })
                }}>Cancel</button>
              </div>
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"Slug"}>
            <div className="cp">
              <input type="text" className="input" name="slug" value={initialValues?.slug} onChange={handleChange} placeholder="Slug" />
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"Featured Image"}>
            <div className="cp">
              <FileUplodsModule />
            </div>
          </TableLayoutComp>
        </div>
      </div>
    </div>
  );
}

export default Create;
