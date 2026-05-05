"use client";
import Link from "next/link";
import React from "react";
import MyContainer from "../Container/MyContainer";
import profile from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data } = authClient.useSession();
  const user = data?.user;
  return (
    <MyContainer className="flex flex-wrap gap-4 items-center justify-around sm:justify-between mt-6">
      <div className="hidden sm:flex"></div>
      <ul className="flex items-center justify-between gap-4 text-[#706F6F] sm:ml-32">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/career">Career</NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-2.25">
        {user && <p>Hello, {user?.name}</p>}
        <Image src={profile} height={30} width={30} alt="Profile" />
        {user ? (
          <button
            onClick={async () => await authClient.signOut()}
            className="btn text-white bg-[#403F3F]"
          >
            Logout
          </button>
        ) : (
          <Link className="btn text-white bg-[#403F3F]" href="/signin">
            Login
          </Link>
        )}
      </div>
    </MyContainer>
  );
};

export default Navbar;
