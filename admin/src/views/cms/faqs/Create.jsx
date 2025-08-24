import SubHeader from "../../../components/SubHeader";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";
import JoditTextEditor from "../../../components/textEditor/JoditTextEditor";

function Create() {
  return (
    <div>
      <SubHeader searchFilter={false}></SubHeader>
      <div className="faqsPage flex">
        <div className="itemLeft">
          <TableLayoutComp title={"Main Details of FAQs"}>
            <div className="faqsDetailCard cp">
              <div>
                <label htmlFor="name" className="label">
                  FAQ Title <span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="input"
                  placeholder="FAQ Title"
                />
              </div>
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"List of FAQ's"} addButton={true}>
            <div className="listoffaqsCard cp">
              <div>
                <label htmlFor="question" className="label">
                  Your Question <span className="span">*</span>
                </label>
                <input
                  type="text"
                  id="question"
                  className="input"
                  placeholder="Your Question"
                />
              </div>
              <div className="cmt">
                <JoditTextEditor
                  initialValue={"Write sometting here"}
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
        </div>
      </div>
    </div>
  );
}

export default Create;
