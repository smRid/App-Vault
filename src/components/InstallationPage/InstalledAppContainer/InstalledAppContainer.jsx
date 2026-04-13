import React, { useContext } from "react";
import { AppContext } from "../../../Context/AppContext/AppContextProvider";
import { ChevronDown } from "lucide-react";
import InstalledAppCard from "./InstalledAppCard/InstalledAppCard";

const InstalledAppContainer = () => {
  const { installedApps } = useContext(AppContext);

  return (
    <section className="mb-20 container mx-auto px-5">
      <div>
        <div>
          <div className="mb-4 flex flex-col sm:flex-row gap-y-3 justify-between sm:items-center">
            <div className="text-[#001931] text-2xl font-semibold">
              <span>{installedApps.length}</span> <span>Apps Found</span>
            </div>

            <div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 bg-transparent border border-[#D2D2D2] rounded-sm text-[#627382]"
                >
                  Sort By <span></span> <ChevronDown />
                </div>

                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a>Size</a>
                  </li>

                  <li>
                    <a>Rating</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {installedApps.map((app) => (
              <InstalledAppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstalledAppContainer;
