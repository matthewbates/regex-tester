import { useState, useEffect } from "react";

import { NavbarContainer, LinksWrapper } from "./NavbarElements";

import { ThemeToggle } from "../ThemeToggle";

import { links } from "../../utils/data";
import { NavLinks } from "../NavLinks";
import { Menu } from "../Menu";

export const Navbar = ({ theme, toggleTheme, toggleSidebar }) => {
  const [navbarLinks, setNavbarLinks] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth > 768 ? setNavbarLinks(true) : setNavbarLinks(false);

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };
    return handleResize;
  }, [navbarLinks]);

  return (
    <NavbarContainer>
      <>
        <Menu toggleSidebar={toggleSidebar} />
        <LinksWrapper>
          {links.map(({ id, title }) => (
            <NavLinks
              key={id}
              title={title}
              theme={theme}
              navbarLinks={navbarLinks}
            />
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </LinksWrapper>
      </>
    </NavbarContainer>
  );
};
