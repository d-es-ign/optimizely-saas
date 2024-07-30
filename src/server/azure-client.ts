import { ComputerVisionClient } from "@azure/cognitiveservices-computervision";
import {ApiKeyCredentials} from "@azure/ms-rest-js";

const key = process.env.VISIONKEY;
const endpoint = process.env.ENDPOINT;

if(!key || !endpoint) {
    throw Error('Vision API key or endpoint not found');
}

export const computerVisionClient = new ComputerVisionClient(
    new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);
