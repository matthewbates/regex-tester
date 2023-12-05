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
      {/* <AccordionContentWrapper
        ref={iconRef}
        iconRef={iconRef}
        index={index}
        activeIndex={activeIndex}
      >
        <AccordionContent>
          {text?.map(({ id, text, types }) => (
            <>
              <div key={id}>{text}</div>
              {id === 1 && <CharacterClasses types={types} />}
              {id === 2 && <></>}
              {id === 3 && <></>}
            </>
          ))}
        </AccordionContent>
      </AccordionContentWrapper> */}
    </AccordionContainer>
  );
};
