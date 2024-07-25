// Will parse a pixel string to a number e.g. '762px' => 762

const parseNumberInString = (pixelValue: string) => {
  const match = pixelValue.match(/\d+/);

  if (match) {
    return parseInt(match[0], 10);
  }

  return 0;
};

export default parseNumberInString;
