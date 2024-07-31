import ColoursPageContent from "@/components/organisms/ColoursPageContent/ColoursPageContent";
import { getRelatedColoursSectionData } from "@/app/colour-properties/_utils/getRelatedColoursSectionData";

export default function ColourPropertiesPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const relatedColors = searchParams?.relatedColors as string[] | undefined;
  const relatedColoursSection = getRelatedColoursSectionData(relatedColors);

  return <ColoursPageContent relatedColoursSection={relatedColoursSection} />;
}
