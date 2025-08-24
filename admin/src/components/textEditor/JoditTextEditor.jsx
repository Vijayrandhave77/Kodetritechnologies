import JoditEditor from "jodit-react";
import { useRef } from "react";
export default function JoditTextEditor({ initialValue, setInitialValue }) {
  const editor = useRef(null);

  return (
    <JoditEditor
      ref={editor}
      value={initialValue}
      onBlur={(newContent) =>
        setInitialValue((pre) => ({ ...pre, content: newContent }))
      }
    />
  );
}
