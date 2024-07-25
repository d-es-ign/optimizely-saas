import removeObjectKeys from './removeObjectKeys';

describe('remove object keys', () => {
  const inputObject = {
    keyOne: 1,
    keyTwo: 'two',
    keyThree: { object: 'with keys' },
    keyFour: false,
  };
  it('Should remove the keys in the array from the object', () => {
    const exclusionArray = ['keyOne', 'keyTwo'];

    expect(removeObjectKeys(inputObject, exclusionArray)).toEqual({
      keyThree: { object: 'with keys' },
      keyFour: false,
    });
  });
  it('Should remove all keys from the object', () => {
    const exclusionArray = ['keyOne', 'keyTwo', 'keyThree', 'keyFour'];

    expect(removeObjectKeys(inputObject, exclusionArray)).toEqual({});
  });
  it('Should not remove any keys from the object', () => {
    const exclusionArray = ['', 'keyFive'];

    expect(removeObjectKeys(inputObject, exclusionArray)).toEqual(inputObject);
  });
});
