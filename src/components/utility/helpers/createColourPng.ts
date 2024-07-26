import { RefObject } from 'react';

export const createColourPng = (
  ref: RefObject<HTMLDivElement>,
  colour: string
): string => {
  const imageWidth = ref.current?.offsetWidth || 100;
  const imageHeight = ref.current?.offsetHeight || 100;

  const canvas = document.createElement('canvas');
  canvas.width = imageWidth;
  canvas.height = imageHeight;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    ctx.fillStyle = `#${colour}`;
    ctx.fillRect(0, 0, imageWidth, imageHeight);
  }

  return canvas.toDataURL();
};
