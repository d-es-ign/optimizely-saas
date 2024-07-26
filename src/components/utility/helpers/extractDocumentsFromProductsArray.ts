

// The JSON structure for datasheets contains quite a complex structure, hence the need for this function

import IProductDatasheets, { IProductDatasheet } from "@/components/models/IProductDatasheets";

// see: productDatasheets.mocks.ts
const extractDocumentsFromProductsArray = (products: IProductDatasheets[]) => {
  const extractedDatasheetsArray: IProductDatasheet[] = [];

  const extractDatasheetsFromValueArray = (filesArray: IProductDatasheet[]) => {
    filesArray.forEach((item) => {
      extractedDatasheetsArray.push(item);
    });
  };

  products.forEach((product) => {
    product.value.forEach((datasheetsTypeSet) => {
      extractDatasheetsFromValueArray(datasheetsTypeSet.value);

      if (datasheetsTypeSet.children && datasheetsTypeSet.children.length > 0) {
        datasheetsTypeSet.children.forEach((datasheetChildset) => {
          extractDatasheetsFromValueArray(datasheetChildset.value);
        });
      }
    });
  });

  return extractedDatasheetsArray;
};

export default extractDocumentsFromProductsArray;
