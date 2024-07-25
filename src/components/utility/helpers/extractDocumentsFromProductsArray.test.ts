import productDatasheets, {
  onlyDocumentObjectsArray,
} from '@utility/mocks/productDatasheets.mocks';
import extractDocumentsFromProductsArray from './extractDocumentsFromProductsArray';

describe('Extract only document objects from products object in a separate array', () => {
  it('Should extract only document objects from products object into a separate array', () => {
    expect(
      extractDocumentsFromProductsArray(productDatasheets.products)
    ).toEqual(onlyDocumentObjectsArray);
  });
});
