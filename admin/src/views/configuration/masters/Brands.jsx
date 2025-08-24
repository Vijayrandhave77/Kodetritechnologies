import FileUplodsModule from "../../../components/modules/FileUplodsModule";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";

function Brands() {
  return (
    <div>
      <div className="brandsPage flex">
        <div className="itemRight">
          <TableLayoutComp title={"Create Brands"}>
            <div className="brandscard cp">
              <div>
                <label htmlFor="name" className="label">
                  Create Brands<span className="span">*</span>
                </label>
                <textarea name="name" id="name" className="textarea"></textarea>
              </div>
              <div>
                <label htmlFor="featuredimage" className="label">
                  Feature Image
                </label>
                <FileUplodsModule />
              </div>
              <div className="cp">
                <button className="submit">Submit</button>
              </div>
            </div>
          </TableLayoutComp>
        </div>
        <div className="itemLeft"></div>
      </div>
    </div>
  );
}

export default Brands;
