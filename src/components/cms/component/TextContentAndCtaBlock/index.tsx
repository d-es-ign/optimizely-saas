import {
  TextContentAndCtaBlockDataFragmentDoc,
  type TextContentAndCtaBlockDataFragment,
  ButtonBlockProperty,
} from "@/gql/graphql";
import { CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import Text from "@/components/atoms/Text/Text";
import Cta from "@/components/atoms/Cta/Cta";

/**
 * Text Content and Cta Component
 * Reusable Text Content and Cta Component
 */
export const TextContentAndCtaBlockComponent: CmsComponent<
  TextContentAndCtaBlockDataFragment
> = ({ data: { title, text, button }, inEditMode }) => {
  return (
    <div className="tw-w-full sm:tw-px-[40px] tw-text-center tw-flex tw-justify-center tw-py-[120px]">
      <section className="tw-text-black-100 lg:tw-w-[640px] tw-flex tw-flex-col tw-gap-sm">
        <Text variant={"headline"}>{title || ""}</Text>
        <div
          className="tw-rich-text"
          dangerouslySetInnerHTML={{ __html: text as string }}
        />

        {button && (button as ButtonBlockProperty)?.link?.base !== null && (
          <div className="tw-inline-block">
            <Cta
              url={(button as ButtonBlockProperty)?.link?.base || ""}
              text={(button as ButtonBlockProperty)?.text || ""}
            />
          </div>
        )}
      </section>
    </div>
  );
};
TextContentAndCtaBlockComponent.displayName =
  "Text Content And Cta (Component/TextContentAndCtaBlock)";
TextContentAndCtaBlockComponent.getDataFragment = () => [
  "TextContentAndCtaBlockData",
  TextContentAndCtaBlockDataFragmentDoc,
];

export default TextContentAndCtaBlockComponent;
