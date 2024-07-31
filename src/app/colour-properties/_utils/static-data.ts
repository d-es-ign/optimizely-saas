//TODO: DELETE DUMMY DATA
import { portraitImage } from "@/utility/mocks/image.mocks";
import SiteEnum from "@/components/models/enums/SiteEnum";

export const textContent = {
  header: "Classic neutrals",
  subText:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nibh tellus aliquet nec scelerisque et vehicula vel diam. Pellentesque imperdiet libero nec sem laoreet eget auctor dui euismod. ",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  cta: [
    {
      url: "http://test-site.jotun.com",
      text: "Call to action",
    },
    {
      url: "http://test-site.jotun.com",
      text: "Call to action",
    },
  ],
};
