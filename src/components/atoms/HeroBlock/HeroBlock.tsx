'use client';
import { IImage } from '@/components/models/IImage';
import { ITextContent } from '@/components/models/ITextContent';
import SiteEnum from '@/components/models/enums/SiteEnum';
import { useSearchParams } from 'next/navigation';
import Image from '../Image/Image';
import TextContent from '../TextContent/TextContent';

import ei from '@/assets/images/ei.jpg';
import eo from '@/assets/images/eo.jpg';
import mi from '@/assets/images/mi.jpg';
import mo from '@/assets/images/mo.jpg';
import { StaticImageData } from 'next/image';
interface Props {
  readonly variant: string;
  readonly backgroundColor?: string;
  readonly image: IImage;
  readonly textContent: ITextContent;
  readonly site: SiteEnum;
}

const headerMap: { [key: string]: string } = {
  '30252860836': 'mi',
  '30260680730': 'mo',
  '30293400316': 'ei',
  '30333290062': 'eo',
};
const bgMap: { [key: string]: string } = {
  mi: '#E9D8B8',
  mo: '#E7DFCD',
  ei: '#4E616C',
  eo: '#985F56',
};
const imgMap: { [key: string]: StaticImageData } = {
  mi,
  mo,
  ei,
  eo,
};

const daysIntoYear = (date: Date) => {
  return (
    (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) /
    24 /
    60 /
    60 /
    1000
  );
};

const modeFromDateTime = () => {
  const now = new Date();
  const currentTime = now.getHours();
  const dayIndex = daysIntoYear(now);

  if (currentTime > 18) {
    return dayIndex % 2 ? 'ei' : 'eo';
  }
  if (currentTime < 12 && currentTime > 6) {
    return dayIndex % 2 ? 'mo' : 'mi';
  }
  return 'default';
};

const HeroBlock = ({ variant, backgroundColor, image, textContent, site }: Props) => {
  const searchParams = useSearchParams();
  const exp = searchParams.get('optimizely_x');
  const headerMode = exp ? headerMap[exp] : modeFromDateTime();
  const timeOfDay = headerMode[0] == 'm' ? 'morning' : headerMode[0] == 'e' ? 'evening' : null;

  const newTitle = { ...textContent };
  if (timeOfDay) {
    newTitle.header += ' this ' + timeOfDay + '!';
  }

  const newImg = { ...image };
  if (headerMode != 'default') {
    newImg.url = imgMap[headerMode].src;
  }

  return (
    <div
      className={`hero ${variant === 'primary' ? 'hero-primary' : 'hero-secondary'}`}
      style={{ backgroundColor: headerMode == 'default' ? backgroundColor : bgMap[headerMode] }}
    >
      {variant === 'primary' ? (
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-8 tw-py-32 tw-text-center">
          <div className="lg:tw-w-[640px]">
            <TextContent textContent={newTitle} site={site} />
          </div>
        </div>
      ) : (
        <div className="tw-flex tw-flex-col md:tw-flex-row">
          <div
            className={`tw-flex tw-flex-col tw-justify-center tw-p-20 tw-text-center ${['mo', 'mi'].includes(headerMode) ? 'tw-text-grey-90' : 'tw-text-white'} md:tw-w-1/2`}
          >
            <TextContent textContent={newTitle} site={site} />
          </div>
          <div className="tw-overflow-hidden md:tw-w-1/2">{image && <Image image={newImg} />}</div>
        </div>
      )}
    </div>
  );
};

export default HeroBlock;
