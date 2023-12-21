"use client";

import { useState } from "react";

// icons
import { HiOutlineMail } from "react-icons/hi";
import { TiUser, TiUserOutline } from "react-icons/ti";
import { CgLock } from "react-icons/cg";
import { BsFillFileEarmarkLockFill } from "react-icons/bs";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form className="text-gray-light max-w-sm w-full p-5 flex flex-col gap-5">
      <div className="bg-dark-form flex items-center gap-2 rounded-xl py-3 px-5">
        <TiUserOutline className="text-2xl" />
        <input
          type="text"
          name="name"
          placeholder="full name"
          className="bg-transparent flex-1 outline-none text-lg capitalize"
        />
      </div>

      <div className="bg-dark-form flex items-center gap-2 rounded-xl py-3 px-5">
        <TiUser className="text-2xl" />
        <input
          type="text"
          name="userName"
          placeholder="username"
          className="bg-transparent flex-1 outline-none text-lg lowercase"
        />
      </div>

      <div className="bg-dark-form flex items-center gap-2 rounded-xl py-3 px-5">
        <HiOutlineMail className="text-2xl" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-transparent flex-1 outline-none text-lg lowercase"
        />
      </div>

      <div className="bg-dark-form flex items-center gap-2 rounded-xl py-3 px-5">
        <CgLock className="text-2xl" />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          className="bg-transparent flex-1 outline-none text-lg"
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <FaEyeSlash className="text-2xl" />
          ) : (
            <FaRegEye className="text-2xl" />
          )}
        </button>
      </div>

      <div className="bg-dark-form flex items-center gap-2 rounded-xl py-3 px-5">
        <BsFillFileEarmarkLockFill className="text-2xl" />
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          className="bg-transparent flex-1 outline-none text-lg"
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? (
            <FaEyeSlash className="text-2xl" />
          ) : (
            <FaRegEye className="text-2xl" />
          )}
        </button>
      </div>

      <button className="bg-gray-200 text-xl font-bold py-3 rounded-xl text-dark">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
