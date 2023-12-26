import { BlogContextInterface, BlogDataContextInterface } from "@/interfaces";
import { BlogData, BlogDataWithAuthor } from "@/types";

export const modules = {
  toolbar: [
    [{ header: [] }, { font: [] }],
    [{ size: [] }],
    [{ align: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export const blogModules = {
  toolbar: false,
};

export const blogDefaultValues = {
  _id: "",
  title: "",
  bannerImage: "",
  description: "",
  content: "",
  author: "",
  createdAt: "",
  updatedAt: "",
};

export const blogContextDefaultState = {
  blogData: {
    _id: "",
    title: "",
    bannerImage: "",
    description: "",
    content: "",
    author: "",
    createdAt: "",
    updatedAt: "",
  },
  setBlogData: (blogData: BlogData) => {},
} as BlogContextInterface;

export const blogDataContextDefaultState = {
  blogDataWithAuthor: {
    _id: "",
    title: "",
    bannerImage: "",
    description: "",
    content: "",
    author: {
      name: "",
      userName: "",
      profilePicture: "",
    },
    createdAt: "",
    updatedAt: "",
  },

  setBlogDataWithAuthor: (blogDataWithAuthor: BlogDataWithAuthor) => {},
} as BlogDataContextInterface;


export const blogDataDefaultValues = {
  _id: "",
    title: "",
    bannerImage: "",
    description: "",
    content: "",
    author: {
      name: "",
      userName: "",
      profilePicture: "",
    },
    createdAt: "",
    updatedAt: "",
};