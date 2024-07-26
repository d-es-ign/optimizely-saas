
import SiteEnum from '@/components/models/enums/SiteEnum';
import { ButtonOrLinkProps } from '@/components/models/IButton';
import { cva, type VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import { forwardRef, type ForwardedRef } from 'react';
import { twMerge } from 'tailwind-merge';
import Icon from '../Icon/Icon';

const baseClasses = `tw-text-sm tw-flex tw-items-center tw-rounded tw-relative after:tw-content-[''] after:tw-box-content focus-visible:after:tw-rounded focus-visible:tw-outline-none tw-transition-colors focus-visible:after:tw-absolute focus-visible:after:tw-inset-[2px] focus-visible:after:tw-border-2 focus-visible:after:tw-block tw-px-4`;

export type ButtonVariant = VariantProps<typeof variants>;

export const variants = cva(baseClasses, {
  variants: {
    variant: {
      yellow:
        'tw-text-black hover:tw-bg-yellow-hover focus-visible:tw-bg-yellow focus-visible:tw-ring-yellow focus-visible:tw-ring-offset-grey-100 active:tw-bg-yellow-active disabled:tw-pointer-events-none disabled:tw-border-yellow-disabled disabled:tw-text-grey-60 disabled:tw-bg-yellow-disabled focus-visible:after:tw-border-black',
      grey30:
        'focus-visible:tw-bg-grey-30 focus-visible:tw-ring-grey-30 focus-visible:tw-ring-offset-grey-100 disabled:tw-pointer-events-none disabled:tw-border-grey-30 disabled:tw-text-grey-30 focus-visible:after:tw-border-black',
      grey80:
        'focus-visible:tw-bg-grey-80 focus-visible:tw-text-white focus-visible:tw-ring-grey-80 focus-visible:tw-ring-offset-white disabled:tw-pointer-events-none disabled:tw-border-grey-30 disabled:tw-text-grey-30 disabled:tw-text-grey-60 disabled:tw-bg-grey-30 dark:focus-visible:tw-bg-white dark:focus-visible:tw-text-grey-100 dark:focus-visible:tw-ring-white dark:focus-visible:tw-ring-offset-grey-100 dark:disabled:tw-border-grey-80 dark:disabled:tw-bg-grey-80 dark:disabled:tw-text-white focus-visible:after:tw-border-white dark:focus-visible:after:tw-border-black',
      white:
        'focus-visible:tw-bg-white focus-visible:tw-text-grey-100 focus-visible:tw-ring-white focus-visible:tw-ring-offset-grey-100 disabled:tw-pointer-events-none disabled:tw-border-grey-80 disabled:tw-bg-grey-80 disabled:tw-text-white focus-visible:after:tw-border-black',
      destructive:
        'tw-bg-red tw-text-white hover:tw-bg-red-hover focus-visible:tw-ring-red focus-visible:tw-ring-offset-white active:tw-bg-red-active disabled:tw-pointer-events-none disabled:tw-bg-red-disabled disabled:tw-text-grey-60 focus-visible:after:tw-border-white',
    },
    modifier: {
      fill: '',
      outline: 'tw-bg-transparent tw-border tw-border-current',
    },
    icon: {
      true: 'tw-rounded-full focus-visible:after:tw-rounded-full tw-py-4',
      false: 'tw-py-3.5',
    },
  },
  compoundVariants: [
    // Yellow Variants
    {
      variant: 'yellow',
      modifier: 'fill',
      className: 'tw-bg-yellow',
    },
    {
      variant: 'yellow',
      modifier: 'outline',
      className: 'tw-border-yellow',
    },
    // Grey30 Variants
    {
      variant: 'grey30',
      modifier: 'fill',
      className:
        'tw-border-grey-30 tw-bg-grey-30 tw-text-black hover:tw-bg-grey-40 active:tw-bg-grey-50',
    },
    {
      variant: 'grey30',
      modifier: 'outline',
      className:
        'tw-text-black tw-border-grey-30 hover:tw-bg-grey-40 active:tw-bg-grey-50',
    },
    // Grey80 Variants - becomes white variant by wrapping in an element with class 'dark'
    {
      variant: 'grey80',
      modifier: 'fill',
      className:
        'tw-bg-grey-80 tw-text-white hover:tw-bg-grey-90 active:tw-bg-grey-100 dark:tw-bg-white dark:tw-text-grey-100 dark:hover:tw-bg-grey-10 dark:active:tw-bg-grey-20',
    },
    {
      variant: 'grey80',
      modifier: 'outline',
      className:
        'tw-border-grey-80 tw-text-black hover:tw-bg-grey-90 hover:tw-text-white active:tw-bg-grey-100 dark:tw-text-white dark:hover:tw-bg-grey-10 dark:hover:tw-text-grey-100 dark:active:tw-bg-grey-20',
    },
    // White Variants
    {
      variant: 'white',
      modifier: 'fill',
      className:
        'tw-bg-white tw-text-grey-100 hover:tw-bg-grey-10 active:tw-bg-grey-20',
    },
    {
      variant: 'white',
      modifier: 'outline',
      className:
        'tw-bg-transparent tw-text-white hover:tw-bg-grey-10 hover:tw-text-grey-100 active:tw-bg-grey-20',
    },
  ],
  defaultVariants: {
    variant: 'yellow',
    icon: false,
  },
});

const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonOrLinkProps
>(
  (
    {
      as = 'button',
      buttonClasses,
      disabled,
      iconClasses,
      iconName,
      iconSize,
      label,
      modifier = 'fill',
      site,
      variant,
      ...props
    },
    ref
  ) => {
    const siteStyles = {
      [SiteEnum.B2B]: 'yellow',
      [SiteEnum.Deco]: 'grey80',
    };

    const style =
      variant ??
      (site && (siteStyles[site] as keyof ButtonVariant['variant'])) ??
      undefined;

    const iconOnly = !!iconName && !label;

    const classes = twMerge(
      variants({ variant: style, modifier, icon: iconOnly }),
      buttonClasses
    );

    const Content = (
      <div
        className={classNames(
          'tw-flex tw-w-full tw-items-center tw-justify-center tw-gap-2.5'
        )}
      >
        {label && <span>{label}</span>}
        {iconName && (
          <Icon name={iconName} className={iconClasses} size={iconSize} />
        )}
      </div>
    );

    if (as === 'link') {
      const anchorProps =
        props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
      const { href } = anchorProps;

      return (
        <a
          className={classes}
          href={href}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          {...anchorProps}
        >
          {Content}
        </a>
      );
    } else {
      return (
        <button
          className={classes}
          ref={ref as ForwardedRef<HTMLButtonElement>}
          disabled={!!disabled}
          {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {Content}
        </button>
      );
    }
  }
);

Button.displayName = 'Button';
export default Button;
