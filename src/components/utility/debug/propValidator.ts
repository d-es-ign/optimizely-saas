/* Use this to check when integrating components to see if the JSON matches with the expected props.

  Usage:
  props: an object with the required props from your component like: {prop1, prop2, prop3}
  restProps: add a rest prop to your component props like: ...otherProps, then pass that prop in this function.

  Example:

  const MyDocuments = ({
  documents,
  uploadLabel,
  uploadDescription,
  discardFileButtonLabel,
  chooseFileButtonLabel,
  submitFileButtonLabel,
  ...unknownProps
}: Props) => {
  propValidator(
    {
      documents,
      uploadLabel,
      uploadDescription,
      discardFileButtonLabel,
      chooseFileButtonLabel,
      submitFileButtonLabel,
    },
    unknownProps
  );
*/

export const propValidator = (props: object, restProps: object) => {
  console.warn(
    'The following props are available but not directly used:',
    restProps
  );
  const undefinedProps = Object.entries(props).filter(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, value]) => typeof value === 'undefined'
  );
  if (undefinedProps.length) {
    console.warn(
      'The following props were expected but are currently undefined',
      undefinedProps
    );
  }
};
