

import { IAuthorBlock } from '../atoms/AuthorBlock/AuthorBlock';
import { ILink } from './ILink';
import SiteEnum from './enums/SiteEnum';

export interface IQuoteImageBlock extends IAuthorBlock {
  readonly site: SiteEnum;
  readonly text: string;
  readonly link?: ILink;
}
