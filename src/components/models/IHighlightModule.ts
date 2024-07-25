import { IImage } from './IImage';
import { ILink } from './ILink';
import PositioningEnum from './enums/PositioningEnum';
import SiteEnum from './enums/SiteEnum';
import VariantTypeEnum from './enums/VariantTypeEnum';

export interface IHighlightModule {
  readonly site: SiteEnum;
  readonly image: IImage;
  readonly imagePosition: PositioningEnum;
  readonly header: string;
  readonly text?: string;
  readonly ctaButton: ILink;
  readonly ctaStyle: VariantTypeEnum;
}
