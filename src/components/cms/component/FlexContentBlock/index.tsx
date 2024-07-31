import {
  FlexContentBlockDataFragmentDoc,
  type FlexContentBlockDataFragment,
} from "@/gql/graphql";
import { CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import Text from "@/components/atoms/Text/Text";

/**
 * Flex Content Component
 * Reusable Flex Content Component
 */
export const FlexContentBlockComponent: CmsComponent<
  FlexContentBlockDataFragment
> = ({ data: { Title, Text: textContent }, inEditMode }) => {
  return (
    <section className="tw-flex tw-items-center tw-text-black-100 tw-gap-sm tw-py-[120px] tw-bg-grey-10 tw-px-[48px]">
      <Text variant="headline" className="tw-w-1/2">
        {Title || ""}
      </Text>
      <div
        className="tw-rich-text tw-text-grey-80 tw-w-1/2 text-right"
        dangerouslySetInnerHTML={{ __html: textContent as string }}
      />
    </section>
  );
};
FlexContentBlockComponent.displayName =
  "Flex Content Block (Component/FlexContentBlock)";
FlexContentBlockComponent.getDataFragment = () => [
  "FlexContentBlockData",
  FlexContentBlockDataFragmentDoc,
];

export default FlexContentBlockComponent;
