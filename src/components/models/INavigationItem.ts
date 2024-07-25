import { ILink } from './ILink';

export interface INavigationItem {
  readonly children?: ILink[];
  readonly link: ILink;
  readonly highlightedLink?: ILink;
}
