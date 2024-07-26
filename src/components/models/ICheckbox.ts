import { InputHTMLAttributes } from 'react';
import IFormComponent from './IFormComponent';

export interface ICheckbox
  extends InputHTMLAttributes<HTMLInputElement>,
    IFormComponent {
  readonly label: string;
  readonly indeterminate?: boolean;
  readonly hideLabelOnMobile?: boolean;
}
