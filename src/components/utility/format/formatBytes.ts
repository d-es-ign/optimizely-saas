// import { NumericRange } from '@models/helpers/NumericRange';

import { NumericRange } from "@/components/helpers/NumericRange";

const formatBytes = (bytes: number, decimals: NumericRange<0, 17> = 2) => {
  if (bytes === 0) {
    return '0';
  }

  const factor = 1024;
  const decimal = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'];

  const i = Math.floor(Math.log(bytes) / Math.log(factor));

  if (!sizes[i]) return;
  return `${parseFloat((bytes / Math.pow(factor, i)).toFixed(decimal))}${
    sizes[i]
  }`;
};

export default formatBytes;
