import TextContent from "@/components/atoms/TextContent/TextContent";
import Text from "@/components/atoms/Text/Text";
import ImageCard from "@/components/molecules/ImageCard/ImageCard";
import FileUpload from "@/components/molecules/FileUpload/FileUpload";
import SiteEnum from "@/components/models/enums/SiteEnum";
import HeroBlock from "@/components/atoms/HeroBlock/HeroBlock";
import FlexContent from "@/components/atoms/FlexContent/FlexContent";
import { portraitImage } from "@/utility/mocks/image.mocks";

//TODO: DELETE DUMMY DATA
const textContent = {
  header: "Your recent searches",
  subText:
    "Ready to continue your journey to the perfect palette? Pick up right where you left off with your recent search results and dive back into finding the ideal colours for your space.",
  cta: {
    url: "http://test-site.jotun.com",
    text: "Call to action",
  },
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

//TODO: DELETE DUMMY DATA
const fileUploadProps = {
  title: "Drag an image here to upload",
  uploadDescription: "Supports: png, bmp, jpg, jpeg",
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
  accept: ".png, .bmp, .jpg, .jpeg",
};

const heroBlockDummyData = {
  variant: "secondary",
  backgroundColor: "#A98259",
  image: portraitImage,
  textContent: {
    header: "Find your perfect colours",
    subText:
      "Get inspiration to find the colours and combinations that reflect and embrace who you are - your own personal identity.",
    headerStyle: "hero-headline",
  },
  site: SiteEnum.B2B,
};

const flexContentDummyData = {
  header: "Discover our HueMatch tool",
  subText:
    "Upload any photo and easily discover suitable paint colours for your home. Whether it’s a landscape, a stylish outfit, or a cherished memory, our Colour Finder will identify key colours from your photo and suggest matching paint shades, along with complementary colours to create a harmonious palette. Find inspiration from the world around you and effortlessly bring your vision to life.",
  headerStyle: "heading-36",
};

const HomePageContent = () => {
  return (
    <>
      <HeroBlock {...heroBlockDummyData} />
      <section className="tw-flex tw-justify-center tw-py-[120px]">
        <div className="lg:tw-w-[640px] tw-w-full sm:tw-px-[40px] tw-text-center">
          <TextContent textContent={textContent} site={SiteEnum.B2B} />
        </div>
      </section>
      <div className="tw-bg-grey-10 tw-px-[48px]">
        <FlexContent textContent={flexContentDummyData} />
      </div>
      <section className="tw-w-full tw-flex tw-justify-center tw-flex-col tw-items-center tw-py-[60px]">
        <Text variant="headline">What are you painting?</Text>
        <div className="tw-flex tw-pt-[64px] tw-gap-[64px]">
          <div className="tw-w-[140px]">
            <ImageCard {...imageCard} />
          </div>
          <div className="tw-w-[140px]">
            <ImageCard {...imageCard} />
          </div>
        </div>
      </section>
      <section className="tw-w-full tw-flex tw-justify-center tw-flex-col tw-items-center tw-mb-[120px]">
        <Text className="tw-pb-[60px]" variant="headline">
          What's inspired you?
        </Text>
        <FileUpload {...fileUploadProps} />
      </section>
    </>
  );
};

export default HomePageContent;
