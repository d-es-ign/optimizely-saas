import { IContentCard } from './IContentCard';
import { ILink } from './ILink';
import DisplayStyleEnum from './enums/DisplayStyleEnum';
import SiteEnum from './enums/SiteEnum';
import VariantTypeEnum from './enums/VariantTypeEnum';

export interface IContentCards {
  readonly site: SiteEnum;
  readonly title?: string;
  readonly displayAs: DisplayStyleEnum;
  readonly cardStyle: Exclude<VariantTypeEnum, VariantTypeEnum.Cta>;
  readonly itemsPerRow: 2 | 3 | 4;
  readonly cta: ILink;
  readonly hideImages: boolean;
  readonly hideCardText: boolean;
  readonly hideCardCtas: boolean;
  readonly hideCardBackground: boolean;
  readonly backgroundColour: string;
  readonly cards: IContentCard[];
}
