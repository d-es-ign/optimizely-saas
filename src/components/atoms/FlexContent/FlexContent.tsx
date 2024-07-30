import React from 'react';
import Text from "../Text/Text";
import { IFlexContent } from "@/components/models/IFlexContent";

interface Props {
  readonly textContent: IFlexContent;
}

const FlexContent = ({
  textContent: { header, subText },
}: Props) => (
  <section className="tw-flex tw-items-center tw-text-black-100 tw-gap-sm tw-py-[120px]">
    <Text variant="headline" className="tw-w-1/2">{header}</Text>
    <div className="tw-rich-text tw-text-grey-80 tw-w-1/2 text-right" dangerouslySetInnerHTML={{ __html: subText }} />
  </section>
);

export default FlexContent;