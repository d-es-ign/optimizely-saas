import { IImage } from './IImage';
import { ILink } from './ILink';
import SiteEnum from './enums/SiteEnum';

export interface IFooter {
  readonly site: SiteEnum;
  readonly copyrightNotice: string;
  readonly cta: ILink;
  readonly logo: IImage;
  readonly navigationLinks?: ILink[];
  readonly secondaryLinks?: ILink[];
  readonly socialLinks?: ILink[];
  readonly text?: string;
}
