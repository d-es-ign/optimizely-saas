import { IImage } from './IImage';
import { ILink } from './ILink';
import { IVideo } from './IVideo';
import ThemeEnum from './enums/ThemeEnum';

export interface IInspirationCard {
  readonly cta: ILink;
  readonly image: IImage;
  readonly text: string;
  readonly theme: ThemeEnum;
  readonly video?: IVideo;
}
