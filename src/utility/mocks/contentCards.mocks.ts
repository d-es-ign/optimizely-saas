import { IContentCards } from '@/components/models/IContentCards';
import DisplayStyleEnum from '@/components/models/enums/DisplayStyleEnum';
import VariantTypeEnum from '@/components/models/enums/VariantTypeEnum';
import SiteEnum from '@/components/models/enums/SiteEnum';

const contentCards: IContentCards = {
  title: 'Pairs well with',
  displayAs: DisplayStyleEnum.Carousel,
  cardStyle: VariantTypeEnum.Primary as Exclude<
    VariantTypeEnum,
    VariantTypeEnum.Cta
  >,
  hideCardBackground: false,
  itemsPerRow: 5,
  cta: {
    text: 'View All',
    url: '/',
    target: 'self',
  },
  hideImages: false,
  hideCardText: false,
  hideCardCtas: false,
  backgroundColour: 'jotunBlue',
  cards: [
    {
      image: {
        altText: 'Jotun Homes',
        url: 'https://www.jotun.com/globalassets-b2b/.com/industry-tiles/heropage_homepage.jpg',
        originalHeight: 920,
        originalWidth: 14720,
        imageFocalPoint: '0.5,0.5',
      },
      title: 'Beautiful Homes',
      text: 'Jotun has many different types of interior and exterior paint, creating colour combinations and design ideas for every home.',
      ctas: [
        {
          text: 'Link',
          url: 'https://jotun.com/',
        },
      ],
    },
    {
      image: {
        altText: 'Architecture and Design',
        url: 'https://www.jotun.com/globalassets-b2b/b2b/architecture-and-design/hero_architecturedesign.jpg',
        originalHeight: 920,
        originalWidth: 14720,
        imageFocalPoint: '0.5,0.5',
      },
      title: 'Architecture and Design',
      text: 'Long-lasting and beautiful design objects, furniture, buildings, and iconic bridges thanks to our powder, protective, and decorative paints.',
      ctas: [
        {
          text: 'Link 1',
          url: 'https://jotun.com/1',
        },
      ],
    },
    {
      image: {
        altText: 'Infrastructure',
        url: 'https://www.jotun.com/globalassets-b2b/b2b/infrastructure/hero_infastructure.jpg',
        originalHeight: 920,
        originalWidth: 14720,
        imageFocalPoint: '0.5,0.5',
      },
      title: 'Infrastructure',
      text: 'Beautiful and well-protected buildings, civil infrastructure, harbours, airports, and more thanks to protective, powder, and decorative products.',
      ctas: [
        {
          text: 'Link 1',
          url: 'https://jotun.com/1',
        },
      ],
    },
    {
      image: {
        altText: 'Light Industry',
        url: 'https://www.jotun.com/globalassets-b2b/b2b/light-industry/hero_industrial-and-oem.jpg',
        originalHeight: 920,
        originalWidth: 14720,
        imageFocalPoint: '0.5,0.5',
      },
      title: 'Light Industry',
      text: 'Jotun powder coatings support the long-lasting performance of your appliances, furniture, and automotive components.',
      ctas: [
        {
          text: 'Link',
          url: 'https://jotun.com/',
        },
      ],
    },
    {
      image: {
        altText: 'Shipping and Yachting',
        url: 'https://www.jotun.com/globalassets-b2b/b2b/shipping/hero_shipping.jpg',
        originalHeight: 920,
        originalWidth: 14720,
        imageFocalPoint: '0.5,0.5',
      },
      title: 'Shipping and Yachting',
      text: 'We help to protect your vessels and yachts and increase your hull performance with our broad range of marine and yachting coatings.',
      ctas: [
        {
          text: 'Link',
          url: 'https://jotun.com/',
        },
      ],
    },
    {
      image: {
        altText: 'Energy',
        url: 'https://www.jotun.com/globalassets-b2b/b2b/energy/hero_energy.jpg',
        originalHeight: 920,
        originalWidth: 14720,
        imageFocalPoint: '0.5,0.5',
      },
      title: 'Energy',
      text: 'Powder and protective coatings to keep your onshore and offshore oil, gas, petrochemical, and refining facilities in the best shape for a long time.',
      ctas: [
        {
          text: 'Link',
          url: 'https://jotun.com/',
        },
      ],
    },
  ],
  site: SiteEnum.B2B
};

export default contentCards;
