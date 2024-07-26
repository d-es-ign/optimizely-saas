import SizeEnum from './enums/SizeEnum';
import ThemeEnum from './enums/ThemeEnum';

export interface ILoadingSpinner {
  readonly size?: Exclude<SizeEnum, SizeEnum.XLarge>;
  readonly loadingLabel: string;
  readonly theme?: ThemeEnum;
}
