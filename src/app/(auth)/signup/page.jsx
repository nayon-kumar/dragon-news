"use client";
import MyContainer from "@/components/Container/MyContainer";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = async (data) => {
    const { data: newData, error } = await authClient.signUp.email(data);
    if (error) {
      toast.error(error.message, { position: "bottom-center" });
    } else {
      toast.success("Sign up successfully!", { position: "bottom-center" });
    }
  };

  return (
    <MyContainer className="my-20">
      <div className="bg-base-200 border-base-300 rounded-box  border px-5 py-15 max-w-160 mx-auto">
        <h3 className="font-semibold text-2xl md:text-3xl text-[#403F3F] text-center">
          Register your account
        </h3>
        <form onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset ">
            <label className="label font-semibold text-lg text-[#403F3F] mt-10">
              Name
            </label>
            <input
              {...register("name", { required: "Name field is required" })}
              type="text"
              className="input w-full mt-2"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            <label className="label font-semibold text-lg mt-6 text-[#403F3F]">
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

            <label className="label font-semibold text-lg mt-6 text-[#403F3F]">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password field is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                  message:
                    "Password must include uppercase, lowercase, and a number",
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
              Register
            </button>
          </fieldset>
        </form>
      </div>
    </MyContainer>
  );
};

export default SignUpPage;
