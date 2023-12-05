import { AccordionContainer, AccordionBtn } from "./AccordionElements";

import { Arrow } from "../Arrow";
import { CharacterClasses } from "../CharacterClasses";
import { AccordionItem } from "../AccordionItem";

export const Accordion = ({
  name,
  text,
  icon,
  isOpen,
  index,
  activeIndex,
  toggle,
}) => {
  return (
    <AccordionContainer index={index} activeIndex={activeIndex} isOpen={isOpen}>
      <AccordionBtn
        onClick={() => toggle(index)}
        index={index}
        activeIndex={activeIndex}
      >
        {icon}
        {isOpen && (
          <>
            {name}
            <Arrow index={index} activeIndex={activeIndex} />
          </>
        )}
      </AccordionBtn>
      <AccordionItem index={index} activeIndex={activeIndex} text={text} />
    </AccordionContainer>
  );
};
