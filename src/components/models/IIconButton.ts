import { ButtonHTMLAttributes } from 'react';
import { IconName } from './IIcon';

export interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly href?: string;
  readonly icon: IconName;
  readonly label: string;
  readonly onClick: () => void;
}
