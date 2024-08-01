//TODO: DELETE DUMMY DATA
import { portraitImage } from "@/utility/mocks/image.mocks";
import SiteEnum from "@/components/models/enums/SiteEnum";

export const textContent = {
  header: "Classic neutrals",
  subText:
    "A golden, whitish tone. This is a yellowish white tone, and compared with the well-known 1001 Egg White and 1453 Cotton Ball, it is obviously slightly darker and slightly more yellow.",
};

//TODO: DELETE DUMMY DATA
export const imageCard = {
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
export const fileUploadProps = {
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

export const heroBlockDummyData = {
  variant: "primary",
  backgroundColor: "#A98259",
  image: portraitImage,
  textContent: {
    header: "Your perfect colour",
    subText:
      "In Jotun, we have been creating colours for nearly 100 years. Our library spans thousands of options, each telling a different story. With an infinite world to choose from, we understand that selecting the perfect colour for your project can be challenging.",
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

export const flexContentDummyData = {
  header: "Warm and down to earth",
  subText:
    "Soil and sand, shells and stones...Nature offers far more colors than green. Solidearth tones, muted, yellow shades and warm, redscolors can give associations to a magnificent landscapeof mountains and desert. Beautiful, endless natural riches,which glows in the sunrise.z",
  headerStyle: "heading-36",
};

export const imageCards = [
  {
    aspectRatio: 1,
    image: {
      altText: "Jotun Logo",
      url: "/images/Image.png",
      originalHeight: 650,
      originalWidth: 400,
      imageFocalPoint: "0.5,0.5",
    },
    text: "Indoors",
  },
  {
    aspectRatio: 1,
    image: {
      altText: "Jotun Logo",
      url: "/images/Image2.png",
      originalHeight: 650,
      originalWidth: 400,
      imageFocalPoint: "0.5,0.5",
    },
    text: "Indoors",
  },
  {
    aspectRatio: 10,
    image: {
      altText: "Jotun Logo",
      url: "/images/Image3.png",
      originalHeight: 650,
      originalWidth: 400,
      imageFocalPoint: "0.5,0.5",
    },
    text: "Indoors",
  },
];
export const perfectColors = {
  textContent: {
    header: "The perfect shades for your room.",
    subText:
      "Jotun is one of the world's leading paints and coatings manufacturers, combining the best quality with constant innovation and creativity. For almost a century, we have protected all types of property - from iconic buildings to beautiful homes.",
  },
  cta: [
    {
      url: "http://test-site.jotun.com",
      text: "Search again",
    },
    {
      url: "http://test-site.jotun.com",
      text: "Customize results",
    },
  ],
};
