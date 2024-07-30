import "server-only";

import { computerVisionClient } from "@/server/azure-client";
import { type VisualFeatureTypes } from "@azure/cognitiveservices-computervision/esm/models";

export async function visionAnalyzeImage(filepath: string) {
  // The URL can point to image files (.jpg/.png/.bmp) or multi-page files (.pdf, .tiff).
  const url = process.env.BLOB_STORAGE_PATH + filepath;
  const features: VisualFeatureTypes[] = ["Color"];
  return await computerVisionClient.analyzeImage(url, {
    visualFeatures: features,
  });
}
