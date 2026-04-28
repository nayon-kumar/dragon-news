"use client";
import MyContainer from "@/components/Container/MyContainer";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <MyContainer className="my-20">
      <div className="bg-base-200 border-base-300 rounded-box  border px-5 py-15 max-w-160 mx-auto">
        <h3 className="font-semibold text-3xl text-[#403F3F] text-center">
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
              })}
              type="email"
              className="input w-full mt-2"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <label className="label font-semibold text-lg mt-4 text-[#403F3F]">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password field is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              type="password"
              className="input w-full mt-2"
              placeholder="Password"
            />
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
