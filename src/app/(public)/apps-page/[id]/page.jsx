import AppDetailsClient from "@/components/AppDetailsPage/AppDetailsClient";
import appsData from "@/../public/data.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return appsData.map((app) => ({
    id: String(app.id),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const app = appsData.find((app) => String(app.id) === id);

  if (!app) {
    return { title: "Not Found - App Vault" };
  }

  return {
    title: `${app.title} - App Vault`,
    description: app.description,
  };
}

const AppDetailsPage = async ({ params }) => {
  const { id } = await params;
  const expectedApp = appsData.find((app) => String(app.id) === id);

  if (!expectedApp) {
    notFound();
  }

  return <AppDetailsClient expectedApp={expectedApp} />;
};

export default AppDetailsPage;
