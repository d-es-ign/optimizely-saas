import { getRelatedColoursSectionData } from '@/app/colour-properties/_utils/getRelatedColoursSectionData';
import ColoursPageContent from '@/components/organisms/ColoursPageContent/ColoursPageContent';
const blobStoragePath = process.env.BLOB_STORAGE_PATH;

export default function ColourPropertiesPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const relatedColors = searchParams?.relatedColors as string[] | undefined;
  const accentColour = searchParams?.accentColour as string | undefined;

  const { relatedColoursSection, accentColourCard } = getRelatedColoursSectionData(relatedColors, accentColour);

  const img = searchParams?.img as string | undefined;

  const imageUrl = blobStoragePath && img ? blobStoragePath + img : undefined;
  // const accentColourSection = getRelatedColoursSectionData(relatedColors);

  return (
    <div>
      <ColoursPageContent
        relatedColoursSection={relatedColoursSection}
        accentColourCard={accentColourCard}
        imageUrl={imageUrl}
      />
    </div>
  );
}
