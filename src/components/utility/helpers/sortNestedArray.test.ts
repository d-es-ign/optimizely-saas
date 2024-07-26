import {
  sortNestedArrayOnIndex,
  sortObjectArrayOnNestedArray,
} from './sortNestedArray';

describe('multidimensional arrays', () => {
  const inputObject = [
    ['a', 5, true, '1kb'],
    ['e', 3, false, '100B'],
    ['c', 1, true, '20gb'],
    ['b', 2, false, '10mb'],
    ['d', 4, false, '2mb'],
  ];

  const ascString = [
    ['a', 5, true, '1kb'],
    ['b', 2, false, '10mb'],
    ['c', 1, true, '20gb'],
    ['d', 4, false, '2mb'],
    ['e', 3, false, '100B'],
  ];

  const descNumber = [
    ['a', 5, true, '1kb'],
    ['d', 4, false, '2mb'],
    ['e', 3, false, '100B'],
    ['b', 2, false, '10mb'],
    ['c', 1, true, '20gb'],
  ];

  it('Should sort on string (ascending)', () => {
    expect(sortNestedArrayOnIndex(inputObject, 0)).toEqual(ascString);
  });

  it('Should sort on number (descending)', () => {
    expect(sortNestedArrayOnIndex(inputObject, 1, 'desc')).toEqual(descNumber);
  });

  it('Should not sort on boolean', () => {
    expect(sortNestedArrayOnIndex(inputObject, 2)).toEqual(inputObject);
  });
});

describe('object array with array prop', () => {
  const inputObject = [
    { data: ['a', 5, true, '1kb'] },
    { data: ['e', 3, false, '100B'] },
    { data: ['c', 1, true, '20gb'] },
    { data: ['b', 2, false, '10mb'] },
    { data: ['d', 4, false, '2mb'] },
  ];

  const ascString = [
    { data: ['a', 5, true, '1kb'] },
    { data: ['b', 2, false, '10mb'] },
    { data: ['c', 1, true, '20gb'] },
    { data: ['d', 4, false, '2mb'] },
    { data: ['e', 3, false, '100B'] },
  ];

  const descNumber = [
    { data: ['a', 5, true, '1kb'] },
    { data: ['d', 4, false, '2mb'] },
    { data: ['e', 3, false, '100B'] },
    { data: ['b', 2, false, '10mb'] },
    { data: ['c', 1, true, '20gb'] },
  ];

  it('Should sort on string (ascending)', () => {
    expect(sortObjectArrayOnNestedArray(inputObject, 'data', 0)).toEqual(
      ascString
    );
  });

  it('Should sort on number (descending)', () => {
    expect(
      sortObjectArrayOnNestedArray(inputObject, 'data', 1, 'desc')
    ).toEqual(descNumber);
  });

  it('Should not sort on boolean', () => {
    expect(sortObjectArrayOnNestedArray(inputObject, 'data', 2)).toEqual(
      inputObject
    );
  });
});
