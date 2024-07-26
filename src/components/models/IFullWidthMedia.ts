import { IImage } from './IImage';
import { IVideo } from './IVideo';
import PositioningEnum from './enums/PositioningEnum';
import SiteEnum from './enums/SiteEnum';

export interface IFullWidthMedia {
  readonly site: SiteEnum;
  readonly caption?: string;
  readonly image: IImage;
  readonly mobileImage?: IImage;
  readonly mobileVideo?: IVideo;
  readonly textAlignment?: PositioningEnum;
  readonly video?: IVideo;
}
