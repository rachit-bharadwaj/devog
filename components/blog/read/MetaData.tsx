"use client";

import { BlogDataWithAuthor } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { format, formatDistanceToNow } from "date-fns";

// icons
import { TiUser } from "react-icons/ti";

const MetaData = ({
  author,
  createdAt,
  title,
  updatedAt,
}: BlogDataWithAuthor) => {
  const formattedUpdatedAt = updatedAt
    ? formatDistanceToNow(new Date(updatedAt), { addSuffix: true })
    : null;

  return (
    <div>

      {author?.userName && (
        <Link
          href={`/${author?.userName}`}
          className="flex gap-2 items-center w-fit"
        >
          {author?.profilePicture ? (
            <Image
              src={author?.profilePicture}
              alt="Author"
              width={500}
              height={500}
              className="h-10 w-fit"
            />
          ) : (
            <TiUser className="text-2xl" />
          )}
          <p>{author?.name}</p>
        </Link>
      )}

      {createdAt && (
        <p className="text-gray-500">
          {format(new Date(createdAt), "MMM d, yyyy")}
        </p>
      )}

      {updatedAt && (
        <p className="text-gray-500">last updated {formattedUpdatedAt}</p>
      )}
    </div>
  );
};

export default MetaData;
