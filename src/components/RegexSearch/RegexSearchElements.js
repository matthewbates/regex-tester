import styled from "styled-components";

export const RegexSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ $isOpen }) => ($isOpen ? "400px" : "50px")};
`;

export const RegexSearchInput = styled.input`
  padding: 1em;
  font-size: 1em;

  &:focus {
    outline: none;
  }
`;

export const RegexTextFieldContainer = styled.div`
  display: flex;
  margin-left: ${({ $isOpen }) => ($isOpen ? "400px" : "50px")};
`;

export const RegexTextField = styled.textarea`
  display: flex;
  width: 100%;
  height: 25vh;
  padding: 1em;
  font-size: 1em;
  font-family: "Space Mono";

  &:focus {
    outline: none;
  }
`;
