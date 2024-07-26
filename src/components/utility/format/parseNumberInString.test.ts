import parseNumberInString from './parseNumberInString';

describe('remove object keys', () => {
  const inputStrings = {
    pixels: '500px',
    complex: 'string,number:7100morecharacters!!@',
    number: 500,
  };
  it('Should extract the number 500 from the pixels value.', () => {
    expect(parseNumberInString(inputStrings.pixels)).toEqual(500);
  });
  it('Should extract the number 7100 from the more complex string', () => {
    expect(parseNumberInString(inputStrings.complex)).toEqual(7100);
  });
});
