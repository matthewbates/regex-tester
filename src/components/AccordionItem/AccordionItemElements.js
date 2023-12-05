import styled from "styled-components";

import { CONSTANTS } from "../../utils/constants";

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
`;

export const AccordionItemHeader = styled.div`
  background: #3a3e41;
  padding: 0.5em;
`;
