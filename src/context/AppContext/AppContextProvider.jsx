import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);

  const handleInstallBtn = (app) => {
    const isAppExist = installedApps.find((a) => a.id === app.id);

    if (!isAppExist) {
      setInstalledApps([...installedApps, app]);

      toast.success(
        <p>
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
            {app.title}
          </span>{" "}
          install successfully
        </p>,
      );
    }
  };

  const data = {
    handleInstallBtn,
    installedApps,
    setInstalledApps,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
