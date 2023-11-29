import { ConstructionOutlined } from "@mui/icons-material";
import { useState } from "react";

import {
  RegexSearchContainer,
  RegexSearchInput,
  RegexTextFieldContainer,
  RegexTextField,
} from "./RegexSearchElements";

import { handleSearchChange, handleTextFieldChange } from "../../utils/helpers";

export const RegexSearch = ({ isOpen }) => {
  const [searchTerm, setSearchTerm] = useState("//g");
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

  const testRegex = (e) => {
    const hasLowercase = /[a-z]/.test(e.target.value);
    if (hasLowercase) console.log("found");
  };

  return (
    <>
      <RegexSearchContainer $isOpen={isOpen}>
        <RegexSearchInput
          onChange={(e) => {
            handleSearchChange(e, setSearchTerm);
            testRegex(e);
          }}
          value={searchTerm}
        />
      </RegexSearchContainer>
      <RegexTextFieldContainer $isOpen={isOpen}>
        <RegexTextField
          placeholder={"Enter some text"}
          value={concatenatedTextField}
          onChange={(e) => handleTextFieldChange(e, setTextField)}
        />
      </RegexTextFieldContainer>
    </>
  );
};
