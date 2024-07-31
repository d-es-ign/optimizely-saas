import {
  BannerBlockDataFragmentDoc,
  type BannerBlockDataFragment,
  ContentReference,
} from "@/gql/graphql";
import { CmsEditable, CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

/**
 * Banner Component
 * Reusable banner component
 */
export const BannerBlockComponent: CmsComponent<BannerBlockDataFragment> = ({
  data: { Title, Image: image },
  inEditMode,
}) => {
  const imageData = {
    altText: "Banner image alt text",
    url: (image as ContentReference)?.url?.default || "",
    imageFocalPoint: "0.5,0.5",
  };

  return (
    <section>
      <div
        className={`lg:tw-h-[90vh] tw-h-[300px] tw-relative tw-flex tw-justify-center tw-items-center`}
      >
        {image && <img src={imageData.url} alt={imageData.altText} className={`tw-w-full lg:tw-h-[90vh] tw-h-[300px] tw-absolute`}/>}
        {(Title || inEditMode) && (
          <CmsEditable
            as="h1"
            className="tw-text-xl tw-my-[20px] tw-z-10 tw-text-white tw-font-serif tw-text-4xl md:tw-text-7xl xl:tw-text-8xl"
            cmsFieldName="CardHeading"
          >
            {Title}
          </CmsEditable>
        )}
      </div>
    </section>
  );
};
BannerBlockComponent.displayName = "Card Component (Component/CardBlock)";
BannerBlockComponent.getDataFragment = () => [
  "BannerBlockData",
  BannerBlockDataFragmentDoc,
];

export default BannerBlockComponent;
