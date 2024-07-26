import { HTMLAttributes } from 'react';
import { IFilterGroup } from './IFilterGroup';
import IFormComponent from './IFormComponent';

export default interface IFilterAccordion
  extends IFormComponent,
    HTMLAttributes<HTMLDivElement> {
  readonly filters: IFilterGroup[];
  readonly allowMultipleOpen?: boolean;
}
