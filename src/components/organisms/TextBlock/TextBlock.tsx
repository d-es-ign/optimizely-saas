import SiteEnum from '@/components/models/enums/SiteEnum';

export interface ITextBlock {
  readonly site: SiteEnum;
  readonly content: string;
}

const TextBlock = ({ content }: ITextBlock) => {
  return (
    <section className="tw-grid-container tw-bg-white tw-py-16 tw-text-grey-80 xl:tw-py-20">
      <p
        className="tw-rich-text tw-col-span-4 md:tw-col-start-3 lg:tw-col-span-8 lg:tw-col-start-5 xxl:tw-col-span-7 xxl:tw-col-start-6"
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
    </section>
  );
};

export default TextBlock;
