import { BlogDataWithAuthor } from "@/types";

const Description = ({ description }: BlogDataWithAuthor) => {
  return (
    <div>
      {description && (
        <div className="text-lg text-gray-700 dark:text-gray-300">
          {description}
        </div>
      )}
    </div>
  );
};

export default Description;
