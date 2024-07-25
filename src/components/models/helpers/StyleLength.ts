type LengthUnit =
  | 'cm'
  | 'mm'
  | 'in'
  | 'px'
  | 'pt'
  | 'pc'
  | 'em'
  | 'ex'
  | 'ch'
  | 'rem'
  | 'vw'
  | 'vh'
  | 'vmin'
  | 'vmax'
  | '%';
export type StyleLength = `${number}${LengthUnit}` | 0 | '0';
