"use client";
import React from "react";
import { HashLoader } from "react-spinners";
import TrendingAppCard from "@/components/homepage/TrendingApps/TrendingAppCard/TrendingAppCard";
import appsData from "@/../public/data.json";

const AllAppsContainer = () => {
  return (
    <section className="mb-20 container mx-auto px-5">
      <div>
        <div>
          <div className="mb-4 flex flex-col sm:flex-row gap-y-4 justify-between sm:items-center">
            <div>
              <p className="flex gap-1 items-center text-[#001931] text-2xl font-semibold">
                <span>({appsData.length})</span>
                <span>Apps Found</span>
              </p>
            </div>

            <div>
              <label className="input">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>

                <input type="search" required placeholder="Search" />
              </label>
            </div>
          </div>

          <div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {appsData.map((app) => (
                <TrendingAppCard key={app.id} app={app} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllAppsContainer;
