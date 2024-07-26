
import bodyScrollLock from '@/utility/helpers/bodyScrollLock';
import { RefObject, useEffect } from 'react';

// A useful hook to lock the scroll position of the rest of a page when a modal is open and provide a focus trap
const useModal = (
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
  targetRef: RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    if (typeof window === 'undefined' || !targetRef.current) {
      return;
    }

    // Retain which element activated the modal
    const activeElement = (document.activeElement ||
      document.body) as HTMLElement;
    const modalElement = targetRef.current;

    if (isOpen && modalElement) {
      bodyScrollLock(true);
      const focusableElements = modalElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      const handleTabKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement?.focus();
          } else if (
            !event.shiftKey &&
            document.activeElement === lastElement
          ) {
            event.preventDefault();
            firstElement?.focus();
          }
        }
      };

      const handleEscapeKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
          // Set focus back to the element which activated the modal
          activeElement?.focus();
        }
      };

      modalElement.addEventListener('keydown', handleTabKeyPress);
      modalElement.addEventListener('keydown', handleEscapeKeyPress);

      modalElement.focus();

      return () => {
        bodyScrollLock(false);
        modalElement.removeEventListener('keydown', handleTabKeyPress);
        modalElement.removeEventListener('keydown', handleEscapeKeyPress);
      };
    }
  }, [isOpen, setIsOpen, targetRef]);
};

export default useModal;
