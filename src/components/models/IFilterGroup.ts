export interface IFilterGroup extends IFilter {
  readonly options: IFilter[];
}

export interface IFilter {
  readonly id: string;
  readonly label: string;
}
