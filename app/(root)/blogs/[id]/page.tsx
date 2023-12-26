import { BlogWrapper } from "@/containers";

// components
import { Header } from "@/components/blog/read";

const BlogPage = ({ params }: { params: { id: string } }) => {
  return (
    <BlogWrapper blogID={params.id}>
      <Header />
    </BlogWrapper>
  );
};

export default BlogPage;
