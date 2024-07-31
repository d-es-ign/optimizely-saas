import { IContentCards } from "@/components/models/IContentCards";
import DisplayStyleEnum from "@/components/models/enums/DisplayStyleEnum";
import VariantTypeEnum from "@/components/models/enums/VariantTypeEnum";
import SiteEnum from "@/components/models/enums/SiteEnum";

const contentCards: IContentCards = {
  title: "Explore other popular neutrals",
  displayAs: DisplayStyleEnum.Carousel,
  cardStyle: VariantTypeEnum.Primary as Exclude<
    VariantTypeEnum,
    VariantTypeEnum.Cta
  >,
  hideCardBackground: false,
  itemsPerRow: 5,
  cta: {
    text: "View All",
    url: "/",
    target: "self",
  },
  hideImages: true,
  hideCardText: false,
  hideCardCtas: true,
  backgroundColour: "jotunBlue",
  cards: [
    {
      image: {
        altText: "Jotun Homes",
        url: "https://www.jotun.com/globalassets-b2b/.com/industry-tiles/heropage_homepage.jpg",
        originalHeight: 920,
        originalWidth: 14720,
        imageFocalPoint: "0.5,0.5",
      },
      title: "12118",
      cardBackgroundColour: "#F2EFE6",
      text: "Colour name",
      ctas: [
        {
          text: "Link",
          url: "https://jotun.com/",
        },
      ],
    },
    {
      image: {
        altText: "Architecture and Design",
        url: "https://www.jotun.com/globalassets-b2b/b2b/architecture-and-design/hero_architecturedesign.jpg",
        originalHeight: 920,
        originalWidth: 14720,
        imageFocalPoint: "0.5,0.5",
      },
      title: "12118",
      cardBackgroundColour: "#B0A392",
      text: "Colour name",
      ctas: [
        {
          text: "Link 1",
          url: "https://jotun.com/1",
        },
      ],
    },
    {
      image: {
        altText: "Infrastructure",
        url: "https://www.jotun.com/globalassets-b2b/b2b/infrastructure/hero_infastructure.jpg",
        originalHeight: 920,
        originalWidth: 14720,
        imageFocalPoint: "0.5,0.5",
      },
      title: "12118",
      cardBackgroundColour: "#D0BD94",
      text: "Colour name",
      ctas: [
        {
          text: "Link 1",
          url: "https://jotun.com/1",
        },
      ],
    },
    {
      image: {
        altText: "Light Industry",
        url: "https://www.jotun.com/globalassets-b2b/b2b/light-industry/hero_industrial-and-oem.jpg",
        originalHeight: 920,
        originalWidth: 14720,
        imageFocalPoint: "0.5,0.5",
      },
      title: "12118",
      cardBackgroundColour: "#B99C74",
      text: "Colour name",
      ctas: [
        {
          text: "Link",
          url: "https://jotun.com/",
        },
      ],
    },
    {
      image: {
        altText: "Shipping and Yachting",
        url: "https://www.jotun.com/globalassets-b2b/b2b/shipping/hero_shipping.jpg",
        originalHeight: 920,
        originalWidth: 14720,
        imageFocalPoint: "0.5,0.5",
      },
      title: "12118",
      cardBackgroundColour: "#907B6C",
      text: "Colour name",
      ctas: [
        {
          text: "Link",
          url: "https://jotun.com/",
        },
      ],
    },
  ],
  site: SiteEnum.B2B,
};

export default contentCards;
