import Banner from "@/components/homepage/Banner/Banner";
import Stats from "@/components/homepage/Stats/Stats";
import TrendingApps from "@/components/homepage/TrendingApps/TrendingApps";

export const metadata = {
  title: "App Vault | Home",
  description: "We build productive apps - explore trending applications",
};

export default function HomePage() {
  return (
    <>
      <Banner />
      <Stats />
      <TrendingApps />
    </>
  );
}
