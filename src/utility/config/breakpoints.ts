import BreakpointEnum from "../../components/models/enums/BreakpointEnum";
import Breakpoint from "../../components/models/helpers/Breakpoint";
import parseNumberInString from "../../utility/format/parseNumberInString";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fullConfig = resolveConfig(tailwindConfig as any);

const { sm, md, lg, xl, xxl } = fullConfig.theme.screens;

const breakpoints = {
  sm: parseNumberInString(sm),
  md: parseNumberInString(md),
  lg: parseNumberInString(lg),
  xl: parseNumberInString(xl),
  xxl: parseNumberInString(xxl),
};

export default breakpoints;

const breakpointArray: Breakpoint[] = Object.values(BreakpointEnum);

export const breakpointsBelow = (breakpoint: Breakpoint) => {
  const upperIndex = breakpointArray.indexOf(breakpoint);
  return breakpointArray.slice(0, upperIndex);
};

export const breakpointsAbove = (breakpoint: Breakpoint) => {
  const lowerIndex = breakpointArray.indexOf(breakpoint) + 1;
  return breakpointArray.slice(lowerIndex);
};
