"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children, className }) => {
  const pathName = usePathname();
  const isActice = href === pathName;
  return (
    <Link
      href={href}
      className={`${className} ${isActice && "border-b-2 py-1 border-b-green-500"}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
