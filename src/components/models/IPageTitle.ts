import { ILink } from './ILink';
import SiteEnum from './enums/SiteEnum';
import ThemeEnum from './enums/ThemeEnum';
import VariantTypeEnum from './enums/VariantTypeEnum';

export interface IPageTitle {
  readonly site: SiteEnum;
  readonly backgroundColour?: string;
  readonly content?: string;
  readonly ctaStyle?: Omit<VariantTypeEnum, VariantTypeEnum.Secondary>;
  readonly isMainHeading: boolean;
  readonly largeBodyText?: boolean;
  readonly links?: ILink[];
  readonly theme?: ThemeEnum;
  readonly title: string;
  readonly trumpetText?: string;
}
