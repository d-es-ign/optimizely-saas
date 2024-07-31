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
  backgroundColour: '#B0A392',
  cards: [
    
    {
      backgroundColour:'#B0A392',
      title: '#B0A392',
      text: 'Color1',
    },
    {
      backgroundColour:'#B0A392',
      
      title: '#B0A392',
      text: 'Color1',
    },
    {
      backgroundColour:'#B0A392',
      
      title: '#B0A392',
      text: 'Color1',
    },
    {
      backgroundColour:'#B0A392',
     
      title: '#B0A392',
      text: 'Color1',
    },
    {
      backgroundColour:'#B0A392',
      title: '#B0A392',
      text: 'Color1',
    },
    {
      backgroundColour:'#B0A392',
      title: '#B0A392',
      text: 'Color1',
    
    },
  ],
  site: SiteEnum.B2B
};

export default contentCards;
