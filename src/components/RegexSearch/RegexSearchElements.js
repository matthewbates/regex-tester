import styled from "styled-components";

import { CONSTANTS } from "../../utils/constants";

export const RegexSearchContainer = styled.div`
  max-width: 100%;
  display: flex;
  padding: 0.5em;
  flex-direction: column;
  margin-left: ${({ $isOpen }) => ($isOpen ? "400px" : "50px")};
  gap: 1em;
`;

export const RegexSearchInput = styled.input`
  padding: 1em;
  font-size: 1em;
  font-family: "Source Code Pro";
  background: ${({ theme }) =>
    theme === "dark" && `${CONSTANTS.colors.darkSecondary}`};
  color: ${({ theme }) =>
    theme === "light"
      ? `${CONSTANTS.colors.lightText}`
      : `${CONSTANTS.colors.darkTextField}`};
  border: ${({ theme }) => (theme === "light" ? null : "none")};

  &:focus {
    outline: none;
  }
`;

export const RegexTextFieldContainer = styled.div`
  display: flex;
  padding: 0.5em;
  margin-left: ${({ $isOpen }) => ($isOpen ? "400px" : "50px")};
`;

export const RegexTextField = styled.textarea`
  display: flex;
  height: 25vh;
  padding: 1em;
  font-size: 1em;
  font-family: "Source Code Pro";
  background: ${({ theme }) =>
    theme === "dark" && `${CONSTANTS.colors.darkSecondary}`};
  color: ${({ theme }) =>
    theme === "light"
      ? `${CONSTANTS.colors.lightText}`
      : `${CONSTANTS.colors.darkTextField}`};
  border: ${({ theme }) => (theme === "light" ? null : "none")};
  resize: none;

  &:focus {
    outline: none;
  }
`;
