import { BlogDataWithAuthor } from "@/types";

const Title = ({title}: BlogDataWithAuthor) => {
  return <h1 className="text-3xl font-bold">{title}</h1>;
};

export default Title;
