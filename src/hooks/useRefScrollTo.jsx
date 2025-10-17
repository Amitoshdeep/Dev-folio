import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useRefScrollTo = (ref) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }, [pathname, ref]);
};
