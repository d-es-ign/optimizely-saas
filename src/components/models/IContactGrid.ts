import { IContactCard } from './IContactCard';
import { IFilter } from './IFilterGroup';

export interface IContactGrid {
  readonly header: string;
  readonly subText: string;
  readonly apiEndpoint: string;
  readonly selectCountryLabel: string;
  readonly selectDepartmentLabel: string;
  readonly loadingLabel: string;
  // I've intentionally used the same as we use for filters {id, label} - let's keep this consistent
  readonly countryOptions: IFilter[];
  readonly defaultCountry: IFilter;
  readonly departmentOptions: string[];
  readonly culture: string;
  readonly initialContactCards: IContactCard[];
}

export interface IContactFormData {
  cultureName: string;
  country?: string;
  department?: string;
}
