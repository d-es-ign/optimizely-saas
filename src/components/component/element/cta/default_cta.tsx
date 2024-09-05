import { type CTAElementDataFragment } from '@/gql/graphql';
import { extractSettings } from '@remkoj/optimizely-cms-react/components';
import Button from './base';
import type { CTAComponent, CTALayoutProps, DefaultCTALayoutProps } from './types';

export const DefaultCTAElement: CTAComponent<CTAElementDataFragment, DefaultCTALayoutProps> = ({
  data: { link, text },
  layoutProps,
  className,
  ...containerProps
}) => {
  const { buttonAlign = 'auto', buttonType = 'primary', buttonColor = 'default' } = extractSettings(layoutProps);
  const cssClasses: (string | undefined)[] = [
    'tw-flex tw-flex-col tw-min-h-[max(20vh,240px)] tw-max-h-[480px] tw-justify-center tw-w-full',
    className,
  ];
  switch (buttonAlign) {
    case 'left':
      cssClasses.push('tw-items-start');
      break;
    case 'center':
      cssClasses.push('tw-items-center');
      break;
    case 'right':
      cssClasses.push('tw-items-end');
      break;
    default:
      // Nothing
      break;
  }
  switch (buttonColor) {
    case 'default':
    case 'light':
      cssClasses.push('tw-bg-grey-20');
      break;

    case 'dark':
      cssClasses.push('tw-bg-blue');
      break;
    default:
      // Nothing
      break;
  }

  return (
    <div {...containerProps} className={cssClasses.join(' ')}>
      <Button href={link} text={text} buttonType={buttonType} buttonColor={buttonColor} />
    </div>
  );
};

/**
 * Check if the default template should be applied to this CTA component
 *
 * @param       props   The Layout properties
 * @returns     Whether or not these properties are for a Default CTA Template
 */
export function isDefaultTemplate(props?: CTALayoutProps | null): props is DefaultCTALayoutProps {
  return props?.template == 'CTAElementDefaultStyles' || props?.template == null;
}
