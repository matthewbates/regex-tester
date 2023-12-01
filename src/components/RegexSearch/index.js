import { useState } from "react";

import {
  RegexSearchContainer,
  RegexSearchInput,
  RegexTextField,
} from "./RegexSearchElements";

import {
  handleSearchChange,
  handleTextFieldChange,
  testRegexLowercase,
  testRegexUppercase,
  testNumeric,
  testSpecialChar,
} from "../../utils/helpers";

export const RegexSearch = ({ isOpen, theme }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [textField, setTextField] = useState([
    {
      id: 1,
      text: "This was created by Matthew Bates",
    },
    {
      id: 2,
      text: "Edit the expression and text to see matches. JavaScript flavors of RegEx are supported.",
    },
    {
      id: 3,
      text: "The sidebar includes a Cheatsheet, a full RegEx reference, and Help",
    },
  ]);

  const concatenatedTextField = textField.map((item) => item.text).join("\n");

  return (
    <>
      <RegexSearchContainer $isOpen={isOpen}>
        <label style={{ fontSize: "14px" }}>REGULAR EXPRESSION</label>
        <RegexSearchInput
          placeholder="enter your regular expression here"
          value={searchTerm}
          onChange={(e) => {
            handleSearchChange(e, setSearchTerm);
            // testRegexLowercase(e);
            // testRegexUppercase(e);
            // testNumeric(e);
          }}
          theme={theme}
        />
        <label style={{ fontSize: "14px" }}>TEXT FIELD</label>
        <RegexTextField
          placeholder={"insert your test string here"}
          value={concatenatedTextField}
          onChange={(e) => handleTextFieldChange(e, setTextField)}
          theme={theme}
        />
      </RegexSearchContainer>
    </>
  );
};
