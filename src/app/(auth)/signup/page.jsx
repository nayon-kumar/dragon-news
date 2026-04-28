import MyContainer from "@/components/Container/MyContainer";
import React from "react";

const SignUpPage = () => {
  return (
    <MyContainer className="my-20">
      <div className="bg-base-200 border-base-300 rounded-box  border px-5 py-15 max-w-160 mx-auto">
        <h3 className="font-semibold text-3xl text-[#403F3F] text-center">
          Register your account
        </h3>
        <form>
          <fieldset className="fieldset ">
            <label className="label font-semibold text-lg text-[#403F3F] mt-10">
              Name
            </label>
            <input
              type="text"
              className="input w-full mt-2"
              placeholder="Enter your name"
            />

            <label className="label font-semibold text-lg mt-6 text-[#403F3F]">
              Email address
            </label>
            <input
              type="email"
              className="input w-full mt-2"
              placeholder="Enter your email address"
            />

            <label className="label font-semibold text-lg mt-6 text-[#403F3F]">
              Password
            </label>
            <input
              type="password"
              className="input w-full mt-2"
              placeholder="Password"
            />

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
