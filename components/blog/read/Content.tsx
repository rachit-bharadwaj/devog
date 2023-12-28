import dynamic from "next/dynamic";
import { blogModules, formats } from "@/constants";
import { BlogDataWithAuthor } from "@/types";

//  react quill
import "react-quill/dist/quill.snow.css";
const DynamicReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Content = ({ content }: BlogDataWithAuthor) => {
  return (
    <div>
      <DynamicReactQuill
        theme="snow"
        formats={formats}
        modules={blogModules}
        value={content}
        readOnly={true}
      />
    </div>
  );
};

export default Content;
