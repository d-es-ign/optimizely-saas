import TextContent from "@/components/atoms/TextContent/TextContent";
import Text from "@/components/atoms/Text/Text";
import ImageCard from "@/components/molecules/ImageCard/ImageCard";
import FileUpload from "@/components/molecules/FileUpload/FileUpload";
import SiteEnum from "@/components/models/enums/SiteEnum";

//TODO: DELETE DUMMY DATA
const textContent = {
  header: "Title goes here",
  subText:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nibh tellus aliquet nec scelerisque et vehicula vel diam. Pellentesque imperdiet libero nec sem laoreet eget auctor dui euismod.",
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
  title: "Jotun Paints",
  text: "Quality and Value",
};

//TODO: DELETE DUMMY DATA
const fileUploadProps = {
    uploadDescription: 'Please upload something, anything',
    discardLabel: 'Cancel',
    chooseFileLabel: 'Choose File',
    submitFileLabel: 'Submit',
    uploadedFileName: 'File: ',
    loadingLabel: 'loading...',
    successMessage: 'successful upload',
    errorMessage: 'error uploading',
    addFilesLabel: 'Add files',
    modal: {},
    filesHaveLabel: 'Files have',
    filesHasLabel: 'Files has',
  };

const HomePageContent = () => {
  return (
    <>
      <section className="tw-w-full tw-flex tw-justify-center">
        <TextContent textContent={textContent} site={SiteEnum.B2B} />
      </section>
      <section className="tw-w-full tw-flex tw-justify-center tw-flex-col tw-items-center">
        <Text variant="headline">What are you painting?</Text>
        <div className="tw-flex">
          <div className="tw-w-[100px]">
            <ImageCard {...imageCard} />
          </div>
          <div className="tw-w-[100px]">
            <ImageCard {...imageCard} />
          </div>
        </div>
      </section>
      <section className="tw-w-full tw-flex tw-justify-center tw-flex-col tw-items-center">
        <Text variant="headline">What's inspired you?</Text>
        <FileUpload {...fileUploadProps}/>
      </section>
    </>
  );
};

export default HomePageContent;
