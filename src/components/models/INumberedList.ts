import { IListItem } from './IListItem';

export interface INumberedList {
  readonly columns: string;
  readonly numbered: boolean;
  readonly header: string;
  readonly items: IListItem[];
}
