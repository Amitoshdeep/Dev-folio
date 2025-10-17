// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll after a small delay to ensure the page element exists
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // optional smooth scroll
      });
    }, 10);
  }, [pathname]);

  return null;
}
