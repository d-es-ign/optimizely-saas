import { PropsWithChildren } from 'react';
import { A11y, Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/keyboard';
import { SwiperModule } from 'swiper/types';

interface Props extends SwiperProps {
  readonly additionalModules?: SwiperModule[];
  readonly className?: string;
  readonly id?: string;
  readonly navId?: string;
}

const Carousel = ({
  additionalModules = [],
  children,
  className,
  id = 'carousel',
  navId = '',
  ...props
}: PropsWithChildren<Props>) => {
  if (!children) {
    return null;
  }

  return (
    <Swiper
      id={id}
      a11y={{ enabled: true }}
      className={className}
      navigation={{
        enabled: !!navId,
        prevEl: `#prevBtn-${navId}`,
        nextEl: `#nextBtn-${navId}`,
      }}
      keyboard={{
        enabled: true,
        onlyInViewport: true,
      }}
      modules={[...[A11y, Keyboard, Navigation], ...additionalModules]}
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
