import { useState } from "react";
import SubHeader from "../../../components/SubHeader";
import JoditTextEditor from "../../../components/textEditor/JoditTextEditor";
import FileUplodsModule from "../../../components/modules/FileUplodsModule";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";

function Create() {
  const [initialValues, setInitialValues] = useState({
    title: "",
    content: "Hello vijay",
    tax: false,
  });

  const handelOnchange = (e) => {
    const { name, value, checked } = e.target;
    console.log(value);
    if (name === "tax") {
      setInitialValues((pre) => ({ ...pre, tax: checked }));
    }
  };
  return (
    <div>
      <SubHeader></SubHeader>
      <div className="flex">
        <div className="itemLeft">
          <TableLayoutComp title={"Main Details of Product"}>
            <div className="content">
              <div className="itemInput flex flex-col">
                <label htmlFor="title" className="title">
                  Title <span className="text-red-600">*</span>
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter Product Title"
                />
              </div>
              <div className="shortDescription">
                <label htmlFor="shortDes" className="title">
                  Short Description <span className="text-red-600">*</span>
                </label>
                <JoditTextEditor
                  initialValues={initialValues?.content}
                  setInitialValues={setInitialValues}
                />
              </div>
              <div className="longDescription">
                <label htmlFor="shortDes" className="title">
                  Long Description <span className="text-red-600">*</span>
                </label>
                <JoditTextEditor
                  initialValues={"long contenct"}
                  setInitialValues={setInitialValues}
                />
              </div>
            </div>
          </TableLayoutComp>
        </div>
        <div className="itemRight">
          <TableLayoutComp title={"Publish"}>
            <div className="publishCard">
              <div className="publishDate">
                <label htmlFor="publish" className="title">
                  Publish Date
                </label>
                <input
                  type="date"
                  value="2025-08-16"
                  name="publish"
                  id="publish"
                  className="publishInput input"
                />
              </div>
              <div className="checkbox flex flex-col">
                <label htmlFor="featured" className="flex gap-2">
                  <input type="checkbox" name="featured" id="featured" />
                  Featured Product
                </label>

                <label htmlFor="hot" className="flex gap-2">
                  <input type="checkbox" name="hot" id="hot" />
                  Hot Product
                </label>
              </div>
              <hr className="horizontalRuler" />
              <div className="publishButton">
                <button className="submit">Submit</button>
                <button className="cancel">Cancel</button>
              </div>
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"Slug"}>
            <div className="slugCard">
              <input type="text" className="slug input" placeholder="Slug" />
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"Vendor"}>
            <div className="vendorCard cp">
              <input type="text" className="input" />
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"% Tax"}>
            <div className="taxCard cp">
              <label
                htmlFor="tax"
                className="flex item-center gap-2 select-none"
              >
                <input
                  type="checkbox"
                  name="tax"
                  id="tax"
                  checked={initialValues.tax}
                  onChange={handelOnchange}
                />
                Charge tax on this product
              </label>
              {initialValues?.tax && (
                <input
                  type="text"
                  className="input cmt"
                  placeholder="Tax in %"
                />
              )}
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"Brands"}>
            <div className="brandsCard cp">
              <input type="text" className="input" />
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"Tags"}>
            <div className="tagsCard cp">
              <input type="text" className="input" />
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"Featured Image"} required={true}>
            <div className="featuredImage w-full cp">
              <FileUplodsModule />
            </div>
          </TableLayoutComp>
        </div>
      </div>
    </div>
  );
}

export default Create;
