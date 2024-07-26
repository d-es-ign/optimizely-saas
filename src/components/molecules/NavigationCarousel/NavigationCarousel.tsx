import Button from '@/components/atoms/Button/Button';
import Carousel from '@/components/atoms/Carousel/Carousel';
import Text from '@/components/atoms/Text/Text';
import SiteEnum from '@/components/models/enums/SiteEnum';
import useBreakpoint from '@/components/utility/hooks/useBreakpoint';
import classNames from 'classnames';
import { PropsWithChildren, useState } from 'react';
import slugify from 'slugify';
import SwiperType from 'swiper';
import { Pagination } from 'swiper/modules';
import { SwiperProps } from 'swiper/react';
interface INavigationCarousel extends SwiperProps {
  readonly site: SiteEnum;
  readonly id: string;
  readonly loop?: boolean;
  readonly numberOfSlides: number;
  readonly overflow?: boolean;
  readonly slidesToShowDesktop?: number;
  readonly slidesToShowLargeDesktop?: number;
  readonly slidesToShowMobile?: number;
  readonly slidesToShowTabletLandscape?: number;
  readonly slidesToShowTabletPortrait?: number;
  readonly title?: string;
  readonly titleClasses?: string;
  readonly titleElement?: JSX.Element;
}

const NavigationCarousel = ({
  site,
  children,
  id,
  numberOfSlides,
  overflow = true,
  slidesToShowDesktop = 3,
  slidesToShowLargeDesktop = 3.5,
  slidesToShowMobile = 1.1,
  slidesToShowTabletLandscape = 2.5,
  slidesToShowTabletPortrait = 2,
  title,
  titleElement,
  ...props
}: PropsWithChildren<INavigationCarousel>) => {
  const [currentSlidesPerView, setCurrentSlidesPerView] = useState(0);
  const breakpoint = useBreakpoint();
  const hasMoreItemsToShow = numberOfSlides > currentSlidesPerView;

  if (!breakpoint) return null;

  const handleSwiperUpdate = (swiper: SwiperType) => {
    const slidesPerView = swiper?.params?.slidesPerView;
    setCurrentSlidesPerView(
      slidesPerView && typeof slidesPerView === 'number' ? slidesPerView : 0
    );
  };

  const slugifiedId = slugify(id, {
    remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
  });

  return (
    <div className="tw-w-full tw-overflow-hidden">
      <div className="tw-grid-container tw-gap-y-sm md:tw-gap-y-md xxl:tw-gap-y-[60px]">
        <div className="tw-col-span-full tw-flex tw-items-center tw-justify-between">
          {title && (
            <Text className="tw-text-grey-100" variant="headline">
              {title}
            </Text>
          )}
          {!title && titleElement}
          <div
            className={classNames(
              hasMoreItemsToShow
                ? 'md:tw-flex md:tw-flex-row rtl:md:tw-flex-row-reverse'
                : 'md:tw-hidden',
              'tw-ml-auto tw-mt-auto tw-hidden tw-shrink-0 tw-gap-xs tw-py-[6px] rtl:tw-ml-0 rtl:tw-mr-auto'
            )}
          >
            <Button
              site={site}
              iconName="chevron-left"
              id={`prevBtn-${slugifiedId}`}
            />
            <Button
              site={site}
              iconName="chevron-right"
              id={`nextBtn-${slugifiedId}`}
            />
          </div>
        </div>
        <div
          className={classNames(
            { 'overflow-swiper': overflow },
            'tw-col-span-full'
          )}
        >
          <Carousel
            enabled={hasMoreItemsToShow}
            navId={slugifiedId}
            pagination={{
              el: `#${slugifiedId}-pagination-carousel`,
              clickable: true,
            }}
            className="overflow-xxl tw-w-full"
            onResize={handleSwiperUpdate}
            onInit={handleSwiperUpdate}
            watchSlidesProgress
            additionalModules={[Pagination]}
            {...props}
            breakpoints={{
              0: {
                spaceBetween: 16,
                slidesPerView: slidesToShowMobile,
              },
              752: {
                spaceBetween: 16,
                slidesPerView: slidesToShowTabletPortrait,
              },
              1024: {
                spaceBetween: 16,
                slidesPerView: slidesToShowTabletLandscape,
              },
              1408: {
                spaceBetween: 32,
                slidesPerView: slidesToShowDesktop,
              },
              1600: {
                spaceBetween: 32,
                slidesPerView: slidesToShowLargeDesktop,
              },
            }}
          >
            {children}
          </Carousel>
          <div
            id={`${slugifiedId}-pagination-carousel`}
            className={classNames(
              'tw-flex tw-w-full tw-justify-center tw-gap-xs tw-pt-lg md:tw-hidden',
              {
                hidden: numberOfSlides === 0,
              }
            )}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NavigationCarousel;
