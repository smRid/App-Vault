"use client";
import { ArrowDownToLine, Star, ThumbsUp } from "lucide-react";
import React, { useContext } from "react";
import { AppContext } from "@/context/AppContext/AppContextProvider";

const AppInfo = ({ expectedApp }) => {
  const { handleInstallBtn, installedApps } = useContext(AppContext);

  const isInstalled = installedApps.find((app) => app.id === expectedApp.id);

  return (
    <section className="mt-20 container mx-auto px-5">
      <div>
        <div className="pb-10 border-b border-[#001931]/20 flex flex-col lg:flex-row gap-10 items-center">
          <div>
            <figure>
              <img
                className="md:w-100"
                src={expectedApp.image}
                alt={`${expectedApp.title} Image`}
              />
            </figure>
          </div>

          <div className="space-y-7 w-full">
            <div className="mb-7.5 w-full">
              <h4 className="mb-2 text-[#001931] text-[32px] font-bold">
                {expectedApp.title}
              </h4>

              <h5>
                <span className="text-[#627382] text-xl">Developed By </span>

                <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-xl font-semibold">
                  {expectedApp.companyName}
                </span>
              </h5>
            </div>

            <hr className="border border-[#001931] opacity-20" />

            <div className="text-[#001931] flex flex-col sm:flex-row gap-15 lg:items-center">
              <div className="flex flex-col gap-y-2">
                <span className="text-[#54CF68]">
                  <ArrowDownToLine size={40} />
                </span>

                <span className="opacity-80">Downloads</span>
                <span className="text-[40px] font-extrabold">
                  {expectedApp.downloads}
                </span>
              </div>

              <div className="flex flex-col gap-y-2">
                <span className="text-[#FF8811]">
                  <Star size={40} />
                </span>
                <span className="opacity-80">Average Ratings</span>
                <span className="text-[40px] font-extrabold">
                  {expectedApp.ratingAvg}
                </span>
              </div>

              <div className="flex flex-col gap-y-2">
                <span className="text-[#632EE3]">
                  <ThumbsUp size={40} />
                </span>

                <span className="opacity-80">Total Reviews</span>
                <span className="text-[40px] font-extrabold">
                  {expectedApp.reviews}
                </span>
              </div>
            </div>

            <div>
              <button
                onClick={() => handleInstallBtn(expectedApp)}
                className={`
                  border-none shadow-none px-5 h-13 rounded-sm text-xl font-semibold
                  ${
                    isInstalled
                      ? "btn-disabled opacity-50"
                      : "btn bg-[#00D390] text-base-100"
                  }
                  `}
              >
                <span>Install Now </span>
                <span>({expectedApp.size} MB)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppInfo;
