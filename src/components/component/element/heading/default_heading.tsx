import { type HeadingElementDataFragment } from '@/gql/graphql';
import { extractSettings } from '@remkoj/optimizely-cms-react/components';
import type { DefaultHeadingLayoutProps, HeadingComponent, HeadingLayoutProps } from './types';

export const DefaultHeadingElement: HeadingComponent<HeadingElementDataFragment, DefaultHeadingLayoutProps> = ({
  data: { headingText },
  layoutProps,
  className,
  ...containerProps
}) => {
  const { headingType, showAs, textAlign, transform } = extractSettings(layoutProps);
  const cssClasses: (string | undefined)[] = [
    className,
    'tw-flex-initial',
    'tw-mx-auto tw-my-lg tw-w-full tw-max-w-[1440px] tw-px-lg',
  ];
  const Component = showAs == 'element' ? 'p' : !headingType || headingType == 'plain' ? 'p' : headingType;

  switch (textAlign) {
    case 'left':
      cssClasses.push('tw-text-left tw-mr-auto');
      break;
    case 'center':
      cssClasses.push('tw-text-center tw-mx-auto');
      break;
    case 'right':
      cssClasses.push('tw-text-right tw-ml-auto');
      break;
    case 'justify':
      cssClasses.push('tw-text-justify');
      break;
    default:
      break;
  }
  switch (transform) {
    case 'uppercase':
      cssClasses.push('tw-uppercase');
      break;
    case 'lowercase':
      cssClasses.push('tw-lowercase');
      break;
    case 'capitalize':
      cssClasses.push('tw-capitalize');
      break;
  }
  switch (headingType) {
    case 'h1':
      cssClasses.push('tw-font-bold tw-my-0');
      cssClasses.push('tw-text-[4.8rem]');
      cssClasses.push('lg:tw-text-[6.4rem]');
      cssClasses.push('xl:tw-text-[7.2rem]');
      break;
    case 'h2':
      cssClasses.push('tw-font-bold tw-my-0');
      cssClasses.push('tw-text-[4.2rem]');
      cssClasses.push('lg:tw-text-[4.8rem]');
      cssClasses.push('xl:tw-text-[6.4rem]');
      break;
    case 'h3':
      cssClasses.push('tw-font-bold tw-my-0');
      cssClasses.push('tw-text-[3.6rem]');
      cssClasses.push('lg:tw-text-[4.2rem]');
      cssClasses.push('xl:tw-text-[4.8rem]');
      break;
    case 'h4':
      cssClasses.push('tw-font-bold tw-my-0');
      cssClasses.push('tw-text-[3.6rem]');
      cssClasses.push('lg:tw-text-[4.2rem]');
      cssClasses.push('xl:tw-text-[4.8rem]');
      break;
    case 'h5':
      cssClasses.push('tw-font-bold tw-my-0');
      cssClasses.push('tw-text-[3.6rem]');
      cssClasses.push('lg:tw-text-[4.2rem]');
      cssClasses.push('xl:tw-text-[4.8rem]');
      break;
    case 'h6':
      cssClasses.push('tw-font-bold tw-my-0');
      break;
    case 'plain':
      cssClasses.push('tw-my-0');
      break;
  }

  const cssClassName = cssClasses.filter((x) => x).join(' ');

  return (
    <div className="">
      <Component className={cssClassName} {...containerProps}>
        {headingText}
      </Component>
    </div>
  );
};

export function isDefaultTemplate(props?: HeadingLayoutProps | null): props is DefaultHeadingLayoutProps {
  return props?.template == 'HeadingStyles';
}
