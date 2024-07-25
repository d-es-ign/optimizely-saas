import { ReactNode } from 'react';
import Breakpoint from './helpers/Breakpoint';
import { MobileSortLabels } from './helpers/Sorting';
import { StyleLength } from './helpers/StyleLength';

export interface ITable {
  readonly headers: TableHeader[];
  rows?: TableRow[];
  readonly variant?: 'content' | 'data';
  readonly spacing?: 'normal' | 'condensed';
  readonly loading?: boolean;
  readonly orderHandler?: (
    orderBy: string,
    orderDirection: 'asc' | 'desc'
  ) => Promise<void> | void | undefined;
  readonly defaultOrder?: TableOrder;
  readonly adaptiveLayouts?: TableLayoutCollection;
  readonly mobileOrderLabels?: MobileSortLabels;
  readonly orderDropdownLabel?: string;
  readonly skeletonRowCount?: number;
}

export type TableOrder = {
  readonly columnName: string;
  direction: 'asc' | 'desc';
};

export type TableDataFormat = 'bytes' | 'date';

export interface TableHeader {
  readonly label: string;
  readonly orderable?: boolean;
  readonly formatData?: TableDataFormat;
  // Below properties are primarily used for the Simple table and will be ignored when a adaptiveLayout is active
  readonly minWidth?: StyleLength;
  readonly displayFromBreakpoint?: Breakpoint;
}

export interface TableRow {
  data: ReactNode[];
  id?: string | number;
  selectionHandler?: () => void;
}

export type TableLayoutCollection = Partial<
  Record<Breakpoint, ResponsiveTableStructure>
>;

export interface ResponsiveTableStructure {
  // use boolean to hide/show all, or indexes of ones to show
  readonly displayHeaders: boolean | number[];
  // accepts the index(es) used for the headers/columns
  readonly columns: (number | number[])[];
  // accepts array of strings to use between header labels / data values
  readonly headerDelimiters?: (null | string[])[];
  readonly rowDelimiters?: string[][];
  // used to specify on which field grouped columns should be ordered
  readonly orderPriority?: (null | number[])[];
}

/* Example Responsive Layouts:

Desired outputs:

Mobile
-------------------------------------
td 1, td 5 | td 2 | td 6 - td 4
td 3       |      |
-------------------------------------
'', ''     | ''   | '' - ''
''         |      |

Small Tablet
th 1, th 5 | th 2 | th 6 - th 4
-------------------------------------
td 1, td 5 | td 2 | td 6 - td 4
td 3       |      |
-------------------------------------
'', ''     | ''   | '' - ''
''         |      |

Large tablet
th 1, th 5 | th 2 | th 3 | th 4 | th 6
------------------------------------------
td 1, td 5 | td 2 | td 3 | td 4 | td 6
------------------------------------------
'', ''     | ''   | ''   | ''   | ''

Desktop
th 1 | th 2 | th 3 | th 4 | th 5 | th 6
------------------------------------------
td 1 | td 2 | td 3 | td 4 | td 5 | td 6
------------------------------------------
''   | ''   | ''   | ''   | ''   | ''

it would result in: {
   sm:{

   }
   md:{

   }
   lg:{

   }
}

In this case xl and xxl are just a regular table without any special column/header needs.
Therefor we don't need to specify a layout, as it will default to the Simple Table variant.

*/
