"use client"
import Cta from '@/components/atoms/Cta/Cta';
import Text from '@/components/atoms/Text/Text';
import { IContentCards } from '@/components/models/IContentCards';
import VariantTypeEnum from '@/components/models/enums/VariantTypeEnum';
import ContentCard from '@/components/molecules/ContentCard/ContentCard';
import NavigationCarousel from '@/components/molecules/NavigationCarousel/NavigationCarousel';
import classNames from 'classnames';
import { SwiperSlide } from 'swiper/react';

const ContentCards = ({
  site,
  title,
  displayAs,
  cardStyle,
  itemsPerRow,
  cta,
  hideImages,
  hideCardText,
  hideCardCtas,
  backgroundColour,
  hideCardBackground,
  cards,
}: IContentCards) => {
  const gridClasses = [
    // we use itemsPerRow with the index of these array elements to determine the classes
    'tw-col-span-full md:tw-col-span-3 lg:tw-col-span-6',
    'tw-col-span-full md:tw-col-span-3 lg:tw-col-span-4',
    'tw-col-span-full md:tw-col-span-3 lg:tw-col-span-6 xl:tw-col-span-3',
  ];

  const ctaEl = cta ? (
    <Cta
      className="tw-ml-auto"
      site={site}
      text={cta.text}
      url={cta.url}
      target={cta.target}
    />
  ) : null;

  return (
    <section className="tw-w-full">
      {displayAs === 'grid' && (
        <>
          <div className="tw-grid-container">
            {(title || cta) && (
              <div className="tw-col-span-full tw-flex tw-items-center tw-justify-between tw-pb-sm md:tw-pb-md xxl:tw-pb-16">
                {title && (
                  <Text variant="headline" className="tw-text-grey-100">
                    {title}
                  </Text>
                )}
                {ctaEl && <div className="max-md:tw-hidden">{ctaEl}</div>}
              </div>
            )}
          </div>
          <div className="tw-grid-container tw-gap-y-4 md:tw-gap-y-8">
            {cards.map((card) => (
              <div
                key={card.title}
                className={classNames(
                  gridClasses[itemsPerRow - 2],
                  'tw-col-span-full'
                )}
              >
                <ContentCard
                  {...card}
                  site={site}
                  variant={cardStyle}
                  hideCta={hideCardCtas}
                  hideImage={hideImages}
                  hideText={hideCardText}
                  backgroundColour={backgroundColour}
                  hideBackground={
                    (cardStyle === VariantTypeEnum.Secondary && !hideImages) ||
                    hideCardBackground
                  }
                />
              </div>
            ))}
          </div>
          {ctaEl && <div className="tw-container md:tw-hidden">{ctaEl}</div>}
        </>
      )}
      {displayAs === 'carousel' && (
        <NavigationCarousel
          site={site}
          title={title}
          id={`${title}-content-cards-carousel`}
          numberOfSlides={cards.length}
          slidesToShowTabletLandscape={itemsPerRow < 3 ? 2 : itemsPerRow - 1}
          slidesToShowDesktop={itemsPerRow}
          slidesToShowLargeDesktop={itemsPerRow}
        >
          {cards.map((card) => (
            <SwiperSlide className="stretch-card tw-h-full" key={card.title}>
              <ContentCard
                {...card}
                site={site}
                variant={cardStyle}
                hideCta={hideCardCtas}
                hideImage={hideImages}
                hideText={hideCardText}
                backgroundColour={backgroundColour}
                hideBackground={
                  cardStyle === VariantTypeEnum.Secondary || hideCardBackground
                }
              />
            </SwiperSlide>
          ))}
        </NavigationCarousel>
      )}
    </section>
  );
};

export default ContentCards;
