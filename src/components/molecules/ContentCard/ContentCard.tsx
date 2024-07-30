  "use client"
  import Button from '@/components/atoms/Button/Button';
  import Cta from '@/components/atoms/Cta/Cta';
  import Icon from '@/components/atoms/Icon/Icon';
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
    readonly hideText?: boolean;
    readonly hideBackground?: boolean;
    readonly backgroundColour: string;
    readonly tags?:string[]
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
    tags,
    variant = VariantTypeEnum.Primary,
  }: Props) => {
    const [width, setWidth] = useState(0);
    const isDark = backgroundColour && darkBackgrounds.includes(backgroundColour);
    console.log(backgroundColour)
    const ref = useRef<HTMLDivElement>(null);

    const backgroundColourHexCode =
    backgroundColour
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
        
        <div className='tw-relative tw-flex tw-items-end tw-pb-4 tw-pl-4 tw-gap-2.5' style={{minHeight:'300px' , backgroundColor:backgroundColourHexCode}}>
        <div className='tw-absolute tw-top-4 tw-bg-white tw-rounded-full tw-min-w-6 tw-min-h-6 tw-text-center tw-cursor-pointer'>
        <Icon  name='heart'/>
        </div>
        {tags && 
          tags.map((tag)=> (
            <span className=' tw-bg-grey-80 tw-p-2 tw-text-[12px]'>{tag}</span>
          )
        )}
        {image && !hideImage && (
          <Image
            imageClasses="tw-w-full"
            aspectRatio={1.6}
            sizes={`${width}px`}
            image={image}
          />
        )}
        </div>
    
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
            'tw-flex tw-grow tw-flex-col tw-items-start  tw-py-sm  tw-px-3'
          )}
          style={{
            backgroundColor:
              backgroundColourHexCode && !hideBackground
                ? backgroundColourHexCode
                : '',
          
          }}
        >
          <Text
            className='tw-text-[12px] tw-text-grey-100'
          >
            {title}
          </Text>
          {!hideText && (
            <Text
            className='tw-text-[22px] tw-text-grey-100'
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
