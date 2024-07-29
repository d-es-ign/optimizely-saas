import React from 'react';
import SiteEnum from "@/components/models/enums/SiteEnum";
import { ITextContent } from "@/components/models/ITextContent";
import Text from "../Text/Text";
import Cta from "../Cta/Cta";
import { IFlexContent } from "@/components/models/IFlexContent";

interface Props {
  readonly textContent: IFlexContent;
  readonly site: SiteEnum;
}

const FlexContent = ({
  textContent: { header, subText },
  site,
}: Props) => (
  <section className="tw-flex tw-items-center tw-text-black-100 tw-gap-sm">
    <Text variant="headline" className="tw-w-1/2">{header}</Text>
    <div className="tw-rich-text tw-text-grey-80 tw-w-1/2 text-right" dangerouslySetInnerHTML={{ __html: subText }} />
  </section>
);

export default FlexContent;