import { PropsWithChildren, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  readonly mountId: string;
}

const Portal = ({ mountId, children }: PropsWithChildren<Props>) => {
  const containerElement = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    document.getElementById(mountId)?.appendChild(containerElement);

    return () => {
      document.getElementById(mountId)?.removeChild(containerElement);
    };
  }, [mountId, containerElement]);  

  return createPortal(children, containerElement);
};

export default Portal;
