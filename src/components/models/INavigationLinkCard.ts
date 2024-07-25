import { IImage } from './IImage';

export interface INavigationLinkCard {
  readonly image: IImage;
  readonly linkUrl: string;
  readonly subtitle: string;
  readonly title: string;
}
