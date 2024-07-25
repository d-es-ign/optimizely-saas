import { IFilter, IFilterGroup } from './IFilterGroup';
import IProductDatasheets from './IProductDatasheets';
import SiteEnum from './enums/SiteEnum';

export interface ITechnicalDownloadSearch {
  readonly addAllLabel: string;
  readonly addLabel: string;
  readonly apiEndpoint: string;
  readonly applyLabel: string;
  readonly closeLabel: string;
  readonly collapseLabel: string;
  readonly countries: (IFilter & { readonly languages: IFilter[] })[];
  readonly countryPlaceholder: string;
  readonly currentCulture: string;
  readonly defaultCountryCode?: string;
  readonly documentsAddedLabel: string;
  readonly documentsLabel: string;
  readonly documentsShownLabel: string;
  readonly downloadAsMultipleLabel: string;
  readonly downloadAsSingleLabel: string;
  readonly downloadLabel: string;
  readonly expandLabel: string;
  readonly filterLabel: string;
  readonly filters: IFilterGroup;
  readonly header: string;
  readonly languagePlaceholder: string;
  readonly loadingLabel: string;
  readonly noResultsHeader: string;
  readonly noResultsLabel: string;
  readonly noResultsText: string;
  readonly noSearchTermError: string;
  readonly noSearchTermHeader: string;
  readonly noSearchTermText: string;
  readonly openLabel: string;
  readonly removeAllLabel: string;
  readonly removeLabel: string;
  readonly requiredErrorMessage: string;
  readonly searchLabel: string;
  readonly site: SiteEnum;
  readonly subText: string;
}

export interface ITechnicalDownloadSearchFormData {
  freetext?: string;
  [filterId: string]: string | string[] | undefined;
}

export interface IProductDatasheetsResponse {
  products: IProductDatasheets[];
}
