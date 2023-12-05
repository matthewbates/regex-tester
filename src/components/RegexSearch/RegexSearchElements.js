import styled from "styled-components";

import { CONSTANTS } from "../../utils/constants";

export const RegexSearchContainer = styled.div`
  max-width: 100%;
  display: flex;
  padding: 0.5em;
  flex-direction: column;
  gap: 0.75em;
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const RegexSearchInput = styled.input`
  padding: 0.75em;
  font-size: 1em;
  font-family: "Source Code Pro";
  background: ${({ theme }) =>
    theme === "light"
      ? `${CONSTANTS.colors.lightSecondary}`
      : `${CONSTANTS.colors.darkSecondary}`};
  color: ${({ theme }) =>
    theme === "light"
      ? `${CONSTANTS.colors.lightText}`
      : `${CONSTANTS.colors.darkTextField}`};
  border: none;

  &:focus {
    outline: none;
  }
`;

export const RegexTextFieldContainer = styled.div`
  display: flex;
  padding: 0.5em;
`;

export const RegexTextField = styled.div`
  height: 25vh;
  padding: 0.75em;
  font-family: "Source Code Pro";
  background: ${({ theme }) =>
    theme === "light"
      ? `${CONSTANTS.colors.lightSecondary}`
      : `${CONSTANTS.colors.darkSecondary}`};

  &:focus {
    outline: none;
  }
`;
