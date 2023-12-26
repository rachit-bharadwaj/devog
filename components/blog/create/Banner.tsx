"use client";

import { useContext } from "react";
import { BlogContext } from "@/contexts/blog";
import Image from "next/image";

// icons
import { TbPhotoUp } from "react-icons/tb";

const Banner = () => {
  const { blogData, setBlogData } = useContext(BlogContext);

  const handleBannerUpload = (e: any) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setBlogData({ ...blogData, bannerImage: reader.result as string });
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="mt-3 mb-10">
      {blogData.bannerImage ? (
        <div className="aspect-[4/1] w-full">
          <label
            htmlFor="banner-uploader"
            className="w-full h-full bg-gray-light/50 text-gray-300 flex justify-center items-center flex-col gap-2 cursor-pointer"
          >
            <Image
              alt="Blog banner"
              src={blogData.bannerImage}
              width={500}
              height={500}
              className="w-full aspect-[4/1]"
            />
          </label>

          <input
            type="file"
            name="bannerUploader"
            id="banner-uploader"
            hidden
            onChange={handleBannerUpload}
            accept="image/*"
          />
        </div>
      ) : (
        <div className="aspect-[4/1] w-full">
          <label
            htmlFor="banner-uploader"
            className="w-full h-full bg-gray-light/50 text-gray-300 flex justify-center items-center flex-col gap-2 cursor-pointer"
          >
            <TbPhotoUp className="text-4xl" />
            <div className="text-center">
              Add a banner image
              <p className="text-xs text-gray-400">(1584 x 396)px</p>
            </div>
          </label>

          <input
            type="file"
            name="bannerUploader"
            id="banner-uploader"
            hidden
            onChange={handleBannerUpload}
            accept="image/*"
          />
        </div>
      )}
    </div>
  );
};
export default Banner;
