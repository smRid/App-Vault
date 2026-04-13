import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../Pages/HomePage/HomePage";
import AppsPage from "../Pages/AppsPage/AppsPage";
import InstallationPage from "../Pages/InstallationPage/InstallationPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AppDetailsPage from "../Pages/AppDetailsPage/AppDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "apps-page",
        element: <AppsPage />,
      },
      {
        path: "apps-page/:id",
        element: <AppDetailsPage />
      },
      {
        path: "installation-page",
        element: <InstallationPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
