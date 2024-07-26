import { IImage } from './IImage';
import { ITextContent } from './ITextContent';
import { IVideo } from './IVideo';
import PositioningEnum from './enums/PositioningEnum';
import SiteEnum from './enums/SiteEnum';
import VerticalAlignmentEnum from './enums/VerticalAlignmentEnum';

export interface IStorytellingModule extends ITextContent {
  readonly site: SiteEnum;
  readonly image?: IImage | null;
  readonly positioning: PositioningEnum;
  readonly poster?: IImage;
  readonly textAlignment: VerticalAlignmentEnum;
  readonly video?: IVideo | null;
}
