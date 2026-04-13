import { ArrowDownToLine, Star } from "lucide-react";
import React from "react";
import Link from "next/link";

const TrendingAppCard = ({ app }) => {
  return (
    <Link
      href={`/apps-page/${app.id}`}
      className="p-4 bg-base-100 shadow rounded-sm"
    >
      <div className="mb-4 p-0.5 bg-[#D9D9D9] rounded-lg">
        <figure>
          <img src={app.image} alt={`${app.title} Image`} />
        </figure>
      </div>

      <div>
        <h4 className="mb-4 text-[#001931] text-xl font-medium">{app.title}</h4>

        <div className="flex justify-between items-center">
          <span className="p-1 bg-[#F1F5E8] rounded-sm text-[#00D390] flex gap-2 items-center">
            <span>
              <ArrowDownToLine size={16} />
            </span>
            <span>{app.downloads}</span>
          </span>

          <span className="p-1 bg-[#FFF0E1] rounded-sm text-[#FF8811] flex gap-2 items-center">
            <span>
              <Star size={16} />
            </span>
            <span>{app.ratingAvg}</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TrendingAppCard;
