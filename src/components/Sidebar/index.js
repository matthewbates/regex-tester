import { useState, useRef } from "react";

import {
  SidebarContainer,
  SidebarWrapper,
  SidebarItems,
  SidebarContentWrapper,
  SearchHeader,
} from "./SidebarElements";

import { Arrow } from "../Arrow";
import { RegexSearch } from "../RegexSearch";
import { SidebarIcon } from "../SidebarIcon";

import { sidebarIcons } from "../../utils/data";
import { useClickOutside } from "../../utils/hooks";
import { Accordion } from "../Accordion";

export const Sidebar = ({ isOpen, setIsOpen, theme }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sidebarRef = useRef(null);
  const iconRef = useRef(null);

  useClickOutside(sidebarRef, () => {
    setIsOpen(false);
  });

  const toggleActiveIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <SidebarContainer $isOpen={isOpen} ref={sidebarRef}>
        {sidebarIcons.map(({ id, name, text, icon }, index) => (
          <SidebarWrapper key={id} $isOpen={isOpen}>
            <Accordion
              name={name}
              text={text}
              icon={icon}
              index={index}
              isOpen={isOpen}
              activeIndex={activeIndex}
              toggle={toggleActiveIndex}
            />
          </SidebarWrapper>
        ))}
      </SidebarContainer>
      {/* <SearchHeader $isOpen={isOpen} theme={theme}>
        <p>Expression</p>
      </SearchHeader> */}
      <RegexSearch isOpen={isOpen} theme={theme} />
    </>
  );
};
