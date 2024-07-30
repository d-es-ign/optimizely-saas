"use client"
import Button from '@/components/atoms/Button/Button';
import Cta from '@/components/atoms/Cta/Cta';
import Image from '@/components/atoms/Image/Image';
import Text from '@/components/atoms/Text/Text';
import { IContentCard } from '@/components/models/IContentCard';
import { ILink } from '@/components/models/ILink';
import SiteEnum from '@/components/models/enums/SiteEnum';
import VariantTypeEnum from '@/components/models/enums/VariantTypeEnum';
import backgroundColours, {
  darkBackgrounds,
} from '@/components/utility/config/backgroundColours';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

interface Props extends IContentCard {
  readonly site: SiteEnum;
  readonly variant: Exclude<VariantTypeEnum, VariantTypeEnum.Cta>;
  readonly hideImage: boolean;
  readonly hideCta: boolean;
  readonly hideText: boolean;
  readonly hideBackground: boolean;
  readonly backgroundColour?: string;
}

const ContentCard = ({
  site,
  backgroundColour,
  ctaStyle = VariantTypeEnum.Primary,
  ctas,
  hideBackground = false,
  hideCta,
  hideImage,
  hideText,
  image,
  text,
  title,
  variant = VariantTypeEnum.Primary,
}: Props) => {
  const [width, setWidth] = useState(0);
  const isDark = backgroundColour && darkBackgrounds.includes(backgroundColour);

  const ref = useRef<HTMLDivElement>(null);

  const backgroundColourHexCode =
    backgroundColour && backgroundColours?.[backgroundColour];

  useEffect(() => {
    if (ref.current) {
      const { current } = ref;
      setWidth(current.clientWidth);

      const handleResize = () => {
        setWidth(current.clientWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const primaryVariantButton = ({ linkIcon, text, url, target }: ILink) => {
    switch (ctaStyle) {
      case VariantTypeEnum.Cta:
        return (
          <Cta
            site={site}
            linkIcon={linkIcon}
            text={text}
            url={url}
            target={target}
          />
        );
      case VariantTypeEnum.Secondary:
        return (
          <Button
            site={site}
            modifier="outline"
            as="link"
            key={text}
            href={url}
            target={target}
            label={text}
          />
        );
      default:
        return (
          <Button
            site={site}
            as="link"
            key={text}
            href={url}
            target={target}
            label={text}
          />
        );
    }
  };

  return (
    <article
      className={classNames(
        { 'tw-dark': isDark && !hideBackground },
        'tw-flex tw-h-full tw-flex-col'
      )}
    >
      {image && !hideImage && (
        <Image
          imageClasses="tw-w-full"
          aspectRatio={1.6}
          sizes={`${width}px`}
          image={image}
        />
      )}
      <div
        ref={ref}
        className={classNames(
          {
            'tw-bg-grey-10 tw-text-grey-100':
              !backgroundColourHexCode && !hideBackground,
          },
          { 'tw-px-xs md:tw-px-sm xl:tw-p-md': !hideBackground },
          { 'tw-text-white': backgroundColour && !hideBackground && isDark },
          { 'tw-text-grey-100': backgroundColour && !isDark },
          'tw-flex tw-grow tw-flex-col tw-items-start tw-gap-sm tw-py-sm'
        )}
        style={{
          backgroundColor:
            backgroundColourHexCode && !hideBackground
              ? backgroundColourHexCode
              : '',
        }}
      >
        <Text
          as="h3"
          variant={
            variant === VariantTypeEnum.Primary ? 'headline' : 'sub-headline'
          }
        >
          {title}
        </Text>
        {!hideText && (
          <Text
            variant={
              variant === VariantTypeEnum.Primary ? 'body' : 'body-small'
            }
            className={classNames({
              'tw-text-grey-80':
                !backgroundColourHexCode ||
                (variant === VariantTypeEnum.Secondary && !hideImage),
            })}
          >
            {text}
          </Text>
        )}
        {!hideCta && !!ctas?.length && (
          <ul className="tw-mb-auto tw-grid tw-gap-4">
            {ctas.map((cta: ILink) => (
              <li key={cta.url} className="tw-flex">
                {variant === VariantTypeEnum.Primary ? (
                  primaryVariantButton(cta)
                ) : (
                  <a
                    href={cta.url}
                    target={cta.target}
                    className="tw-font-sans tw-text-sm tw-underline tw-underline-offset-2"
                  >
                    {cta.text}
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export default ContentCard;
