import { MouseEventHandler, PropsWithChildren } from "react";

interface Props {
  readonly className?: string;
  readonly onCloseCallback?: MouseEventHandler<HTMLDivElement>;
}

const Backdrop = ({
  children,
}: PropsWithChildren<Props>) => <div>{children}</div>;

export default Backdrop;
