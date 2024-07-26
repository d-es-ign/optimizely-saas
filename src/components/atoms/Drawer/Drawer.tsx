
import useMediaQuery from '@/components/utility/hooks/useMediaQuery';
import useModal from '@/hooks/useModal';
import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import Portal from '../Modal/Portal';
import Backdrop from '../Backdrop/Backdrop';
import { slideTransition } from '@/components/utility/config/animations';
import Icon from '../Icon/Icon';

interface Props {
  readonly isOpen: boolean;
  readonly key?: string;
  readonly setIsOpen: (state: boolean) => void;
  readonly showAnimations?: boolean;
  readonly slideLeft?: boolean;
  readonly animateVerticallyOnMobile?: boolean;
}

const Drawer = ({
  children,
  isOpen,
  setIsOpen,
  showAnimations = true,
  slideLeft = true,
  animateVerticallyOnMobile = false,
}: PropsWithChildren<Props>) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery(752);

  useModal(isOpen, setIsOpen, targetRef);

  const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) =>
    event.target === contentRef.current
      ? setIsOpen(false)
      : event.stopPropagation();

  const useMobileAnimation = animateVerticallyOnMobile && isMobile;

  const slideIn = showAnimations
    ? {
        animate: {
          y: 0,
          x: 0,
        },
        exit: {
          y: useMobileAnimation ? '100%' : 0,
          x: !useMobileAnimation ? (slideLeft ? '100%' : '-100%') : 0,
        },
      }
    : {
        animate: {},
        exit: {},
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal key="portal" mountId="portal-mount">
          <>
            <Backdrop
              className="tw-z-50"
              onCloseCallback={() => setIsOpen(false)}
            />
            <motion.aside
              ref={targetRef}
              variants={slideIn}
              initial="exit"
              animate="animate"
              exit="exit"
              transition={slideTransition}
              key="drawer"
              role="complementary"
              className={twMerge(
                'tw-fixed tw-right-0 tw-top-0 tw-z-50 tw-h-dvh tw-w-full tw-overflow-y-scroll tw-bg-white tw-outline-offset-2 md:tw-max-w-[480px] rtl:tw-left-0 rtl:tw-right-auto dark:tw-bg-grey-10',
                animateVerticallyOnMobile &&
                  'max-md:tw-mt-[120px] max-md:tw-h-[calc(100dvh-120px)]'
              )}
              tabIndex={0}
            >
              <div className="tw-relative tw-h-full tw-px-xs tw-py-5 md:tw-px-md md:tw-py-sm">
                <div className="tw-mb-sm tw-flex">
                  <button
                    type="button"
                    aria-label="close"
                    className="tw-absolute tw-right-xs tw-top-5 tw-z-10 md:tw-right-md md:tw-top-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon name="cross" className="tw-text-2xl" size="1.5rem" />
                  </button>
                </div>
                <div ref={contentRef} onClick={stopPropagation}>
                  {children}
                </div>
              </div>
            </motion.aside>
          </>
        </Portal>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
