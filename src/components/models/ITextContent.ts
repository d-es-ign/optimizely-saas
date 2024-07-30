import { ILink } from './ILink';

export interface ITextContent {
  readonly header: string;
  readonly subText: string;
  readonly cta?: ILink;
  readonly headerStyle?: string;
}
