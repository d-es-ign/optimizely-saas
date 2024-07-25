import Icon from '../../atoms/Icon/Icon';
import { ILink } from '../../models/ILink';
import SiteEnum from '../../models/enums/SiteEnum';
import { cva } from 'class-variance-authority';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type styles = 'yellow' | 'grey';

type Props = ComponentPropsWithoutRef<'a'> &
  ILink & {
    readonly variant?: styles;
    readonly site?: SiteEnum;
    readonly enableDarkMode?: boolean;
  };

const baseClasses =
  'tw-inline-block tw-rounded tw-px-3xs tw-py-3xs tw-text-center tw-text-xs rtl:tw-rotate-180';

export const variants = cva(baseClasses, {
  variants: {
    style: {
      yellow:
        'tw-bg-yellow group-hover:tw-bg-yellow-hover group-active:tw-bg-yellow-active tw-text-black',
      grey: 'tw-bg-grey-80 dark:tw-bg-white dark:group-hover:tw-bg-grey-10 group-hover:tw-bg-grey-90 group-active:tw-bg-grey-100 dark:group-active:tw-bg-grey-20 tw-fill-white dark:tw-fill-black',
    },
  },
  defaultVariants: {
    style: 'yellow',
  },
});

const Cta = ({
  site,
  className,
  linkIcon,
  target,
  text,
  url,
  variant, // variant prop can be passed in to override the site specific styles
  enableDarkMode = true,
  ...props
}: Props) => {
  const siteStyles = {
    [SiteEnum.B2B]: 'yellow',
    [SiteEnum.Deco]: 'grey',
  };

  // style is overriden if a variant is passed in, but otherwise takes on the site style
  const style = variant ?? (site && (siteStyles[site] as styles)) ?? undefined;

  const classes = twMerge(variants({ style: style }), className);

  if (!text || !url) return null;

  const iconName =
    linkIcon ?? (target === '_blank' ? 'external-link' : 'arrow-right');
  return (
    <a
      href={url}
      target={target}
      className={twMerge(
        'tw-group tw-inline-flex tw-items-center tw-gap-xxs tw-text-sm tw-text-black hover:tw-text-grey-70 active:tw-text-grey-80 rtl:tw-flex-row-reverse',
        enableDarkMode &&
          'dark:active:tw-text-grey-30" dark:tw-text-white dark:hover:tw-text-grey-20'
      )}
      {...props}
    >
      <Icon name={iconName} className={classes} size="1.25rem" />

      {text}
    </a>
  );
};

export default Cta;
