const replaceValuesInLabel = (
  label: string,
  replacementArray: Array<string | number>
) => {
  let newLabel = label;

  replacementArray.forEach((value, index) => {
    newLabel = newLabel.replace(`{${index}}`, value.toString());
  });

  return newLabel;
};

export default replaceValuesInLabel;
