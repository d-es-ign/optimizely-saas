import {
  flexContentDummyData,
  heroBlockDummyData,
  imageCards,
  perfectColors,
  textContent,
} from '@/app/colour-properties/_utils/static-data';
import Button from '@/components/atoms/Button/Button';
import FlexContent from '@/components/atoms/FlexContent/FlexContent';
import HeroBlock from '@/components/atoms/HeroBlock/HeroBlock';
import Image from '@/components/atoms/Image/Image';
import TextContent from '@/components/atoms/TextContent/TextContent';
import SiteEnum from '@/components/models/enums/SiteEnum';
import VariantTypeEnum from '@/components/models/enums/VariantTypeEnum';
import { IContentCard } from '@/components/models/IContentCard';
import { IContentCards } from '@/components/models/IContentCards';
import ContentCard from '@/components/molecules/ContentCard/ContentCard';
import contentCards from '@/utility/mocks/contentCards.mocks';
import { portraitImage } from '@/utility/mocks/image.mocks';
import ContentCards from '../ContentCards/ContentCards';

const ColoursPageContent = ({
  relatedColoursSection,
  accentColourCard,
  imageUrl,
}: {
  relatedColoursSection: IContentCards;
  accentColourCard?: IContentCard;
  imageUrl?: string;
}) => {
  return (
    <>
      <HeroBlock {...heroBlockDummyData} />
      <section className="tw-flex tw-flex-col tw-gap-8 tw-bg-grey-10 tw-px-[48px] tw-py-[120px] xl:tw-flex-row">
        <div className="tw-flex tw-w-full tw-flex-col tw-justify-between lg:tw-w-[640px]">
          <div>
            <TextContent textContent={perfectColors.textContent} site={SiteEnum.B2B} />
            <div className="tw-mb-[40px] tw-flex tw-gap-2 tw-pt-6 xl:tw-mb-[0px]">
              {perfectColors.cta.map((cta, index) => (
                <Button
                  as="link"
                  style={{ width: '100%' }}
                  modifier={index ? 'fill' : 'outline'}
                  variant="grey80"
                  href="/home#upload"
                  label={cta.text}
                  key={`${cta.text}-${index}`}
                />
              ))}
            </div>
          </div>
          <div className="tw-mt-auto tw-flex tw-gap-8">
            {accentColourCard && (
              <div className="tw-w-1/2">
                <ContentCard
                  backgroundColour=""
                  site={SiteEnum.B2B}
                  variant={VariantTypeEnum.Primary}
                  hideImage={false}
                  key={accentColourCard.text}
                  hideCta={false}
                  hideText={false}
                  hideBackground={false}
                  {...accentColourCard}
                />
              </div>
            )}
          </div>
        </div>
        <div className="tw-ml-auto xl:tw-w-1/2">
          {imageUrl && <Image width={640} height={750} image={{ ...portraitImage, url: imageUrl }} />}
        </div>
      </section>
      <section className="tw-bg-grey-10 tw-px-[48px] tw-pb-[120px]">
        <ContentCards {...relatedColoursSection} />
      </section>
      <section className="tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-bg-background-beige tw-px-[48px] tw-py-[120px]">
        <div className="tw-text-center lg:tw-w-[640px]">
          <TextContent textContent={textContent} site={SiteEnum.B2B} />
        </div>
        <div className="tw-flex tw-w-full tw-gap-sm tw-py-[120px]">
          {imageCards.map((image, index) => (
            <div>
              <Image
                width={image.image.originalWidth}
                height={image.image.originalHeight}
                image={image.image}
                key={`${image.text}-${index}`}
              />
            </div>
          ))}
        </div>
        <FlexContent textContent={flexContentDummyData} />
      </section>
      <section className="tw-bg-background-beige tw-px-[48px] tw-pb-[120px]">
        <ContentCards {...contentCards} />
      </section>
    </>
  );
};

export default ColoursPageContent;
