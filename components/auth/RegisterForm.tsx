"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import axios from "axios";

// icons
import { HiOutlineMail } from "react-icons/hi";
import { TiUser, TiUserOutline } from "react-icons/ti";
import { CgLock } from "react-icons/cg";
import { BsFillFileEarmarkLockFill } from "react-icons/bs";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // states for form fields
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "userName":
        setUserName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // check if any field is empty
    if (
      name === "" ||
      userName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      return toast.error("Please fill all the fields");
    }

    // check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email");
    }

    // check if password is valid
    // password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return toast.error("Invalid password");
    }

    // check if password and confirm password match
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    // register user
    try {
      const res = await axios.post("/api/auth/register", {
        name,
        userName,
        email,
        password,
      });

      const data = await res.data;

      if (data.status === 201) {
        toast.success(data.message);
        router.push("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-gray-light max-w-sm w-full p-5 flex flex-col gap-5"
    >
      <div className="bg-dark-form flex items-center gap-2 rounded-xl py-3 px-5">
        <TiUserOutline className="text-2xl" />
        <input
          type="text"
          name="name"
          placeholder="full name"
          onChange={handleChange}
          className="bg-transparent flex-1 outline-none text-lg capitalize"
        />
      </div>

      <div className="bg-dark-form flex items-center gap-2 rounded-xl py-3 px-5">
        <TiUser className="text-2xl" />
        <input
          type="text"
          name="userName"
          placeholder="username"
          onChange={handleChange}
          className="bg-transparent flex-1 outline-none text-lg lowercase"
        />
      </div>

      <div className="bg-dark-form flex items-center gap-2 rounded-xl py-3 px-5">
        <HiOutlineMail className="text-2xl" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="bg-transparent flex-1 outline-none text-lg lowercase"
        />
      </div>

      <div className="bg-dark-form flex items-center gap-2 rounded-xl py-3 px-5">
        <CgLock className="text-2xl" />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          onChange={handleChange}
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
          onChange={handleChange}
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

      <ToastContainer />
    </form>
  );
};

export default RegisterForm;
