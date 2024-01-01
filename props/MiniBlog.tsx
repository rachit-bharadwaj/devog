"use client";

import { BlogData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MiniBlog = ({
  _id,
  bannerImage,
  createdAt,
  description,
  title,
}: BlogData) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const convertToDate = () => {
      const newDate = new Date(createdAt!).toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      setDate(newDate);
    };

    convertToDate();
  }, [createdAt]);

  return (
    <Link
      href={`/blogs/${_id}`}
      className="shadow rounded-xl w-80 bg-[#1c1f26] bg-blur p-5 flex flex-col gap-5"
    >
      <div>
        <p className="text-2xl font-extrabold">{title}</p>
        {date && <p className="text-sm text-gray-400">{date}</p>}
      </div>
      {bannerImage && (
        <Image
          src={bannerImage}
          alt={title!}
          width={500}
          height={500}
          className="aspect-[4/1] w-96 rounded-xl"
        />
      )}
      <p className="text-lg text-gray-300 overflow-hidden line-clamp-3">
        {description}
      </p>
    </Link>
  );
};

export default MiniBlog;
