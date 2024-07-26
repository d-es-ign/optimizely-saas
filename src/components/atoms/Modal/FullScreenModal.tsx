
import { PropsWithChildren, useRef } from 'react';
import Portal from './Portal';
import useModal from '@/hooks/useModal';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';

export interface IFullScreenModal {
  readonly closeLabel?: string;
  readonly isOpen: boolean;
  readonly setIsOpen: (state: boolean) => void;
  readonly title: string;
}

const FullScreenModal = ({
  children,
  closeLabel = 'close',
  isOpen,
  setIsOpen,
  title,
}: PropsWithChildren<IFullScreenModal>) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useModal(isOpen, setIsOpen, targetRef);

  return isOpen ? (
    <Portal key="portal" mountId="portal-mount">
      <div
        ref={targetRef}
        tabIndex={0}
        className="tw-fixed tw-inset-0 tw-z-max tw-bg-grey-10 tw-outline-none"
        id="filters-modal"
      >
        <div className="tw-flex tw-h-full tw-w-full tw-flex-col">
          <div className="tw-flex tw-w-full tw-items-center tw-justify-between tw-border-b tw-border-grey-20 tw-bg-grey-10 tw-p-xs tw-outline-none xl:tw-hidden">
            <Text variant="body-14-semibold">{title}</Text>
            <button
              type="button"
              aria-label={closeLabel}
              onClick={() => setIsOpen(false)}
            >
              <Icon name="cross" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

export default FullScreenModal;
