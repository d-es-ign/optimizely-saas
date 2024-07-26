import { IImage } from './IImage';

export interface IImageWithCaption {
  readonly caption?: string;
  readonly image: IImage;
}
