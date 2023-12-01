import { useRef } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import {
  AccordionContainer,
  AccordionBtn,
  AccordionContentWrapper,
  AccordionContent,
} from "./AccordionElements";

import { sidebarIcons } from "../../utils/data";

export const Accordion = ({
  name,
  text,
  icon,
  isOpen,
  index,
  activeIndex,
  toggle,
}) => {
  const iconRef = useRef(null);
  console.log(text);

  return (
    <AccordionContainer index={index} activeIndex={activeIndex}>
      <AccordionBtn
        onClick={() => toggle(index)}
        index={index}
        activeIndex={activeIndex}
      >
        {icon}
        {isOpen && (
          <>
            {name}
            <KeyboardArrowRightIcon
              index={index}
              activeIndex={activeIndex}
              sx={{
                display: "flex",
                marginLeft: "auto",
                transition: "0.3s ease",
                transform:
                  index === activeIndex ? "rotate(90deg)" : "rotate(0deg)",
              }}
            />
          </>
        )}
      </AccordionBtn>
      <AccordionContentWrapper
        ref={iconRef}
        iconRef={iconRef}
        index={index}
        activeIndex={activeIndex}
      >
        <AccordionContent>
          {text?.map(({ id, text }, index) => (
            <div key={id}>{text}</div>
          ))}
        </AccordionContent>
      </AccordionContentWrapper>
    </AccordionContainer>
  );
};
