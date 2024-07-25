
import Breakpoint from '@/components/helpers/Breakpoint';
import BreakpointEnum from '@/components/models/enums/BreakpointEnum';
import breakpoints from '@/utility/config/breakpoints';
import { useCallback, useEffect, useState } from 'react';

const getCurrentBreakpoint = (): Breakpoint => {
  const width = window.innerWidth;
  let device;

  if (width < breakpoints.md) {
    device = BreakpointEnum.Small;
  } else if (width < breakpoints.lg) {
    device = BreakpointEnum.Medium;
  } else if (width < breakpoints.xl) {
    device = BreakpointEnum.Large;
  } else if (width < breakpoints.xxl) {
    device = BreakpointEnum.XLarge;
  } else device = BreakpointEnum.Max;

  return device;
};

const useBreakpoint = (): Breakpoint | undefined => {
  const [screen, setScreen] = useState<Breakpoint>();

  const resizeHandler = useCallback(() => {
    setScreen(getCurrentBreakpoint());
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    setScreen(getCurrentBreakpoint());

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [resizeHandler]);

  return screen;
};

export default useBreakpoint;
