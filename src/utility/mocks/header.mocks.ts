import { IHeader } from '../../components/models/IHeader';
import SiteEnum from '../../components/models/enums/SiteEnum';
import image from './image.mocks';

export const headerData: IHeader = {
  accountLabel: 'account',
  accountMenu: {
    dashboardLink: {
      text: 'Dashboard',
      url: '/',
      linkIcon: 'arrow-right',
      target: 'self',
    },
    logOutLink: {
      text: 'Log Out',
      url: '/',
      linkIcon: 'arrow-right',
      target: 'self',
    },
    links: [
      {
        text: 'mySpecs',
        url: '/',
        linkIcon: 'arrow-right',
        target: 'self',
      },
      {
        text: 'myDRM',
        url: '/',
        linkIcon: 'arrow-right',
        target: 'self',
      },
      {
        text: 'myOrders',
        url: '/',
        linkIcon: 'arrow-right',
        target: 'self',
      },
      {
        text: 'myDocuments',
        url: '/',
        linkIcon: 'arrow-right',
        target: 'self',
      },
    ],
  },
  logo: 'https://www.jotun.com/siteassetsjot03/jotun-logo-new.svg',
  logoAlt: 'logo',
  menuLabel: 'Menu',
  featuredContentImage: image,
  featuredContentLink: {
    text: 'Link',
    url: 'https://jotun.com/',
    linkIcon: 'information',
    target: 'string',
  },
  featuredContentText:
    'Jotuns nye globale fargekart CANVAS er en hyllest til kunstneren som bor i oss, og er designet for å gi inspirasjon, veiledning og oppmuntring til alle som ønsker å skape unike fargeuttrykk hjemme.',
  featuredContentTitle: 'CANVAS - Colour Design by LADY',

  navigation: [
    {
      link: {
        text: 'Indoor',
        url: '/',
        linkIcon: 'arrow-right',
        target: 'self',
      },
      children: [],
    },
    {
      link: {
        text: 'Indoors',
        url: '/',
        linkIcon: 'arrow-right',
        target: 'self',
      },
      highlightedLink: {
        text: 'Highlighted',
        url: '/',
        linkIcon: 'arrow-right',
        target: 'self',
      },
      children: [
        {
          text: 'One',
          url: '/',
          linkIcon: 'arrow-right',
          target: 'self',
        },
        {
          text: 'Two',
          url: '/',
          linkIcon: 'arrow-right',
          target: 'self',
        },
        {
          text: 'Three',
          url: '/',
          linkIcon: 'arrow-right',
          target: 'self',
        },
      ],
    },
    {
      link: {
        text: 'Outdoor',
        url: '/',
        linkIcon: 'arrow-right',
        target: 'self',
      },
      children: [
        {
          text: 'Indoor',
          url: '/',
          linkIcon: 'arrow-right',
          target: 'self',
        },
        {
          text: 'Outdoor',
          url: '/',
          linkIcon: 'arrow-right',
          target: 'self',
        },
      ],
    },
  ],
  secondaryLinks: [
    {
      text: 'SubNav One',
      url: '/',
      linkIcon: 'arrow-right',
      target: 'self',
    },
    {
      text: 'SubNav Two',
      url: '/',
      linkIcon: 'arrow-right',
      target: 'self',
    },

    {
      text: 'SubNav Three',
      url: '/',
      linkIcon: 'arrow-right',
      target: 'self',
    },
  ],
  quickLinks: [
    {
      text: 'Quick Link One',
      url: '/',
      linkIcon: 'arrow-right',
      target: '_blank',
    },
    {
      text: 'Quick Link Two',
      url: '/',
      linkIcon: 'arrow-right',
      target: 'self',
    },
  ],
  title: 'MyJotun',
  site: SiteEnum.B2B
};

export default headerData;
