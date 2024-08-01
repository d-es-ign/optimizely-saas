"use client";
import Image from "@/components/atoms/Image/Image";
import Text from "@/components/atoms/Text/Text";
import { IImageCard } from "@/components/models/IImageCard";
import { useRef, useState } from "react";

const ImageCard = ({ aspectRatio, image, title, text }: IImageCard) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      ref={containerRef}
      className={`tw-flex tw-flex-col tw-text-grey-80 tw-text-center tw-cursor-pointer hover:tw-underline hover:tw-font-semibold ${isActive ? "tw-underline tw-font-semibold" : ""}`}
      onClick={() => setIsActive(!isActive)}
    >
      <Image
        aspectRatio={aspectRatio || undefined}
        containerRef={containerRef}
        image={image}
        classes="tw-w-full tw-rounded-full tw-mb-xs"
        imageClasses="tw-w-full"
      />
      {title && <Text variant="body-14-semibold">{title}</Text>}
      {text && <Text variant="body-small">{text}</Text>}
    </div>
  );
};

export default ImageCard;
