import { GrUpload } from "react-icons/gr";

function FileUplodsModule({ initialValue, setInitialValue, onChange }) {
  return (
    <>
      <input type="file" id="file" className="hidden" />
      <label htmlFor="file" className="inputFile">
        <GrUpload /> <span> Choose a File...</span>
      </label>
    </>
  );
}

export default FileUplodsModule;
