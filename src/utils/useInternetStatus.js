import { useEffect, useState } from "react";

const useInternetStatus = () => {
  const [internetStatus, setInternetStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setInternetStatus(false);
    });

    window.addEventListener("online", () => {
      setInternetStatus(true);
    });
  }, []);

  return internetStatus;
};

export default useInternetStatus;
