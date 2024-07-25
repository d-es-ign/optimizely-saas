import { IconName } from './IIcon';

interface IKeyFeature {
  readonly icon: IconName;
  readonly text: string;
  readonly header: string;
}

export interface IKeyFeatures {
  readonly anchorId?: string;
  readonly items: IKeyFeature[];
}
