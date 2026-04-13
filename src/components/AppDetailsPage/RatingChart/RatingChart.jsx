import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RatingChart = ({ expectedApp }) => {
  return (
    <section className="mt-10 pb-10 border-b border-[#001931]/20 container mx-auto px-5">
      <div>
        <div>
          <h6 className="mb-6 text-2xl font-semibold text-[#001931]">Rating</h6>

          <div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart layout="vertical" data={expectedApp.ratings}>
                <XAxis
                  dataKey="count"
                  type="number"
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  reversed
                />

                <Bar dataKey="count" fill="#FF8811" barSize={30} />

                <Tooltip cursor={{ fill: "transparent" }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingChart;
