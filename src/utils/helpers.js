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

// tests if the regular expression contains lowercase characters
export const testLowercase = (e) => {
  const hasLowercase = /[a-z]/.test(e.target.value);
  return hasLowercase;
};

// tests if the regular expression contains uppercase letters
export const testUppercase = (e) => {
  const hasUppercase = /[A-Z]/.test(e.target.value);
  return hasUppercase;
};

//tests if the regular expression contains integers
export const testInteger = (e) => {
  const hasInteger = /[0-9]/.test(e.target.value);
  return hasInteger;
};

// tests if the regular expressions contains any sort of special characters
export const testSpecialChar = () => {
  const hasSpecialChar = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g.test(
    e.target.value
  );
  return hasSpecialChar;
};
