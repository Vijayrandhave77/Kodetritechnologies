import FileUplodsModule from "../../../components/modules/FileUplodsModule";
import SubHeader from "../../../components/SubHeader";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";
import JoditTextEditor from "../../../components/textEditor/JoditTextEditor";

function Create() {
  return (
    <div>
      <SubHeader searchFilter={false}></SubHeader>
      <div className="blogPage flex">
        <div className="itemLeft">
          <TableLayoutComp title={"Main Details of Blog"}>
            <div className="blogDetailCard cp">
              <div>
                <label htmlFor="name" className="label">
                  Blog Title <span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="input"
                  placeholder="Blog Title"
                />
              </div>
              <div>
                <label htmlFor="content" className="label">
                  Content <span className="span">*</span>
                </label>
                <JoditTextEditor
                  initialValues={"Write sometting here"}
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
                  type="text"
                  id="date"
                  className="input"
                  value="2025-08-20"
                />
              </div>
              <div className="flex items-center gap-2 cmt">
                <input type="checkbox" id="feturedblog" />
                <label htmlFor="feturedblog" className="label">
                  Featured Blog
                </label>
              </div>
              <hr className="horizontalRuler" />
              <div className="flex items-center gap-4">
                <button className="submit">Submit</button>
                <button className="cancel">Cancel</button>
              </div>
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"Slug"}>
            <div className="cp">
              <input type="text" className="input" placeholder="Slug" />
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"Featured Image"}>
            <div className="cp">
              <FileUplodsModule />
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"Tags"}>
            <div className="cp">
              <select name="tag" id="tag" className="input">
                <option value="" selected disabled>
                  Select..
                </option>
              </select>
            </div>
          </TableLayoutComp>
        </div>
      </div>
    </div>
  );
}

export default Create;
