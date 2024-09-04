import { CmsImage } from '@/components/shared/cms_image';
import { type TestimonialElementDataFragment, TestimonialElementDataFragmentDoc } from '@/gql/graphql';
import { CmsComponent } from '@remkoj/optimizely-cms-react';
import { RichText } from '@remkoj/optimizely-cms-react/components';
import { CmsEditable, getServerContext } from '@remkoj/optimizely-cms-react/rsc';
import 'server-only';

export const TestimonialElement: CmsComponent<TestimonialElementDataFragment> = ({
  data: { referenceText, customerImage, customerLocation, customerName },
  contentLink: { key },
}) => {
  const { factory } = getServerContext();
  return (
    <div className="tw-w-full tw-bg-blue tw-text-white">
      <CmsEditable as="figure" className="testimonial tw-mx-auto tw-max-w-[640px] tw-py-3xl tw-leading-2xl" cmsId={key}>
        <RichText
          as="blockquote"
          text={referenceText?.json}
          factory={factory}
          className="tw-rich-text prose-p:tw-mt-0 tw-m-0 tw-border-l-0 tw-p-0"
        />
        <figcaption>
          <cite className="tw-mt-4 tw-not-italic lg:tw-flex lg:tw-items-center lg:tw-justify-start">
            <p className="tw-mb-2 tw-mt-0 tw-whitespace-nowrap tw-align-middle tw-text-2xl lg:tw-mb-0">
              {customerImage && (
                <CmsImage
                  src={customerImage}
                  alt={customerName ?? ''}
                  width={200}
                  height={200}
                  className="not-prose tw-mr-3 tw-inline-block tw-h-12 tw-w-12 tw-rounded-full"
                />
              )}
              {customerName ?? ''}
            </p>
            {customerLocation && (
              <>
                <span className="tw-mx-2 tw-hidden lg:tw-inline-block">—</span>
                <p className="tw-text-md tw-my-0 lg:tw-text-lg">{customerLocation}</p>
              </>
            )}
          </cite>
        </figcaption>
      </CmsEditable>
    </div>
  );
};
TestimonialElement.getDataFragment = () => ['TestimonialElementData', TestimonialElementDataFragmentDoc];

export default TestimonialElement;
