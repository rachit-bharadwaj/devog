"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { UserData } from "@/types";

import {
  getUserData,
  removeProfilePicture,
  updateProfilePicture,
} from "@/lib/actions/user.action";

// shad cn
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// icons
import { TiUser } from "react-icons/ti";
import { TbPhotoEdit, TbPhotoPlus } from "react-icons/tb";
import { IoMdTrash } from "react-icons/io";

const PhotoSection = () => {
  const [userDetails, setUserDetails] = useState<UserData>({
    profilePicture: "",
  });
  const [previewURL, setPreviewURL] = useState("");

  const getUserDetails = async () => {
    const userData = await getUserData();
    setUserDetails(userData);
  };

  const handleInput = (e: any) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewURL(reader.result as string);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const uploadPhoto = async () => {
    await updateProfilePicture(previewURL);
    setPreviewURL("");
  };

  const unselectPhoto = () => {
    setPreviewURL("");
  };

  const removePhoto = () => {
    removeProfilePicture();
  };

  useEffect(() => {
    getUserDetails();
  });

  return (
    <section className="my-5">
      <Drawer>
        <DrawerTrigger>
          {userDetails?.profilePicture ? (
            <button>
              <Image
                src={userDetails?.profilePicture}
                alt="profile picture"
                width={500}
                height={500}
                className="rounded-full w-20 h-20"
              />
            </button>
          ) : (
            <div className="bg-gray-700 p-5 rounded-full w-fit">
              <TiUser className="text-7xl" />
            </div>
          )}
        </DrawerTrigger>
        <DrawerContent>
          {userDetails.profilePicture ? (
            <div className="flex flex-col gap-5 p-5">
              <Dialog>
                <DialogTrigger>
                  <button className="flex gap-3 items-center w-fit">
                    {userDetails?.profilePicture && (
                      <Image
                        src={userDetails.profilePicture}
                        alt="profile picture"
                        width={500}
                        height={500}
                        className="rounded-full w-7 h-7"
                      />
                    )}
                    View profile picture
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <Image
                    src={userDetails?.profilePicture}
                    alt="profile picture"
                    width={500}
                    height={500}
                    className="w-full h-fit"
                  />
                </DialogContent>
              </Dialog>

              <button className="flex gap-3 items-center w-fit">
                <label
                  htmlFor="profile-pic"
                  className="flex gap-3 items-center cursor-pointer"
                >
                  <TbPhotoEdit className="text-3xl text-yellow-600" />
                  New profile picture
                </label>
                <input
                  type="file"
                  name="profile-pic"
                  accept=".jpeg, .png, .jpg, .svg"
                  id="profile-pic"
                  hidden
                  onChange={handleInput}
                />
              </button>

              {previewURL && (
                <div>
                  <p className="text-lg">Selected image</p>
                  <Image
                    src={previewURL}
                    alt="Preview"
                    width={500}
                    height={500}
                    className="h-72 w-fit"
                  />
                  <div className="my-5 flex gap-5">
                    <button
                      onClick={uploadPhoto}
                      className="bg-green-500 px-5 py-2 rounded-xl text-lg"
                    >
                      Confirm
                    </button>

                    <button
                      onClick={unselectPhoto}
                      className="bg-red-500 px-5 py-2 rounded-xl text-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              <button
                onClick={removePhoto}
                className="flex gap-3 items-center w-fit"
              >
                <IoMdTrash className="text-3xl text-red-600" />
                Remove current picture
              </button>
            </div>
          ) : (
            <div className="p-5 flex flex-col gap-5">
              <button className="flex gap-3 items-center w-fit">
                <label
                  htmlFor="profile-pic"
                  className="flex gap-3 items-center cursor-pointer"
                >
                  <TbPhotoPlus className="text-3xl text-green-600" />
                  Add profile picture
                </label>
                <input
                  type="file"
                  name="profile-pic"
                  accept=".jpeg, .png, .jpg, .svg"
                  id="profile-pic"
                  hidden
                  onChange={handleInput}
                />
              </button>

              {previewURL && (
                <div>
                  <p className="text-lg">Selected image</p>
                  <Image
                    src={previewURL}
                    alt="Preview"
                    width={500}
                    height={500}
                    className="h-72 w-fit"
                  />
                  <div className="my-5 flex gap-5">
                    <button
                      onClick={uploadPhoto}
                      className="bg-green-500 px-5 py-2 rounded-xl text-lg"
                    >
                      Confirm
                    </button>

                    <button
                      onClick={unselectPhoto}
                      className="bg-red-500 px-5 py-2 rounded-xl text-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </section>
  );
};

export default PhotoSection;
