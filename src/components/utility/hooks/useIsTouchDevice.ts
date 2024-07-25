import { useEffect, useState } from 'react';

const useIsTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const checkIfTouchDevice = () => {
    const hasTouchPoints =
      navigator.maxTouchPoints > 0 || 'ontouchstart' in window;

    // Helps with detecting whether a mouse is used
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;

    setIsTouchDevice(hasTouchPoints && !isFinePointer);
  };

  useEffect(() => {
    checkIfTouchDevice();

    window.addEventListener('resize', checkIfTouchDevice);
    window.addEventListener('pointerdown', checkIfTouchDevice);

    return () => {
      window.removeEventListener('resize', checkIfTouchDevice);
      window.removeEventListener('pointerdown', checkIfTouchDevice);
    };
  }, []);

  return isTouchDevice;
};

export default useIsTouchDevice;
