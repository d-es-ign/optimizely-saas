import { PropsWithChildren, ReactNode } from 'react';

interface Props {
  readonly condition: boolean;
  readonly wrapper: (child: ReactNode) => ReactNode;
}
const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: PropsWithChildren<Props>) => (condition ? wrapper(children) : children);

export default ConditionalWrapper;
