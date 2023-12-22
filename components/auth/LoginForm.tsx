"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import axios from "axios";

// icons
import { HiOutlineMail } from "react-icons/hi";
import { CgLock } from "react-icons/cg";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  // states for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // check if any field is empty
    if (email === "" || password === "") {
      return toast.error("Please fill all the fields");
    }

    // check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email");
    }

    // register user
    try {
      const res = await axios.post("/api/auth/login", { email, password });

      const data = await res.data;

      console.log(data);

      if (data.status === 200) {
        toast.success(data.message);
        router.push("/");
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

      <button className="bg-gray-200 text-xl font-bold py-3 rounded-xl text-dark">
        Login
      </button>

      <ToastContainer />
    </form>
  );
};

export default LoginForm;
