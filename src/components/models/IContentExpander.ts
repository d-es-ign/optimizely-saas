import { IKeyFeatures } from './IKeyFeatures';

interface IContentExpanderItem {
  readonly anchorId?: string;
  readonly componentName: string;
  readonly content: IKeyFeatures;
  readonly title: string;
}
export interface IContentExpander {
  readonly items: IContentExpanderItem[];
}
