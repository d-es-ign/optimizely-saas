import { IconName } from './IIcon';

export interface ILink {
  readonly text: string;
  readonly url: string;
  readonly linkIcon?: IconName;
  readonly target?: string;
}
