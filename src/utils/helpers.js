// handles the ability to change the RegEx search term expression
export const handleSearchChange = (e, setSearchTerm, callback) => {
  setSearchTerm(e.target.value);
  callback();
};

// handles the ability to change the text in <RegexTextField />
export const handleTextFieldChange = (e, setTextField) => {
  const { value } = e.target;
  setTextField([{ text: value }]);
};

// toggles <Accordion />
export const toggleActiveIndex = (index, activeIndex, setActiveIndex) => {
  setActiveIndex(index === activeIndex ? null : index);
};

// handles regex highlighting
export const highlightedText = (searchTerm, textField) => {
  const regex = new RegExp(searchTerm, "gi");
  return textField.replace(regex, (match) => {
    return `<span style="font-family: Source Code Pro; background-color: #ffff00">${match}</span>`;
  });
};

export const testLowercase = () => {};

export const testUppercase = () => {};

export const testInteger = () => {};

export const testSpecialChar = () => {};
