"use client";
import React, { useContext } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { AppContext } from "@/context/AppContext/AppContextProvider";
import appsData from "@/../public/data.json";

const InstallPieChart = () => {
  const { installedApps = [] } = useContext(AppContext);

  const uninstalled = appsData.length - installedApps.length;

  const data = [
    { name: "Installed", value: installedApps.length, fill: "#0088FE" },
    { name: "Uninstalled", value: uninstalled, fill: "#FF8042" },
  ];

  return (
    <section className="my-10 container mx-auto px-5">
      <div>
        <div className="flex justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                cornerRadius={50}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
                ))}
              </Pie>

              <Legend />

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default InstallPieChart;
