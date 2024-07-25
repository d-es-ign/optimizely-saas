const removeObjectKeys = (
  object: Record<string, any>,
  excludedKeys: string[]
) => {
  const objectWithKeysRemoved = { ...object }; // Create a copy of the original object

  excludedKeys.forEach((key) => {
    if (objectWithKeysRemoved.hasOwnProperty(key)) {
      delete objectWithKeysRemoved[key]; // Delete the property if it exists
    }
  });

  return objectWithKeysRemoved;
};

export default removeObjectKeys;
