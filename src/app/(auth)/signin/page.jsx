"use client";
import MyContainer from "@/components/Container/MyContainer";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const SignInPage = () => {
  const [isShowPass, setIsShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = async (data) => {
    const { data: newData, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message, { position: "bottom-center" });
    } else {
      toast.success("Sign in successfully!", { position: "bottom-center" });
    }
  };

  return (
    <MyContainer className="my-20">
      <div className="bg-base-200 border-base-300 rounded-box  border px-5 py-15 max-w-160 mx-auto">
        <h3 className="font-semibold text-2xl md:text-3xl text-[#403F3F] text-center">
          Login your account
        </h3>
        <form onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset ">
            <label className="label font-semibold text-lg text-[#403F3F] mt-10">
              Email address
            </label>
            <input
              {...register("email", {
                required: "Email field is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              type="text"
              className="input w-full mt-2"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <label className="label font-semibold text-lg mt-4 text-[#403F3F]">
              Password
            </label>
            <div className="mt-2">
              <div className="input w-full">
                <input
                  {...register("password", {
                    required: "Password field is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  type={isShowPass ? "text" : "password"}
                  placeholder="Password"
                />

                <span
                  onClick={() => setIsShowPass(!isShowPass)}
                  className="cursor-pointer"
                >
                  {isShowPass ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                </span>
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <button type="submit" className="btn btn-neutral mt-6">
              Login
            </button>
          </fieldset>
        </form>
        <p className="text-center font-semibold text-[#706F6F] mt-7">
          Don't Have An Account ?{" "}
          <Link
            href="/signup"
            className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] text-transparent bg-clip-text"
          >
            Register
          </Link>
        </p>
      </div>
    </MyContainer>
  );
};

export default SignInPage;
