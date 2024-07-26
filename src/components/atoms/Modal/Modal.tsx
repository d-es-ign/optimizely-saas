
import { motion } from 'framer-motion';
import { PropsWithChildren, useRef } from 'react';
import Portal from './Portal';
import useModal from '@/hooks/useModal';
import { fadeTransition } from '@/utility/config/animations';

export interface IModal {
  readonly closeLabel?: string;
  readonly isOpen: boolean;
  readonly setIsOpen: (state: boolean) => void;
}

const Modal = ({ children, isOpen, setIsOpen }: PropsWithChildren<IModal>) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useModal(isOpen, setIsOpen, targetRef);

  const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) =>
    event.target === contentRef.current
      ? setIsOpen(false)
      : event.stopPropagation();

  return isOpen ? (
    <Portal key="portal" mountId="portal-mount">
      <motion.div
        id="page-modal"
        role="dialog"
        aria-modal
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={fadeTransition}
        exit={{ height: 'auto' }}
        onClick={() => setIsOpen(false)}
        ref={targetRef}
        tabIndex={0}
        className="tw-fixed tw-inset-0 tw-z-max tw-overflow-scroll tw-bg-black/80 tw-outline-none"
      >
        <div
          className="tw-grid-container"
          onClick={stopPropagation}
          ref={contentRef}
        >
          {children}
        </div>
      </motion.div>
    </Portal>
  ) : null;
};

export default Modal;
