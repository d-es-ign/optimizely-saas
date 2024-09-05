'use client';
import FlexContent from '@/components/atoms/FlexContent/FlexContent';
import HeroBlock from '@/components/atoms/HeroBlock/HeroBlock';
import Text from '@/components/atoms/Text/Text';
import TextContent from '@/components/atoms/TextContent/TextContent';
import SiteEnum from '@/components/models/enums/SiteEnum';
import FileUpload from '@/components/molecules/FileUpload/FileUpload';
import ImageCard from '@/components/molecules/ImageCard/ImageCard';
import { portraitImage } from '@/utility/mocks/image.mocks';

import indoors from '@/assets/images/indoors.jpg';
import outdoors from '@/assets/images/outdoors.jpg';
import { useEffect, useState } from 'react';

//TODO: DELETE DUMMY DATA
const textContent = {
  header: 'Check our blog for inspiration',
  subText: 'Ready to continue your journey to the perfect palette? Dive into finding the ideal colours for your space.',
  cta: {
    url: '/blog',
    text: 'Go to blog',
  },
};

//TODO: DELETE DUMMY DATA
const imageCards = [
  {
    aspectRatio: 1,
    image: {
      altText: 'Jotun Logo',
      url: indoors.src,
      originalHeight: 100,
      originalWidth: 200,
      imageFocalPoint: '0.5,0.5',
    },
    text: 'Indoors',
  },
  {
    aspectRatio: 1,
    image: {
      altText: 'Jotun Logo',
      url: outdoors.src,
      originalHeight: 100,
      originalWidth: 200,
      imageFocalPoint: '0.5,0.5',
    },
    text: 'Outdoors',
  },
];

//TODO: DELETE DUMMY DATA
const fileUploadProps = {
  title: 'Drag an image here to upload',
  uploadDescription: 'Supports: png, bmp, jpg, jpeg',
  discardLabel: 'Cancel',
  chooseFileLabel: 'Choose File',
  submitFileLabel: 'Submit',
  uploadedFileName: 'File: ',
  loadingLabel: '... Image is being processed',
  successMessage: 'successful upload',
  errorMessage: 'error uploading',
  addFilesLabel: 'Browse files',
  modal: {},
  filesHaveLabel: 'Files have',
  filesHasLabel: 'Files has',
  accept: '.png, .bmp, .jpg, .jpeg',
};

const heroBlockDummyData = {
  variant: 'secondary',
  backgroundColor: '#A98259',
  image: portraitImage,
  textContent: {
    header: 'Find your perfect colours',
    subText:
      'Get inspiration to find the colours and combinations that reflect and embrace who you are - your own personal identity.',
    headerStyle: 'hero-headline',
  },
  site: SiteEnum.B2B,
};

const flexContentDummyData = {
  header: 'Discover our HueMatch tool',
  subText:
    'Upload any photo and easily discover suitable paint colours for your home. Whether it’s a landscape, a stylish outfit, or a cherished memory, our Colour Finder will identify key colours from your photo and suggest matching paint shades, along with complementary colours to create a harmonious palette. Find inspiration from the world around you and effortlessly bring your vision to life.',
  headerStyle: 'heading-36',
};

const HomePageContent = () => {
  const [space, setSpace] = useState<string>();

  useEffect(() => {
    setSpace(undefined);
  }, []);

  return (
    <>
      <HeroBlock {...heroBlockDummyData} />
      <section className="tw-flex tw-justify-center tw-py-[120px]">
        <div className="tw-w-full tw-text-center sm:tw-px-[40px] lg:tw-w-[640px]">
          <TextContent textContent={textContent} site={SiteEnum.B2B} />
        </div>
      </section>
      <div className="tw-bg-grey-10 tw-px-[48px]">
        <FlexContent textContent={flexContentDummyData} />
      </div>
      <section className="tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-py-[60px]">
        <Text variant="headline">1. What are you painting?</Text>
        <div className="tw-flex tw-gap-[64px] tw-pt-[64px]">
          <div className="tw-w-[200px]" onClick={() => setSpace('indoors')}>
            <ImageCard active={space == 'indoors'} {...imageCards[0]} />
          </div>
          <div className="tw-w-[200px]" onClick={() => setSpace('outdoors')}>
            <ImageCard active={space == 'outdoors'} {...imageCards[1]} />
          </div>
        </div>
      </section>
      <section
        id="upload"
        className={`${!space ? 'tw-opacity-20' : ''} tw-mb-[120px] tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center`}
      >
        <Text className="tw-pb-[60px]" variant="headline">
          2. What's inspired you?
        </Text>
        <FileUpload {...fileUploadProps} />
      </section>
    </>
  );
};

export default HomePageContent;
