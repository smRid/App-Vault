"use client";
import React from "react";
import NavLogo from "@/assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/apps-page", label: "Apps" },
    { href: "/installation-page", label: "Installation" },
  ];

  const getNavClass = (href) => {
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return isActive
      ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b border-[#632EE3] rounded-none font-semibold"
      : "text-[#000000]/90 font-medium";
  };

  const navLink = (
    <>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={getNavClass(item.href)}>
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <section className="container mx-auto px-5 bg-base-100">
      <nav>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>

              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navLink}
              </ul>
            </div>

            <Link href="/" className="flex gap-1 items-center">
              <span>
                <Image width={40} height={40} src={NavLogo} alt="Navbar Logo" />
              </span>

              <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">HERO.IO</span>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-8 items-center">{navLink}</ul>
          </div>

          <div className="navbar-end">
            <a className="btn h-10 px-4 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-base-100 font-semibold">
              <span><FaGithub size={18} /></span>
              <span>Contribute</span>
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
