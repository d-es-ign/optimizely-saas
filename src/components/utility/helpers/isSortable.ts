export const isSortable = (...inputs: unknown[]) =>
  inputs.every((input) =>
    ['string', 'number', 'boolean'].includes(typeof input)
  );
