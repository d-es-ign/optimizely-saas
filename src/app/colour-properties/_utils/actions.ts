"use server";
import { getComplimentaryColours } from "@/server/azure/getComplimentaryColours";
import { uploadAnImageToBlob } from "@/server/azure/uploadAnImageToBlob";
import { visionAnalyzeImage } from "@/server/vision/visionAnalyzeImage";
import { redirect } from "next/navigation";

export async function getComplimentaryColoursAction(formData: FormData) {
  const file = formData.get("file") as File;
  const searchParams = new URLSearchParams();

  const _return: {
    error: string | null;
    complimentaryColours: string[] | null;
  } = {
    error: null,
    complimentaryColours: null,
  };
  try {
    // Check if a file is received
    if (!file) {
      // If no file is received, return a JSON response with an error and a 400 status code
      _return.error = "No files received.";
    }
    if (file.size > 1024 * 1024 * 5) {
      _return.error = "File size is too large.";
    }

    const blobName = await uploadAnImageToBlob(file);
    if (blobName) {
      const result = await visionAnalyzeImage(blobName);

      if (result.color?.accentColor) {
        _return.complimentaryColours = await getComplimentaryColours(
          "#" + result.color?.accentColor,
        );

        _return.complimentaryColours
          ?.filter((colour) => colour !== "#" + result.color?.accentColor)
          ?.slice(0, 10)
          ?.forEach((color) => {
            searchParams.append("relatedColors", color);
          });

        searchParams.append("accentColour", "#" + result.color?.accentColor);
        searchParams.append("img", blobName);
      }
    }
  } catch (error) {
    // Send an error response
    _return.error = "Something went wrong, please try again!";
  }

  const redirectUrl = searchParams.size
    ? "/colour-properties?" + searchParams?.toString()
    : "/colour-properties";

  redirect(redirectUrl);
}
