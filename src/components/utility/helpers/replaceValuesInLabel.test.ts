import replaceValuesInLabel from './replaceValuesInLabel';

describe('remove object keys', () => {
  const inputString = 'Replace : {0}, {1}, {2}, {3}';

  const incompleteTargets = 'Replace : 0}, 1}, {}, {3}';

  const sixTargetsString = 'Replace : {0}, {1}, {2}, {3}, {4}, {5}';

  const stringNoTargets = 'String No Targets';
  it('Should replace all the Targets using the array', () => {
    const replacementArray = ['Zero', 'One', 'Two', 'Three'];

    expect(replaceValuesInLabel(inputString, replacementArray)).toEqual(
      'Replace : Zero, One, Two, Three'
    );
  });
  it('Should not modify a string with no targets', () => {
    const replacementArray = ['', 'One', 'Two', 'Three'];

    expect(replaceValuesInLabel(stringNoTargets, replacementArray)).toEqual(
      stringNoTargets
    );
  });
  it('Should not modify a target which is incomplete', () => {
    const replacementArray = ['Zero', 'One', 'Two', 'Three'];

    expect(replaceValuesInLabel(incompleteTargets, replacementArray)).toEqual(
      'Replace : 0}, 1}, {}, Three'
    );
  });
  it('Should not replace or modify a target for which a replacement is not provided', () => {
    const replacementArray = ['Zero', 'One', 'Two', 'Three', 'Four'];

    expect(replaceValuesInLabel(sixTargetsString, replacementArray)).toEqual(
      'Replace : Zero, One, Two, Three, Four, {5}'
    );
  });
});
