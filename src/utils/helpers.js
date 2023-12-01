// handles the ability to change the RegEx search term expression
export const handleSearchChange = (e, setSearchTerm) => {
  setSearchTerm(e.target.value);
};

// handles the ability to change the text in <RegexTextField />
export const handleTextFieldChange = (e, setTextField) => {
  const { value } = e.target;
  setTextField([{ text: value }]);
};

// testst the str value for lowercase (a-z)
export const testRegexLowercase = (e) => {
  let lowercase = /[a-z]/.test(e.target.value);
  return lowercase;
};

// test the str value for uppercase (A-Z)
export const testRegexUppercase = (e) => {
  let uppercase = /[A-Z]/.test(e.target.value);
  return uppercase;
};

// tests the str value for numeric values
export const testNumeric = (e) => {
  let numeric = /[0-9]/.test(e.target.value);
  return numeric;
};

// tests the str value for special characters
export const textSpecialChar = (e) => {
  let specialChar = /[]/.test(e.target.value);
  return specialChar;
};
