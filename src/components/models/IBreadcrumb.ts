import { IBreadcrumbItem } from './IBreadcrumbItem';

export interface IBreadcrumb {
  readonly items: IBreadcrumbItem[];
  readonly loading: boolean;
}
