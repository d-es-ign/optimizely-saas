// Used at top-level, for an entire product category e.g. Bengalac Red Oxide Primer
export default interface IProductDatasheets {
  readonly name: string;
  readonly productId: number;
  readonly value: IDatasheetTypeSet[];
}

// A set of datasheets of a particular type e.g. TDS, SDS, AG, contains all the datasheets of this type for that product
export interface IDatasheetTypeSet {
  readonly name: string;
  readonly value: IProductDatasheet[];
  readonly children: IDatasheetTypeSetChildren[];
}

// The datastructure for the children array
export interface IDatasheetTypeSetChildren {
  readonly compId: number;
  readonly name: string;
  readonly value: IProductDatasheet[];
}

// An individual datasheet
export interface IProductDatasheet {
  readonly id: number;
  readonly name: string;
  readonly location: string;
  readonly language: string;
  readonly fileName: string;
}
