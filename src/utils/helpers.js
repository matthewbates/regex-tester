// handles the ability to change the RegEx search term expression
export const handleSearchChange = (e, setSearchTerm) => {
  setSearchTerm(e.target.value);
};

// handles the ability to change the text in <RegexTextField />
export const handleTextFieldChange = (e, setTextField) => {
  const { value } = e.target;
  setTextField([{ text: value }]);
};
