import { Link } from "react-router-dom";
import styled from "styled-components";

import { CONSTANTS } from "../../utils/constants";

export const NavLink = styled(Link)`
  display: ${({ $navbarLinks }) => ($navbarLinks === true ? "flex" : "none")};
  text-decoration: none;
  color: ${({ theme }) =>
    theme === "light"
      ? `${CONSTANTS.colors.lightText}`
      : `${CONSTANTS.colors.darkText}`};

  &:last-child {
    margin-right: 1em;
  }
  &:hover {
    text-decoration: underline;
  }
`;
