import { NavLink } from "./NavLinkElements";

export const NavLinks = ({ title, theme, navbarLinks }) => {
  return (
    <NavLink theme={theme} to={title} $navbarLinks={navbarLinks}>
      {title}
    </NavLink>
  );
};
