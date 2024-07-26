import SiteEnum from './enums/SiteEnum';

interface IAnchorItem {
  readonly title: string;
  readonly id: string;
}

export interface IStickySubNavigation {
  readonly site: SiteEnum;
  readonly title: string;
  readonly items: IAnchorItem[];
}
