import Embed from "@editorjs/embed";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";

// utility functions
// import { uploadImageByFile, uploadImageByURL } from "@/lib/functions";

const uploadImageByURL = async (e: any) => {
    let link = new Promise((resolve, reject) => {
      try {
        resolve(e);
      } catch (error: any) {
        reject(error);
      }
    });
  
    return link.then((url) => {
      return {
        success: 1,
        file: {
          url: url,
        },
      };
    });
  };

export const editorTools = {
  embed: Embed,
  list: {
    class: List,
    inlineToolbar: true,
  },
  image: {
    class: Image,
    config: {
      uploader: {
        uploadByUrl: uploadImageByURL,
        // uploadFile: uploadImageByFile,
      },
    },
  },
  header: {
    class: Header,
    config: {
      placeholder: "Enter a Heading",
      levels: [2, 3],
      defaultLevel: 2,
    },
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
  },
  marker: Marker,
  inlineCode: InlineCode,
};
