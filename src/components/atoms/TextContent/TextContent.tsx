import SiteEnum from "@/components/models/enums/SiteEnum";
import { ITextContent } from "@/components/models/ITextContent";
import Text from "../Text/Text";
import Cta from "../Cta/Cta";


interface Props {
  readonly textContent: ITextContent;
  readonly site: SiteEnum;
}

const TextContent = ({
  textContent: { header, subText, cta },
  site,
}: Props) => (
  <section className="tw-text-black-100 tw-flex tw-flex-col tw-gap-sm">
    <Text variant="headline">{header}</Text>
    <div
      className="tw-rich-text tw-text-grey-80"
      dangerouslySetInnerHTML={{ __html: subText }}
    />

    {cta?.url !== null && (
      <div className="tw-inline-block">
        <Cta site={site} url={cta.url} target={cta.target} text={cta.text} />
      </div>
    )}
  </section>
);

export default TextContent;
