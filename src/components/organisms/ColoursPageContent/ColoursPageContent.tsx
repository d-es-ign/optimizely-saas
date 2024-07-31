import TextContent from "@/components/atoms/TextContent/TextContent";
import SiteEnum from "@/components/models/enums/SiteEnum";
import FlexContent from "@/components/atoms/FlexContent/FlexContent";
import VariantTypeEnum from "@/components/models/enums/VariantTypeEnum";
import HeroBlock from "@/components/atoms/HeroBlock/HeroBlock";
import ContentCard from "@/components/molecules/ContentCard/ContentCard";
import ContentCards from "../ContentCards/ContentCards";
import contentCards from "@/utility/mocks/contentCards.mocks";
import { IContentCard } from "@/components/models/IContentCard";
import { IContentCards } from "@/components/models/IContentCards";
import {
  flexContentDummyData,
  heroBlockDummyData,
  textContent,
  perfectColors,
  imageCards,
} from "@/app/colour-properties/_utils/static-data";
import Button from "@/components/atoms/Button/Button";
import { portraitImage } from "@/utility/mocks/image.mocks";
import Image from "@/components/atoms/Image/Image";

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
      <section className="tw-flex tw-gap-8 tw-px-[48px] tw-py-[120px] tw-flex-col xl:tw-flex-row tw-bg-grey-10">
        <div className="lg:tw-w-[640px] tw-w-full  tw-flex tw-flex-col tw-justify-between">
          <div>
            <TextContent
              textContent={perfectColors.textContent}
              site={SiteEnum.B2B}
            />
            <div className="tw-flex tw-gap-2 tw-pt-4 tw-mb-[40px] xl:tw-mb-[0px]">
              {perfectColors.cta.map((cta, index) => (
                <Button
                  style={{ width: "100%" }}
                  modifier={index ? "fill" : "outline"}
                  variant="grey80"
                  href="/"
                  label={cta.text}
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
                  hideCta={false}
                  hideText={false}
                  hideBackground={false}
                  {...accentColourCard}
                />
              </div>
            )}
          </div>
        </div>
        <div className="tw-ml-auto xl:tw-w-1/2 ">
          {imageUrl && <Image image={{ ...portraitImage, url: imageUrl }} />}
        </div>
      </section>
      <section className="tw-pb-[120px] tw-px-[48px] tw-bg-grey-10">
        <ContentCards {...relatedColoursSection} />
      </section>
      <section className="tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-background-beige tw-px-[48px] tw-py-[120px]">
        <div className="lg:tw-w-[640px] tw-text-center">
          <TextContent textContent={textContent} site={SiteEnum.B2B} />
        </div>
        <div className="tw-flex tw-gap-sm tw-py-[120px]">
          {imageCards.map((image) => (
            <Image image={image.image} />
          ))}
        </div>
        <FlexContent textContent={flexContentDummyData} />
      </section>
      <section className="tw-pb-[120px] tw-px-[48px] tw-bg-background-beige">
        <ContentCards {...contentCards} />
      </section>
    </>
  );
};

export default ColoursPageContent;
