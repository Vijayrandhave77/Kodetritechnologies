import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

function SummernoteEditor({ initialValue, setInitialValue }) {
  return (
    <ReactQuill
      theme="snow"
      value={initialValue}
      onChange={(data) => {
        setInitialValue((pre) => ({ ...pre, content: data }));
      }}
    />
  );
}

export default SummernoteEditor;
