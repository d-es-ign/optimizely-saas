
import DisplayStyleEnum from "@/components/models/enums/DisplayStyleEnum";
import SiteEnum from "@/components/models/enums/SiteEnum";
import VariantTypeEnum from "@/components/models/enums/VariantTypeEnum";
import { IContentCards } from "@/components/models/IContentCards";


const contentCards: IContentCards = {
  title: 'Select your industry',
  site:SiteEnum.B2B,
  displayAs: DisplayStyleEnum.Carousel,
  cardStyle: VariantTypeEnum.Primary as Exclude<
    VariantTypeEnum,
    VariantTypeEnum.Cta
  >,
  hideCardBackground: false,
  itemsPerRow: 2,
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
      backgroundColour:'red',
   
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
      backgroundColour:'red',
    
      title: 'Architecture and Design',
      text: 'Long-lasting and beautiful design objects, furniture, buildings, and iconic bridges thanks to our powder, protective, and decorative paints.',
      ctas: [
        {
          text: 'Link 1',
          url: 'https://jotun.com/1',
        },
        {
          text: 'Link 2',
          url: 'https://jotun.com/2',
        },
      ],
    },
    {
      backgroundColour:'red',
   
      title: 'Infrastructure',
      text: 'Beautiful and well-protected buildings, civil infrastructure, harbours, airports, and more thanks to protective, powder, and decorative products.',
      ctas: [
        {
          text: 'Link 1',
          url: 'https://jotun.com/1',
        },
        {
          text: 'Link 2',
          url: 'https://jotun.com/2',
        },
        {
          text: 'Link 3',
          url: 'https://jotun.com/3',
        },
      ],
    },
    {
      backgroundColour:'red',
    
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
      backgroundColour:'red',
      
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
      backgroundColour:'red',
    
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
};

export default contentCards;
