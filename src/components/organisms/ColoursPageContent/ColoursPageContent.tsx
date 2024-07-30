import Text from "@/components/atoms/Text/Text";
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
} from "@/app/colour-properties/_utils/static-data";

const ColoursPageContent = ({
  relatedColoursSection,
}: {
  relatedColoursSection: IContentCards;
}) => {
  return (
    <>
      <HeroBlock {...heroBlockDummyData} />
      <section className="tw-my-[120px] tw-px-[48px]">
        <Text variant="heading-28">Your shades</Text>
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-12 tw-mt-[60px]">
          {contentCards?.cards
            ?.slice(0, 3)
            .map((contentCard: IContentCard) => (
              <ContentCard
                backgroundColour="black"
                site={SiteEnum.B2B}
                variant={VariantTypeEnum.Primary}
                hideImage={false}
                hideCta={false}
                hideText={false}
                hideBackground={false}
                {...contentCard}
              />
            ))}
        </div>
      </section>
      <section className="tw-pb-[120px] tw-px-[48px]">
        <ContentCards {...relatedColoursSection} />
      </section>
      <section className="tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-background-beige tw-px-[48px] tw-py-[120px]">
        <div className="lg:tw-w-[640px] tw-text-center">
          <TextContent textContent={textContent} site={SiteEnum.B2B} />
        </div>
        <FlexContent textContent={flexContentDummyData} />
        <ContentCards {...contentCards} />
      </section>
    </>
  );
};

export default ColoursPageContent;
