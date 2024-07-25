import { IBreadcrumb } from '@models/IBreadcrumb';

const mockBreadcrumb: IBreadcrumb = {
  loading: false,
  items: [
    { id: '0', href: 'Root', label: 'My Documents' },
    { id: '1', href: 'Level 1', label: 'Level 1 Folder Name That Is Long 1' },
    { id: '2', href: 'Level 2', label: 'Level 2 Folder Name That Is Long 2' },
    { id: '3', href: 'Level 3', label: 'Level 3 Folder Name That Is Long 3' },
    { id: '4', href: 'Level 4', label: 'Level 4 Folder Name That Is Long 4' },
    { id: '5', href: 'Level 5', label: 'Level 5 Folder Name That Is Long 5' },
    { id: '6', href: 'Level 6', label: 'Level 6 Folder Name That Is Long 6' },
    { id: '7', href: 'Level 7', label: 'Level 7 Folder Name That Is Long 7' },
    { id: '8', href: 'Level 8', label: 'Level 8 Folder Name That Is Long 8' },
    { id: '9', href: 'Level 9', label: 'Level 9 Folder Name That Is Long 8' },
    {
      id: '10',
      href: 'Level 10',
      label: 'Level 10 Folder Name That Is Long 8',
    },
    {
      id: '11',
      href: 'Level 11',
      label: 'Level 11 Folder Name That Is Long 8',
    },
    {
      id: '12',
      href: 'Level 12',
      label: 'Level 12 Folder Name That Is Long 8',
    },
    {
      id: '13',
      href: 'Level 13',
      label: 'Level 13 Folder Name That Is Long 8',
    },
    {
      id: '14',
      href: 'Level 14',
      label: 'Level 14 Folder Name That Is Long 8',
    },
    {
      id: '15',
      onClick: () => {
        alert('Level 15');
      },
      label: 'Alert action',
    },
    {
      id: '16',
      href: 'Current',
      label: 'Current page',
    },
  ],
};

export default mockBreadcrumb;
