import Text from "@/components/atoms/Text/Text";
import TextContent from "@/components/atoms/TextContent/TextContent";
import SiteEnum from "@/components/models/enums/SiteEnum";
import FlexContent from "@/components/atoms/FlexContent/FlexContent";
import VariantTypeEnum from "@/components/models/enums/VariantTypeEnum";
import HeroBlock from "@/components/atoms/HeroBlock/HeroBlock";
import ContentCard from "@/components/molecules/ContentCard/ContentCard";
import ContentCards from "../ContentCards/ContentCards";
import { portraitImage } from "@/utility/mocks/image.mocks";
import contentCards from "@/utility/mocks/contentCards.mocks";
import { IContentCard } from "@/components/models/IContentCard";
import { image } from "@/utility/mocks/image.mocks"
import Image from "@/components/atoms/Image/Image";
import { IImage } from "@/components/models/IImage";
import Button from "@/components/atoms/Button/Button";
//TODO: DELETE DUMMY DATA
const textContent = {
  header: "Classic neutrals",
  subText:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nibh tellus aliquet nec scelerisque et vehicula vel diam. Pellentesque imperdiet libero nec sem laoreet eget auctor dui euismod. ",
};

//TODO: DELETE DUMMY DATA
const imageCard = {
  aspectRatio: 1,
  image: {
    altText: "Jotun Logo",
    url: "https://www.jotun.com/globalassets-b2b/corporate/who-we-are/about-jotun-who-we-are-4.jpg",
    originalHeight: 100,
    originalWidth: 200,
    imageFocalPoint: "0.5,0.5",
  },
  text: "Indoors",
};
const imageCards  = [
  {
    aspectRatio: 1,
    image: {
      altText: "Jotun Logo",
      url: "https://www.jotun.com/globalassets-b2b/corporate/who-we-are/about-jotun-who-we-are-4.jpg",
      originalHeight: 100,
      originalWidth: 200,
      imageFocalPoint: "0.5,0.5",
    },
    text: "Indoors",
  },
  {
    aspectRatio: 1,
    image: {
      altText: "Jotun Logo",
      url: "https://www.jotun.com/globalassets-b2b/corporate/who-we-are/about-jotun-who-we-are-4.jpg",
      originalHeight: 100,
      originalWidth: 200,
      imageFocalPoint: "0.5,0.5",
    },
    text: "Indoors",
  },
  {
    aspectRatio: 1,
    image: {
      altText: "Jotun Logo",
      url: "https://www.jotun.com/globalassets-b2b/corporate/who-we-are/about-jotun-who-we-are-4.jpg",
      originalHeight: 100,
      originalWidth: 200,
      imageFocalPoint: "0.5,0.5",
    },
    text: "Indoors",
  }
]
//TODO: DELETE DUMMY DATA
const fileUploadProps = {
  title: "Drag an image here to upload",
  uploadDescription: "Supports: JPG pr PNG",
  discardLabel: "Cancel",
  chooseFileLabel: "Choose File",
  submitFileLabel: "Submit",
  uploadedFileName: "File: ",
  loadingLabel: "loading...",
  successMessage: "successful upload",
  errorMessage: "error uploading",
  addFilesLabel: "Browse files",
  modal: {},
  filesHaveLabel: "Files have",
  filesHasLabel: "Files has",
};

const heroBlockDummyData = {
  variant: "primary",
  backgroundColor: "#A98259",
  image: portraitImage,
  textContent: {
    header: "Your perfect colour",
    subText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    headerStyle: "hero-headline",
    cta: {
      text: "Search again",
      url: "/home",
      link: {
        default: "/home",
      },
    },
  },
  site: SiteEnum.B2B,
};

const flexContentDummyData = {
  header: "Warm and down to earth",
  subText:
    "Soil and sand, shells and stones...Nature offers far more colors than green. Solidearth tones, muted, yellow shades and warm, redscolors can give associations to a magnificent landscapeof mountains and desert. Beautiful, endless natural riches,which glows in the sunrise.z",
  headerStyle: "heading-36",
};
const perfectColors = {
  textContent: {
    header: "The perfect shades for your room.",
  subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  cta:[ 
   {
      url: "http://test-site.jotun.com",
      text: "Call to action",
    },
    {
      url: "http://test-site.jotun.com",
      text: "Call to action",
    },
  ]
}

const ColoursPageContent = () => {
  return (
    <>
      <HeroBlock {...heroBlockDummyData} />
      <section className="tw-flex tw-gap-8 tw-px-[48px] tw-py-[120px]">
        <div className="lg:tw-w-[640px] tw-w-full  tw-flex tw-flex-col tw-justify-between">
          <div>
            <TextContent textContent={perfectColors.textContent} site={SiteEnum.B2B} />
            <div className="tw-flex tw-gap-2 tw-pt-4">
            {
              perfectColors.cta.map((cta, index)=> (
                <Button
                  style={{width:'100%'}}
                  modifier={index ?'fill' : 'outline'}
                  variant='grey80'
                  href='/'
                  label={cta.text}
                /> 
              ))
            }
            </div>
            </div>
          <div className="tw-mt-auto">
          {contentCards?.cards?.slice(0, 1).map((contentCard: IContentCard) => (
            <div className="tw-w-1/2">
            <ContentCard
              site={SiteEnum.B2B}
              variant={VariantTypeEnum.Primary}
              hideImage={false}
              hideCta={false}
              hideText={false}
              hideBackground={false}
              {...contentCard}
            />
            </div>
          ))}
        </div> 
        </div>
        <div className="tw-ml-auto tw-w-1/2"><Image image={portraitImage}/></div>
      </section>
      <section className="tw-my-[120px] tw-px-[48px]">
        <Text variant="heading-28">Your shades</Text>
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-12 tw-mt-[60px]">
          {contentCards?.cards?.slice(0, 3).map((contentCard: IContentCard) => (
            <ContentCard
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
        <ContentCards {...contentCards} />
      </section>
      <section className="tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-background-beige tw-px-[48px] tw-py-[120px]">
        <div className="lg:tw-w-[640px] tw-text-center">
          <TextContent textContent={textContent} site={SiteEnum.B2B} />
        </div>
        <div className="tw-flex tw-gap-sm tw-py-[120px]">
          {
            imageCards.map((image)=> (
              <Image image={image.image} />
            ))
          }
          </div>
        <FlexContent textContent={flexContentDummyData} />
        <ContentCards {...contentCards} />
      </section>
    </>
  );
};

export default ColoursPageContent;
