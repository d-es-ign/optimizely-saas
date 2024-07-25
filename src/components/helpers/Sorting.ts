import { TableDataFormat } from "../models/ITable";


export type SortDirection = 'asc' | 'desc' | undefined;

export type MobileSortLabels = Partial<
  Record<
    TableDataFormat | 'text',
    {
      asc: string;
      desc: string;
    }
  >
>;
