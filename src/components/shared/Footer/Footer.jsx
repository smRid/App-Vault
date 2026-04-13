import React from "react";
import FooterLogo from "@/assets/images/logo.png";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="container mx-auto px-5 py-8 bg-[#001931]">
      <div>
        <div>
          <div className="flex justify-between items-center">
            <span className="flex gap-1 items-center">
              <Image width={40} height={40} src={FooterLogo} alt="Footer Logo" />
              <span className="text-base-100 font-bold">HERO.IO</span>
            </span>

            <div>
              <span className="text-base-100 text-xl font-medium">
                Social Links
              </span>

              <div className="mt-4 flex gap-4 items-center text-base-100">
                <Link href="/">
                  <FaXTwitter />
                </Link>
                <Link href="/">
                  <FaLinkedin />
                </Link>
                <Link href="/">
                  <FaFacebook />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-5 border-t border-[#E5E7EB] text-center">
            <p className="text-[#FAFAFA]">
              Copyright © 2026 - All right reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
