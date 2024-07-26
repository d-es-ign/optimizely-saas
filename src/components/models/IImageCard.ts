import { IImage } from './IImage';

export interface IImageCard {
  readonly aspectRatio?: number;
  readonly image: IImage;
  readonly title?: string;
  readonly text?: string;
}
