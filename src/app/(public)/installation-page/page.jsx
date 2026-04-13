import InstallationPageTitle from "@/components/InstallationPage/InstallationPageTitle/InstallationPageTitle";
import InstallPieChart from "@/components/InstallationPage/InstallPieChart/InstallPieChart";
import InstalledAppContainer from "@/components/InstallationPage/InstalledAppContainer/InstalledAppContainer";

export const metadata = {
  title: "App Vault | Installed Apps",
  description: "View and manage your installed applications",
};

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
