import React from "react";
import BannerImg from "@/assets/images/hero.png";
import PlayStoreLogo from "@/assets/images/google-play.png";
import PHStoreLogo from "@/../public/favicon-logo.png";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="mt-20 container mx-auto px-5">
      <div>
        <div className="text-center flex flex-col-reverse lg:block">
          <div>
            <h1 className="mt-10 lg:mt-0 mb-4 text-5xl lg:text-7xl max-w-148 mx-auto leading-tight font-bold text-[#001931] opacity-90">
              We Build{" "}
              <span className="inline-block bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Productive
              </span>{" "}
              Apps
            </h1>

            <p className="lg:px-20 mb-10 text-xl text-[#627382]">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>

            <div className="mb-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                className="btn h-14 shadow-none bg-transparent border border-[#D2D2D2] rounded-sm"
                href="https://play.google.com/store/apps"
                target="_blank"
              >
                <span>
                  <Image width={32} height={32} src={PlayStoreLogo} alt="Play Store" />
                </span>

                <span className="text-[#001931] text-xl font-semibold">
                  Google Play
                </span>
              </Link>

              <Link
                href="/"
                className="btn h-14 shadow-none bg-transparent border border-[#D2D2D2] rounded-sm"
              >
                <span>
                  <Image width={30} height={30} src={PHStoreLogo} alt="App Vault" />
                </span>
                
                <span className="text-[#001931] text-xl font-semibold">
                  App Vault
                </span>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <figure>
              <Image src={BannerImg} alt="Banner Image" priority />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
