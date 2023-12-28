import { BlogWrapper } from "@/containers";

const BlogPage = ({ params }: { params: { id: string } }) => {
  return <BlogWrapper className="p-5 flex flex-col gap-5" blogID={params.id}></BlogWrapper>;
};

export default BlogPage;
