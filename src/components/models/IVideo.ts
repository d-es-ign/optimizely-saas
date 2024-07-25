import { IImage } from './IImage';

export interface IVideo {
  readonly poster?: IImage | null;
  readonly videoSource: string;
  readonly meta?: {
    readonly contentLink: string;
  };
}
