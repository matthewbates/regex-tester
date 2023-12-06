import { useState } from "react";

import {
  RegexSearchContainer,
  Label,
  RegexSearchInput,
  RegexTextField,
} from "./RegexSearchElements";

import {
  testLowercase,
  testUppercase,
  testInteger,
  testSpecialChar,
} from "../../utils/helpers";

export const RegexSearch = ({ isOpen, theme }) => {
  const [searchTerm, setSearchTerm] = useState("[]");
  const [textField, setTextField] = useState("Edit the text to see matches");
  // const [textField, setTextField] = useState([
  //   {
  //     id: 1,
  //     text: "This was created by Matthew Bates.",
  //   },
  //   {
  //     id: 2,
  //     text: "Edit the expression and text to see matches. JavaScript flavors of RegEx are supported.",
  //   },
  //   {
  //     id: 3,
  //     text: "The sidebar includes a Cheatsheet, a full RegEx reference, and Help",
  //   },
  // ]);

  // const mappedInterpunctText = textField
  //   .map((item) => item.text)
  //   .join("\n")
  //   .split(" ")
  //   .join("•");

  // const highlightedText = () => {
  //   const regex = new RegExp(searchTerm, "gi");
  //   return textField.replace(
  //     regex,
  //     (match) => `<span style="background: #ffff00">${match}</span>`
  //   );
  // };

  const highlightedText = () => {
    const regex = new RegExp(searchTerm, "gi");
    return textField.replace(regex, (match) => {
      return `<RegexTextField style="font-family: Source Code Pro; background: #ffff00">${match}</RegexTextField>`;
    });
  };

  return (
    <RegexSearchContainer $isOpen={isOpen}>
      <Label>REGULAR EXPRESSION</Label>
      <RegexSearchInput
        placeholder="enter your regular expression here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        theme={theme}
      />
      <Label>TEST STRING</Label>
      <RegexTextField
        onChange={(e) => setTextField(e.target.value)}
        value={textField}
        contentEditable="true"
        dangerouslySetInnerHTML={{ __html: highlightedText() }}
        theme={theme}
      ></RegexTextField>
    </RegexSearchContainer>
  );
};
