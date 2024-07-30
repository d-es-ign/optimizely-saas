import { createAzure } from "@ai-sdk/azure";
import { generateText } from "ai";

const VERCEL_AZURE_RESOURCE_NAME = process.env.VERCEL_AZURE_RESOURCE_NAME;
const VERCEL_AZURE_API_KEY = process.env.VERCEL_AZURE_API_KEY;

if (!VERCEL_AZURE_RESOURCE_NAME || !VERCEL_AZURE_API_KEY) {
  throw Error("Azure resource name or API key not found");
}
const azure = createAzure({
  resourceName: VERCEL_AZURE_RESOURCE_NAME, // Azure resource name
  apiKey: VERCEL_AZURE_API_KEY,
});

export async function getComplimentaryColours(
  colour: string,
): Promise<string[] | null> {
  const result = await generateText({
    model: azure("colours"),
    system:
      "You are a colour consultant, given what is provided you will provide and only provide a CSV of hex codes that represent a analogous colour scheme based on the provided theme or colour. Do not output anything but the CSV.",
    prompt: colour,
  });

  return result.text.match(/#[0-9a-fA-F]{6}/g);
}
