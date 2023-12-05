import styled from "styled-components";

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
