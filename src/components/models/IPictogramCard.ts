import { ILink } from './ILink';

export interface IPictogramCard {
  readonly fileName: string;
  readonly fileType: string;
  readonly language: string;
  readonly country: string;
  readonly cultureCode: string;
  readonly matchesSiteCulture: boolean;
  readonly cta: ILink;
}
