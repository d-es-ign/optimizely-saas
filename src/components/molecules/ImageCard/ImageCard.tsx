'use client';
import Image from '@/components/atoms/Image/Image';
import Text from '@/components/atoms/Text/Text';
import { IImageCard } from '@/components/models/IImageCard';
import { useRef } from 'react';

type CardProps = IImageCard & {
  active: boolean;
};

const ImageCard = ({ aspectRatio, image, title, text, active }: CardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={containerRef}
      className={`tw-flex tw-cursor-pointer tw-flex-col tw-text-center tw-text-grey-80 hover:tw-font-semibold hover:tw-underline ${active ? 'tw-font-semibold tw-underline' : ''}`}
    >
      <Image
        aspectRatio={aspectRatio || undefined}
        containerRef={containerRef}
        image={image}
        classes={`tw-w-full tw-rounded-full tw-mb-xs tw-border-6 tw-transition tw-border-transparent  ${active ? 'space-active' : 'hover:tw-border-yellow-hover'}`}
        imageClasses="tw-w-full"
      />
      {title && <Text variant="body-14-semibold">{title}</Text>}
      {text && <Text variant="body-small">{text}</Text>}
    </div>
  );
};

export default ImageCard;
