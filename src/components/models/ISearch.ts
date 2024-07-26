import { InputHTMLAttributes } from 'react';
import IFormComponent from './IFormComponent';

export interface ISearch
  extends InputHTMLAttributes<HTMLInputElement>,
    IFormComponent {
  readonly autoCompleteEndpoint: string;
  readonly autoFocus?: boolean;
  readonly initialValue?: string;
  readonly large?: boolean;
  readonly backgroundColor?: string;
  readonly searchClasses?: string;
  readonly predictiveCharacterLength?: number;
}
