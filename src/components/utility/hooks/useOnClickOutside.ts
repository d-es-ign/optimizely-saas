import type { RefObject } from 'react';
import { useEffect } from 'react';

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
): void => {
  useEffect(
    () => {
      const listener = (event: Event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event?.target as Node)) {
          return;
        }
        handler(event);
      };

      if (document) {
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
      }

      return () => {
        if (document) {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        }
      };
    },

    // Reload only if ref or handler changes
    [ref, handler],
  );
};

export default useOnClickOutside;
