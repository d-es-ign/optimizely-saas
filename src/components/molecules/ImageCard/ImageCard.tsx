'use client'
import Image from '@/components/atoms/Image/Image';
import Text from '@/components/atoms/Text/Text';
import { IImageCard } from '@/components/models/IImageCard';
import { useRef } from 'react';

const ImageCard = ({ aspectRatio, image, title, text }: IImageCard) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="tw-flex tw-flex-col tw-text-grey-80">
      <Image
        aspectRatio={aspectRatio || undefined}
        containerRef={containerRef}
        image={image}
        classes="tw-w-full"
        imageClasses="tw-w-full"
      />
      {title && (
        <Text variant="body-14-semibold" className="tw-mt-xs">
          {title}
        </Text>
      )}
      {text && <Text variant="body-small">{text}</Text>}
    </div>
  );
};

export default ImageCard;
