import React from "react";
import AppInfo from "../../Components/AppDetailsPage/AppInfo/AppInfo";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import { HashLoader } from "react-spinners";
import RatingChart from "../../Components/AppDetailsPage/RatingChart/RatingChart";
import AppDescription from "../../Components/AppDetailsPage/AppDescription/AppDescription";

const AppDetailsPage = () => {
  const { id } = useParams();
  const { allApps, loading } = useApps();

  const expectedApp = allApps.find((app) => app.id === Number(id));

  return (
    <>
      {loading ? (
        <div className="my-10 flex justify-center">
          <HashLoader color="#632EE3" />
        </div>
      ) : (
        <div>
          <AppInfo expectedApp={expectedApp} />
          <RatingChart expectedApp={expectedApp} />
          <AppDescription expectedApp={expectedApp} />
        </div>
      )}
    </>
  );
};

export default AppDetailsPage;
