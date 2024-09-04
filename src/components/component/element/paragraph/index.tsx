import { gql, type Schema } from '@/gql';
import { type CmsComponent } from '@remkoj/optimizely-cms-react';
import { getFactory, getServerContext } from '@remkoj/optimizely-cms-react/rsc';

import { RichText } from '@remkoj/optimizely-cms-react/components';
import { CmsEditable } from '@remkoj/optimizely-cms-react/rsc';

const COLUMN_CLASSES = 'tw-grid-cols-1 tw-grid-cols-2 tw-grid-cols-3 tw-grid-cols-4 tw-grid-cols-5';

export const ParagraphElement: CmsComponent<Schema.ParagraphElementDataFragment> = ({
  data: { paragraph },
  contentLink,
  inEditMode,
}) => {
  const { factory } = getServerContext();
  const sections = paragraph?.json.children.length;
  return (
    <div className="tw-mb-lg tw-w-full tw-bg-white tw-py-4xl tw-text-blue">
      <CmsEditable
        as={RichText}
        className={`tw-mx-auto tw-grid tw-w-full tw-max-w-[1440px] tw-gap-sm tw-text-lg tw-leading-3xl tw-grid-cols-${sections}`}
        factory={factory ?? getFactory()}
        text={paragraph?.json}
        cmsId={contentLink.key}
      />
    </div>
  );
};
ParagraphElement.getDataFragment = () => ['ParagraphElementData', ParagraphElementData];

export default ParagraphElement;

const ParagraphElementData = gql(`fragment ParagraphElementData on ParagraphElement {
    paragraph: text {
        json
    }
}`);
