import { useRef } from "react";

import {
  AccordionContentWrapper,
  AccordionContent,
  AccordionItemHeader,
} from "./AccordionItemElements";

import { CharacterClasses } from "../CharacterClasses";

export const AccordionItem = ({ index, activeIndex, text }) => {
  const iconRef = useRef(null);

  return (
    <AccordionContentWrapper
      ref={iconRef}
      iconRef={iconRef}
      index={index}
      activeIndex={activeIndex}
    >
      <AccordionContent>
        {text?.map(({ id, text, types }) => (
          <>
            <AccordionItemHeader key={id}>{text}</AccordionItemHeader>
            {id === 1 && <CharacterClasses types={types} />}
            {id === 2 && <></>}
            {id === 3 && <></>}
          </>
        ))}
      </AccordionContent>
    </AccordionContentWrapper>
  );
};
