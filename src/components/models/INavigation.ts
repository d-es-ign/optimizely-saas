import { ILink } from 'models/ILink';
import { IImage } from './IImage';
import { INavigationItem } from './INavigationItem';
import SiteEnum from './enums/SiteEnum';

export interface INavigation {
  readonly featuredContentImage: IImage;
  readonly featuredContentLink: ILink;
  readonly featuredContentText: string;
  readonly featuredContentTitle: string;
  readonly navigation: INavigationItem[];
  readonly quickLinks: ILink[];
  readonly secondaryLinks: ILink[];
  readonly title: string;
  readonly site: SiteEnum;
}

export interface ISubNavigation {
  readonly links?: ILink[];
  readonly highlightedLink?: ILink;
}
