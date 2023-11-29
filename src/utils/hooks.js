import { useEffect } from "react";

export const useNavbarLinks = (setNavbarLinks) => {
  const handleResize = () => {
    window.innerWidth > 768 ? setNavbarLinks(true) : setNavbarLinks(false);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};

// closes <Sidebar /> when the user clicks anywhere outside
export const useClickOutside = (ref, callback) => {
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      if (!ref.current.parentNode.contains(e.target)) {
        callback();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
};
