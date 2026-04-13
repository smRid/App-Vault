import AppsPageTitle from "@/components/AppsPage/AppsPageTitle/AppsPageTitle";
import AllAppsContainer from "@/components/AppsPage/AllAppsContainer/AllAppsContainer";

export const metadata = {
  title: "App Vault | All Apps",
  description: "Explore all applications on the market developed by us",
};

const AppsPage = () => {
  return (
    <>
      <AppsPageTitle />
      <AllAppsContainer />
    </>
  );
};

export default AppsPage;
