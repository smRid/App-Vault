import React from "react";
import InstallationPageTitle from "../../Components/InstallationPage/InstallationPageTitle/InstallationPageTitle";
import InstalledAppContainer from "../../Components/InstallationPage/InstalledAppContainer/InstalledAppContainer";
import InstallPieChart from "../../Components/InstallationPage/InstallPieChart/InstallPieChart";

const InstallationPage = () => {
  return (
    <>
      <InstallationPageTitle />
      <InstallPieChart />
      <InstalledAppContainer />
    </>
  );
};

export default InstallationPage;
