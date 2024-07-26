import { IImage } from './IImage';
import { ILink } from './ILink';
import VariantTypeEnum from './enums/VariantTypeEnum';

export interface IContentCard {
  readonly image?: IImage;
  readonly title: string;
  readonly text: string;
  readonly ctas?: ILink[];
  readonly ctaStyle?: VariantTypeEnum;
}
