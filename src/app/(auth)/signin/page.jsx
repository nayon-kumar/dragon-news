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

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };

  const handleGigHubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

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
        <div className="divider mt-6">Or continue with</div>

        {/* Google */}
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-black border-[#e5e5e5] w-full"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Google
        </button>
        {/* GitHub */}
        <button
          onClick={handleGigHubSignIn}
          className="btn bg-white text-black border-[#e5e5e5] w-full mt-2"
        >
          <svg
            aria-label="GitHub logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            ></path>
          </svg>
          GitHub
        </button>

        <p className="text-center font-semibold text-[#706F6F] mt-7">
          Don't have an account ?{" "}
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
