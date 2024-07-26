import { IPictogramCard } from './IPictogramCard';

export interface IDataSheets {
  readonly files: IPictogramCard[];
  readonly availableLanguages: string[];
}
