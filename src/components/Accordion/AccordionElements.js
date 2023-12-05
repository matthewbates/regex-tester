import styled from "styled-components";

export const AccordionContainer = styled.div`
  display: flex;
  /* align-items: ${({ isOpen }) => (isOpen ? "none" : "center")}; */
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export const AccordionBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5em;
  border: none;
  padding: 0.5em;
  cursor: pointer;
  background: #3a3e41;
  color: #b7bcc0;

  &:hover {
    background: #4a4e51;
  }
`;
