import { Banner, Description, Header, TextEditor } from "@/components/blog/create";

const CreateBlogPage = () => {
  return (
    <div className="p-5">
      <Header />

      <Description />

      <Banner />

      <TextEditor />
    </div>
  );
};

export default CreateBlogPage;
