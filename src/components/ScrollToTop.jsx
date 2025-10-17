// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure scroll happens after a tiny delay to allow page to render
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
