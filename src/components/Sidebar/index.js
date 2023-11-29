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
          <SidebarWrapper
            key={id}
            $isOpen={isOpen}
            index={index}
            activeIndex={activeIndex}
          >
            <SidebarItems
              key={id}
              $isOpen={isOpen}
              index={index}
              activeIndex={activeIndex}
              onClick={() => toggleActiveIndex(index)}
            >
              <SidebarIcon icon={icon} />
              {isOpen && <span>{name}</span>}
            </SidebarItems>
            {isOpen && <Arrow />}
            {/* <SidebarContentWrapper
              ref={iconRef}
              style={
                index === activeIndex && iconRef.current
                  ? { height: iconRef.current.scrollHeight }
                  : { height: "0px" }
              }
            >
              {text?.map((item, index) => (
                <div style={{ color: "white" }}>{item.text}</div>
              ))}
            </SidebarContentWrapper> */}
          </SidebarWrapper>
        ))}
      </SidebarContainer>
      <SearchHeader $isOpen={isOpen} theme={theme}>
        <p>Expression</p>
      </SearchHeader>
      <RegexSearch isOpen={isOpen} />
    </>
  );
};