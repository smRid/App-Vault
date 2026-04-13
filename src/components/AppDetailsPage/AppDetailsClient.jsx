"use client";
import React from "react";
import AppInfo from "@/components/AppDetailsPage/AppInfo/AppInfo";
import RatingChart from "@/components/AppDetailsPage/RatingChart/RatingChart";
import AppDescription from "@/components/AppDetailsPage/AppDescription/AppDescription";

const AppDetailsClient = ({ expectedApp }) => {
  return (
    <div>
      <AppInfo expectedApp={expectedApp} />
      <RatingChart expectedApp={expectedApp} />
      <AppDescription expectedApp={expectedApp} />
    </div>
  );
};

export default AppDetailsClient;
