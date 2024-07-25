
import { VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
import { IconName } from './IIcon';
import SiteEnum from './enums/SiteEnum';
import { ButtonVariant , variants} from '../atoms/Button/Button';

interface CommonProps extends VariantProps<typeof variants> {
  readonly site?: SiteEnum;
  readonly buttonClasses?: string;
  readonly disabled?: boolean;
  readonly iconClasses?: string;
  readonly iconName?: IconName;
  readonly iconSize?: string;
  readonly label?: string;
  readonly variant?: ButtonVariant['variant'];
}

interface ButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  readonly as?: 'button';
}

interface LinkProps
  extends CommonProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly as: 'link';
  readonly href: string;
}

export type ButtonOrLinkProps = ButtonProps | LinkProps;
