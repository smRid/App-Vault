import React from "react";
import BannerLogo from "../../../assets/images/hero.png";
import PlayStoreLogo from "../../../assets/images/google-play.png";
import PHStoreLogo from "../../../../public/favicon-logo.png";
import { Link } from "react-router";

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
                to="https://play.google.com/store/apps"
                target="_blank"
              >
                <span>
                  <img width={32} src={PlayStoreLogo} />
                </span>

                <span className="text-[#001931] text-xl font-semibold">
                  Google Play
                </span>
              </Link>

              <Link
                to="/"
                className="btn h-14 shadow-none bg-transparent border border-[#D2D2D2] rounded-sm"
              >
                <span>
                  <img width={30} src={PHStoreLogo} />
                </span>
                
                <span className="text-[#001931] text-xl font-semibold">
                  PH-AppStore
                </span>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <figure>
              <img src={BannerLogo} alt="Banner Image" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
