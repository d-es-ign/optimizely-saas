import { useEffect, useState } from 'react';

const useDevicePixelRatio = (): number | undefined => {
  const [devicePixelRatio, setDevicePixelRatio] = useState<number>();

  const updateDevicePixelRatio = (): void => {
    setDevicePixelRatio(window.devicePixelRatio);
  };

  useEffect(() => {
    updateDevicePixelRatio();

    window.addEventListener('resize', updateDevicePixelRatio);

    return () => {
      window.removeEventListener('resize', updateDevicePixelRatio);
    };
  }, []);

  return devicePixelRatio;
};

export default useDevicePixelRatio;
