"use client";
import React from "react";
import TrendingAppCard from "./TrendingAppCard/TrendingAppCard";
import { HashLoader } from "react-spinners";
import Link from "next/link";
import appsData from "@/../public/data.json";

const TrendingApps = () => {
  return (
    <section className="my-20 container mx-auto px-5">
      <div>
        <div>
          <div className="mb-10 text-center">
            <h3 className="mb-4 text-[#001931] text-5xl font-bold">
              Trending Apps
            </h3>
            <p className="text-[#627382] text-xl">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>

          <div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {appsData.slice(0, 8).map((app) => (
                <TrendingAppCard key={app.id} app={app} />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/apps-page"
                className="btn border-none shadow-none px-10 h-12 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-base-100 font-semibold"
              >
                Show All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingApps;
