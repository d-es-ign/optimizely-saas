export interface IImage {
  readonly altText: string;
  readonly url: string;
  readonly originalHeight: number;
  readonly originalWidth: number;
  readonly imageFocalPoint: string; // decimal percentages e.g. 0.25,0.75
  readonly meta?: {
    readonly contentLink: string;
  };
}
