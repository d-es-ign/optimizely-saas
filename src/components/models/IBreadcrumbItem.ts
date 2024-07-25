
import { TextVariant } from '../atoms/Text/Text';
import { AtLeastOne } from './helpers/AtLeastOne';

type IBreadcrumbItemBase = {
  readonly breadcrumbTextColour?: string;
  readonly breadcrumbTextVariant?: TextVariant;
  readonly className?: string;
  readonly id: string;
  readonly label: string;
  readonly nested?: boolean;
  readonly nestedBreadcrumbClasses?: string;
  readonly reverse?: boolean;
  readonly visible?: boolean;
};

type InteractionProps = {
  readonly onClick?: (e: unknown) => void;
  readonly href?: string | undefined;
};

export type IBreadcrumbItem = IBreadcrumbItemBase &
  AtLeastOne<InteractionProps>;
