
import { ReactNode } from 'react';
import { isSortable } from './isSortable';
import { SortDirection } from '@/components/helpers/Sorting';

// TODO: Handle sorting for complex data, like units ("16kg"), dates ("19/06/1991") etc. Only primitive data sort boolean/string/number supported atm.

export const sortNestedArrayOnIndex = (
  items: ReactNode[][],
  index: number,
  direction: SortDirection = 'asc'
) => {
  const d = direction === 'asc' ? 1 : -1;

  return items.sort((a, b) => {
    const aAtIndex = a[index];
    const bAtIndex = b[index];
    return sortOrder(aAtIndex, bAtIndex, d);
  });
};

export const sortObjectArrayOnNestedArray = (
  items: {
    [key: string]: unknown;
  }[],
  arrPropName: string,
  arrPropIndex: number,
  direction: SortDirection = 'asc'
) => {
  if (!items || !items[0] || !Array.isArray(items[0][arrPropName])) return;

  const d = direction === 'asc' ? 1 : -1;

  return items.sort((a, b) => {
    const aArray = a[arrPropName] as unknown[];
    const bArray = b[arrPropName] as unknown[];
    const aAtIndex = aArray[arrPropIndex];
    const bAtIndex = bArray[arrPropIndex];
    return sortOrder(aAtIndex, bAtIndex, d);
  });
};

// The a/b usage here is standard for sorting functions
const sortOrder = (a: unknown, b: unknown, d: 1 | -1) => {
  let order = 0;
  if (isSortable(a, b)) {
    if (typeof a === 'string' && typeof b === 'string') {
      if (a.toLowerCase() > b.toLowerCase()) order = d;
      if (a.toLowerCase() < b.toLowerCase()) order = -d;
    } else {
      if (a! > b!) order = d;
      if (a! < b!) order = -d;
    }
  }
  return order;
};
