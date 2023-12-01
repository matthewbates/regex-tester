import styled from "styled-components";

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  overflow: hidden;
`;

export const AccordionBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5em;
  border: none;
  padding: 0.75em;
  cursor: pointer;
  background: #3a3e41;
  color: #b7bcc0;
`;

export const AccordionContentWrapper = styled.div`
  transition: 0.3s ease;
  height: ${({ iconRef, index, activeIndex }) =>
    iconRef.current && index === activeIndex
      ? `${iconRef.current.scrollHeight}px`
      : "0px"};
`;

export const AccordionContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;
