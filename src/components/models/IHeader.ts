import { IImage } from './IImage';
import { ILink } from './ILink';
import { INavigationItem } from './INavigationItem';
import SiteEnum from './enums/SiteEnum';

export interface IHeader {
  readonly accountLabel: string;
  readonly accountMenu: IAccountMenu;
  readonly featuredContentImage: IImage;
  readonly featuredContentLink: ILink;
  readonly featuredContentText: string;
  readonly featuredContentTitle: string;
  readonly logo: string;
  readonly logoAlt: string;
  readonly menuLabel: string;
  readonly navigation: INavigationItem[];
  readonly quickLinks: ILink[];
  readonly quickLinksLabel?: string;
  readonly secondaryLinks: ILink[];
  readonly site: SiteEnum;
  readonly title: string;
}

export interface IAccountMenu {
  readonly dashboardLink: ILink;
  readonly logOutLink: ILink;
  readonly links: ILink[];
}
