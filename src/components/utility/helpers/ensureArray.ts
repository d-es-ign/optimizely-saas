const ensureArray = (value: string | string[]): string[] => {
  if (typeof value === 'string') {
    return [value];
  }
  return value;
};

export default ensureArray;
