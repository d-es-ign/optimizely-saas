
import { ReactNode } from 'react';
import { VariantType } from './IAccordion';
import { TextVariant } from '../atoms/Text/Text';

export type IVariantClasses = {
  [Key in VariantType]: {
    readonly buttonClasses: string;
    readonly buttonContentTextStyle: TextVariant;
    readonly buttonHeaderTextStyle: TextVariant;
    readonly textContentClasses?: string;
  };
};

export interface IAccordionItem {
  readonly buttonClasses?: string;
  readonly children?: ReactNode;
  readonly isOpen?: boolean;
  readonly text?: string;
  readonly title: string;
  readonly variant?: VariantType;
  readonly callback?: () => void;
}
