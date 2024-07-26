import { IImageWithCaption } from './IImageWithCaption';
import OrientationEnum from './enums/OrientationEnum';
export interface ITwoColumnImageBlock {
  readonly images: [IImageWithCaption, IImageWithCaption];
  readonly orientation: OrientationEnum;
}
