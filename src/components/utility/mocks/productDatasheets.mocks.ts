import IProductDatasheets from '@models/IProductDatasheets';

const productDatasheets: { products: IProductDatasheets[] } = {
  products: [
    {
      name: 'Jotun Lady 7236',
      productId: 123,
      value: [
        {
          name: 'TDS',
          value: [
            {
              id: 234,
              name: 'Jotun Lady 7236 Technical Datasheet - Arabic',
              location: 'Saudi Arabia',
              language: 'Arabic',
              fileName: 'TDS¤4220¤Bengalac Red Oxide Primer¤ar-SA¤SA.pdf',
            },
            {
              id: 345,
              name: 'Jotun Lady 7236 Technical Datasheet - UK',
              location: 'United Kingdom',
              language: 'English',
              fileName: 'TDS¤4220¤Bengalac Red Oxide Primer¤Euk¤GB.pdf',
            },
          ],
          children: [],
        },
        {
          name: 'SDS',
          value: [
            {
              id: 12,
              name: 'Jotun Lady 7236 SDS - Arabic Egypt',
              location: 'Egypt',
              language: 'Arabic',
              fileName: 'SDS¤4220¤Bengalac Red Oxide Primer¤ar-SA¤EG.pdf',
            },
          ],
          children: [],
        },
      ],
    },
    {
      name: 'Harmony 20046',
      productId: 124,
      value: [
        {
          name: 'TDS',
          value: [
            {
              id: 235,
              name: 'Harmony 20046 Technical Datasheet - Arabic',
              location: 'Saudi Arabia',
              language: 'Arabic',
              fileName: 'TDS¤4220¤Bengalac Red Oxide Primer¤ar-SA¤SA.pdf',
            },
            {
              id: 346,
              name: 'Harmony 20046 Technical Datasheet - UK',
              location: 'United Kingdom',
              language: 'English',
              fileName: 'TDS¤4220¤Bengalac Red Oxide Primer¤Euk¤GB.pdf',
            },
          ],
          children: [],
        },
        {
          name: 'SDS',
          value: [
            {
              id: 13,
              name: 'Harmony 20046 SDS - Arabic Egypt',
              location: 'Egypt',
              language: 'Arabic',
              fileName: 'SDS¤4220¤Bengalac Red Oxide Primer¤ar-SA¤EG.pdf',
            },
            {
              id: 35,
              name: 'Harmony 20046 SDS - UK',
              location: 'Egypt',
              language: 'English',
              fileName: 'SDS¤4220¤Bengalac Red Oxide Primer¤Euk¤EG.pdf',
            },
            {
              id: 44,
              name: 'Harmony 20046 SDS - French Morocco',
              location: 'Morocco',
              language: 'French',
              fileName: 'SDS¤4220¤Bengalac Red Oxide Primer¤Fra¤MA.pdf',
            },
          ],
          children: [],
        },
      ],
    },
    {
      name: 'Sunrise 11173',
      productId: 567,
      value: [
        {
          name: 'TDS',
          value: [
            {
              id: 566,
              name: 'Sunrise 11173 Technical Datasheet - French',
              location: 'France',
              language: 'French',
              fileName: 'TDS¤30822¤Megayacht Imperial Antifouling¤Fra¤FR.pdf',
            },
            {
              id: 565,
              name: 'Sunrise 11173 PRODUCT DOCUMENTATION - German',
              location: 'Germany',
              language: 'German',
              fileName: 'TDS¤30822¤Megayacht Imperial Antifouling¤Ger¤DE.pdf',
            },
          ],
          children: [],
        },
        {
          name: 'SDS',
          value: [
            {
              id: 564,
              name: 'Sunrise 11173 SDS - French - France',
              location: 'France',
              language: 'French',
              fileName: 'TDS¤30822¤Megayacht Imperial Antifouling¤Fra¤FR.pdf',
            },
            {
              id: 563,
              name: 'Sunrise 11173 SDS - Germany - German',
              location: 'Germany',
              language: 'German',
              fileName: 'TDS¤30822¤Megayacht Imperial Antifouling¤Ger¤DE.pdf',
            },
          ],
          children: [
            {
              name: 'Sunrise 11173 - Antifouling Supreme',
              compId: 562,
              value: [
                {
                  id: 561,
                  name: 'Sunrise 11173  - Antifouling Supreme - Australia ENG',
                  location: 'Australia',
                  language: 'English',
                  fileName:
                    'SDS¤30822¤Megayacht Imperial Antifouling¤Euk¤AU.pdf',
                },
                {
                  id: 998,
                  name: '豪华游 - Doc Chinese - Sunrise 11173',
                  location: 'China',
                  language: 'Chinese',
                  fileName:
                    'SDS¤30822¤Megayacht Imperial Antifouling¤Zho;Euk¤CN.pdf',
                },
              ],
            },
            {
              name: 'Sunrise 11173 - Megayacht Antifouling',
              compId: 997,
              value: [
                {
                  id: 996,
                  name: 'Sunrise 11173 - Megayacht Antifouling - AUS English',
                  location: 'Australia',
                  language: 'English',
                  fileName:
                    'SDS¤2105¤Megayacht Imperial Antifouling, black, blue, green, dark red¤Euk¤AU.pdf',
                },
                {
                  id: 995,
                  name: '豪华游艇 - Sunrise 11173 CN - CHINESE DOCUMENTATION',
                  location: 'China',
                  language: 'Chinese',
                  fileName:
                    'SDS¤2105¤Megayacht Imperial Antifouling, black, blue, green, dark red¤Zho;Euk¤CN.pdf',
                },
              ],
            },
          ],
        },
        {
          name: 'AG',
          value: [
            {
              id: 994,
              name: 'Sunrise 11173 - AG - UK DOCUMENTATION',
              location: 'United Kingdom',
              language: 'English',
              fileName: 'AG¤30822¤Megayacht Imperial Antifouling¤Euk¤GB.pdf',
            },
          ],
          children: [],
        },
      ],
    },
  ],
};

// another object only for the purpose of tests
export const onlyDocumentObjectsArray = [
  {
    id: 234,
    name: 'Jotun Lady 7236 Technical Datasheet - Arabic',
    location: 'Saudi Arabia',
    language: 'Arabic',
    fileName: 'TDS¤4220¤Bengalac Red Oxide Primer¤ar-SA¤SA.pdf',
  },
  {
    id: 345,
    name: 'Jotun Lady 7236 Technical Datasheet - UK',
    location: 'United Kingdom',
    language: 'English',
    fileName: 'TDS¤4220¤Bengalac Red Oxide Primer¤Euk¤GB.pdf',
  },
  {
    id: 12,
    name: 'Jotun Lady 7236 SDS - Arabic Egypt',
    location: 'Egypt',
    language: 'Arabic',
    fileName: 'SDS¤4220¤Bengalac Red Oxide Primer¤ar-SA¤EG.pdf',
  },
  {
    id: 235,
    name: 'Harmony 20046 Technical Datasheet - Arabic',
    location: 'Saudi Arabia',
    language: 'Arabic',
    fileName: 'TDS¤4220¤Bengalac Red Oxide Primer¤ar-SA¤SA.pdf',
  },
  {
    id: 346,
    name: 'Harmony 20046 Technical Datasheet - UK',
    location: 'United Kingdom',
    language: 'English',
    fileName: 'TDS¤4220¤Bengalac Red Oxide Primer¤Euk¤GB.pdf',
  },
  {
    id: 13,
    name: 'Harmony 20046 SDS - Arabic Egypt',
    location: 'Egypt',
    language: 'Arabic',
    fileName: 'SDS¤4220¤Bengalac Red Oxide Primer¤ar-SA¤EG.pdf',
  },
  {
    id: 35,
    name: 'Harmony 20046 SDS - UK',
    location: 'Egypt',
    language: 'English',
    fileName: 'SDS¤4220¤Bengalac Red Oxide Primer¤Euk¤EG.pdf',
  },
  {
    id: 44,
    name: 'Harmony 20046 SDS - French Morocco',
    location: 'Morocco',
    language: 'French',
    fileName: 'SDS¤4220¤Bengalac Red Oxide Primer¤Fra¤MA.pdf',
  },
  {
    id: 566,
    name: 'Sunrise 11173 Technical Datasheet - French',
    location: 'France',
    language: 'French',
    fileName: 'TDS¤30822¤Megayacht Imperial Antifouling¤Fra¤FR.pdf',
  },
  {
    id: 565,
    name: 'Sunrise 11173 PRODUCT DOCUMENTATION - German',
    location: 'Germany',
    language: 'German',
    fileName: 'TDS¤30822¤Megayacht Imperial Antifouling¤Ger¤DE.pdf',
  },
  {
    id: 564,
    name: 'Sunrise 11173 SDS - French - France',
    location: 'France',
    language: 'French',
    fileName: 'TDS¤30822¤Megayacht Imperial Antifouling¤Fra¤FR.pdf',
  },
  {
    id: 563,
    name: 'Sunrise 11173 SDS - Germany - German',
    location: 'Germany',
    language: 'German',
    fileName: 'TDS¤30822¤Megayacht Imperial Antifouling¤Ger¤DE.pdf',
  },
  {
    id: 561,
    name: 'Sunrise 11173  - Antifouling Supreme - Australia ENG',
    location: 'Australia',
    language: 'English',
    fileName: 'SDS¤30822¤Megayacht Imperial Antifouling¤Euk¤AU.pdf',
  },
  {
    id: 998,
    name: '豪华游 - Doc Chinese - Sunrise 11173',
    location: 'China',
    language: 'Chinese',
    fileName: 'SDS¤30822¤Megayacht Imperial Antifouling¤Zho;Euk¤CN.pdf',
  },
  {
    id: 996,
    name: 'Sunrise 11173 - Megayacht Antifouling - AUS English',
    location: 'Australia',
    language: 'English',
    fileName:
      'SDS¤2105¤Megayacht Imperial Antifouling, black, blue, green, dark red¤Euk¤AU.pdf',
  },
  {
    id: 995,
    name: '豪华游艇 - Sunrise 11173 CN - CHINESE DOCUMENTATION',
    location: 'China',
    language: 'Chinese',
    fileName:
      'SDS¤2105¤Megayacht Imperial Antifouling, black, blue, green, dark red¤Zho;Euk¤CN.pdf',
  },
  {
    id: 994,
    name: 'Sunrise 11173 - AG - UK DOCUMENTATION',
    location: 'United Kingdom',
    language: 'English',
    fileName: 'AG¤30822¤Megayacht Imperial Antifouling¤Euk¤GB.pdf',
  },
];

export default productDatasheets;
