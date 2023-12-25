"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { UserData } from "@/types";
import { getUserData, updateProfile } from "@/lib/actions/user.action";

// react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OtherFields = () => {
  const router = useRouter();

  const [userDetails, setUserDetails] = useState<UserData>({
    name: "",
    userName: "",
    bio: "",
  });

  const [newDetails, setNewDetails] = useState<UserData>({
    name: "",
    userName: "",
    bio: "",
  });

  const [changes, setChanges] = useState(false);

  const getUserDetails = async () => {
    const userData = await getUserData();
    setUserDetails(userData);
    setNewDetails(userData);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setNewDetails({ ...newDetails, name: value });
        break;

      case "userName":
        setNewDetails({ ...newDetails, userName: value });
        break;

      case "bio":
        setNewDetails({ ...newDetails, bio: value });
        break;
    }
  };

  useEffect(() => {
    const checkChanges = () => {
      if (userDetails !== newDetails) setChanges(true);
      else setChanges(false);
    };

    checkChanges();
  }, [userDetails, newDetails, changes]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const discardChanges = () => {
    router.push(`/${userDetails.userName}`);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    await updateProfile(newDetails);
    toast.success("Profile updated");
    router.push(`/${newDetails.userName}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10 p-5">
      <div className="flex flex-col flex-1 gap-2 rounded-xl">
        <label>Name</label>
        <input
          name="name"
          defaultValue={userDetails.name}
          onChange={handleChange}
          className="bg-transparent flex-1 outline-none text-lg border-b border-gray-light rounded-l-lg px-3 capitalize"
        />
      </div>

      <div className="flex flex-col flex-1 gap-2 rounded-xl">
        <label>Username</label>
        <input
          name="userName"
          defaultValue={userDetails.userName}
          onChange={handleChange}
          className="bg-transparent flex-1 outline-none text-lg lowercase border-b border-gray-light rounded-l-lg px-3"
        />
      </div>

      <div className="flex flex-col flex-1 gap-2 rounded-xl">
        <label>Bio</label>
        <input
          name="bio"
          defaultValue={userDetails.bio}
          onChange={handleChange}
          className="bg-transparent flex-1 outline-none text-lg border-b border-gray-light rounded-l-lg px-3"
        />
      </div>

      {changes ? (
        <div className="mt-5 flex gap-5">
          <button className="py-2 px-5 rounded-xl ring-green-600 text-green-600 hover:bg-green-600/10 ring hover:font-bold">
            Save changes
          </button>

          <button
            type="button"
            onClick={discardChanges}
            className="py-2 px-5 rounded-xl ring-red-600 text-red-500 hover:bg-green-600/10 ring hover:font-bold"
          >
            Discard changes
          </button>
        </div>
      ) : (
        <div className="mt-5 flex gap-5">
          <button
            disabled
            className="py-2 px-5 rounded-xl cursor-default border text-gray-500"
          >
            Save changes
          </button>

          <button
            disabled
            type="button"
            className="py-2 px-5 rounded-xl cursor-default border text-gray-500"
          >
            Discard changes
          </button>
        </div>
      )}

      <ToastContainer />
    </form>
  );
};

export default OtherFields;
