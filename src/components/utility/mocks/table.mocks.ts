import { ITable, TableRow } from '@models/ITable';

const mockRows: TableRow[] = [
  {
    data: [
      'Row 0',
      'My Documents',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis eaque excepturi alias, veniam obcaecati praesentium rem ratione saepe quaerat similique nisi velit ut soluta quod repellendus quae molestiae eligendi.',
      751,
    ],
  },
  {
    data: [
      'Row 1',
      'Row 1 Content that That Is really Long 1 lorem ipsum ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis eaque excepturi alias, veniam obcaecati praesentium rem ratione saepe quaerat similique nisi velit ut soluta quod repellendus quae molestiae eligendi.',
      37,
    ],
  },
  {
    data: [
      'Row 2',
      'Row 2 Content that That Is really Long 2 lorem ipsum ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis eaque excepturi alias, veniam obcaecati praesentium rem ratione saepe quaerat similique nisi velit ut soluta quod repellendus quae molestiae eligendi.',
      8,
    ],
  },
  {
    data: [
      'Row 3',
      'Row 3 Content that That Is really Long 3 lorem ipsum ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis eaque excepturi alias, veniam obcaecati praesentium rem ratione saepe quaerat similique nisi velit ut soluta quod repellendus quae molestiae eligendi.',
      29,
    ],
  },
  {
    data: [
      'Row 4',
      'Row 4 Content that That Is really Long 4 lorem ipsum ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis eaque excepturi alias, veniam obcaecati praesentium rem ratione saepe quaerat similique nisi velit ut soluta quod repellendus quae molestiae eligendi.',
      459270,
    ],
  },
  {
    data: [
      'Row 5',
      'Row 5 Content that That Is really Long 5 lorem ipsum ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis eaque excepturi alias, veniam obcaecati praesentium rem ratione saepe quaerat similique nisi velit ut soluta quod repellendus quae molestiae eligendi.',
      15,
    ],
  },
  {
    data: [
      'Row 6',
      'Row 6 Content that That Is really Long 6 lorem ipsum ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis eaque excepturi alias, veniam obcaecati praesentium rem ratione saepe quaerat similique nisi velit ut soluta quod repellendus quae molestiae eligendi.',
      753,
    ],
  },
  {
    data: [
      'Row 7',
      'Row 7 Content that That Is really Long 7 lorem ipsum ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis eaque excepturi alias, veniam obcaecati praesentium rem ratione saepe quaerat similique nisi velit ut soluta quod repellendus quae molestiae eligendi.',
      84,
    ],
  },
  {
    data: [
      'Row 8',
      'Row 8 Content that That Is really Long 8 lorem ipsum ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis eaque excepturi alias, veniam obcaecati praesentium rem ratione saepe quaerat similique nisi velit ut soluta quod repellendus quae molestiae eligendi.',
      239,
    ],
  },
  {
    data: [
      'Row 9',
      'Row 9 Content that That Is really Long 8 lorem ipsum ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis eaque excepturi alias, veniam obcaecati praesentium rem ratione saepe quaerat similique nisi velit ut soluta quod repellendus quae molestiae eligendi.',
      -178,
    ],
  },
  {
    data: [
      'Row 10',
      'Row 10 Content that That Is really Long 8 lorem ipsum ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis eaque excepturi alias, veniam obcaecati praesentium rem ratione saepe quaerat similique nisi velit ut soluta quod repellendus quae molestiae eligendi.',
      345,
    ],
  },
  {
    data: [
      'Row 11',
      'Row 11 Content that That Is really Long 8 lorem ipsum ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis eaque excepturi alias, veniam obcaecati praesentium rem ratione saepe quaerat similique nisi velit ut soluta quod repellendus quae molestiae eligendi.',
      954,
    ],
  },
  {
    data: [
      'Row 12',
      'Row 12 Content that That Is really Long 8 lorem ipsum ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis eaque excepturi alias, veniam obcaecati praesentium rem ratione saepe quaerat similique nisi velit ut soluta quod repellendus quae molestiae eligendi.',
      1,
    ],
  },
  {
    data: [
      'Row 13',
      'Row 13 Content that That Is really Long 8 lorem ipsum ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis eaque excepturi alias, veniam obcaecati praesentium rem ratione saepe quaerat similique nisi velit ut soluta quod repellendus quae molestiae eligendi.',
      1,
    ],
  },
  {
    data: [
      'Row 14',
      'Row 14 Content that That Is really Long 8 lorem ipsum ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis eaque excepturi alias, veniam obcaecati praesentium rem ratione saepe quaerat similique nisi velit ut soluta quod repellendus quae molestiae eligendi.',
      2,
    ],
  },
];

const mockTable: ITable = {
  headers: [
    { label: 'Column foo 1' },
    {
      label: 'Column bar 2',
    },
    { label: 'Column baz 3' },
    { label: 'Column num 4' },
  ],
  rows: mockRows,
  variant: 'content',
  spacing: 'normal',
  loading: false,
};

export default mockTable;
