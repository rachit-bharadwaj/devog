import Image from "next/image";

import { BlogDataWithAuthor } from "@/types";

const Banner = ({ bannerImage }: BlogDataWithAuthor) => {
  return (
    <div>
      {bannerImage && (
        <Image
          src={bannerImage}
          alt="Banner"
          width={500}
          height={500}
          className="w-full aspect-[4/1]"
        />
      )}
    </div>
  );
};

export default Banner;
