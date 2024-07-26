// See Design system: https://www.figma.com/file/BkPALTSRIDsNtMbs55hWeN/%F0%9F%8E%A8-Jotun-Digital-Design-System-Version-1.0.4---DEPT?type=design&node-id=31-13&mode=design&t=2WhTFMSLrUjDcDmh-0
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../tailwind.config'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fullConfig = resolveConfig(tailwindConfig as any);

const backgroundColours = fullConfig.theme.colors.background;

export const darkBackgrounds = [
  'brownGrey',
  'graphite',
  'amberDark',
  'coralDark',
  'slateDark',
  'oliveDark',
  'jotunBlue',
  'gbsGreen',
  'gbsLightGreen',
];

export default backgroundColours;
