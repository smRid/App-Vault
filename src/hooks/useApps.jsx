import React, { useEffect, useState } from "react";

const useApps = () => {
  const [allApps, setAllApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllAppsData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setAllApps(data);
      setLoading(false);
    };

    fetchAllAppsData();
  }, []);

  return { allApps, loading };
};

export default useApps;
