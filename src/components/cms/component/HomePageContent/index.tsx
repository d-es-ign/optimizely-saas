import { CmsComponent } from "@remkoj/optimizely-cms-react";
import {
  OfficeLocationDataFragmentDoc,
  type OfficeLocationDataFragment,
} from "@/gql/graphql";
import HomePageContent from "../../../organisms/HomePageContent/HomePageContent";

/**
 * Office Location // TODO: CHANGE THIS TO BE THE HOME PAGE AND RENAME
 *
 */
export const OfficeLocationComponent: CmsComponent<
  OfficeLocationDataFragment
> = ({ data }) => {
  return (
    <section>
      <HomePageContent />
    </section>
  );
};
OfficeLocationComponent.displayName =
  "Office Location (Component/OfficeLocation)";
OfficeLocationComponent.getDataFragment = () => [
  "OfficeLocationData",
  OfficeLocationDataFragmentDoc,
];

export default OfficeLocationComponent;
