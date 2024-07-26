import { IDataSheets } from "@/components/models/IDataSheets";


export const dataSheetsMock: IDataSheets = {
  files: [
    {
      fileName: 'Teknisk Datablad',
      fileType: 'TDS',
      language: 'English',
      country: 'Norway',
      cultureCode: 'en-NO',
      matchesSiteCulture: false,
      cta: {
        text: 'Last ned',
        url: 'https://jotundatasheetsdev.blob.core.windows.net/tds/TDS%C2%A414280%C2%A4LADY%20Pure%20Color%C2%A4Eng%C2%A4NO.pdf',
      },
    },
    {
      fileName: 'Teknisk Datablad',
      fileType: 'TDS',
      language: 'Norwegian',
      country: 'Norway',
      cultureCode: 'no-NO',
      matchesSiteCulture: true,
      cta: {
        text: 'Last ned',
        url: 'https://jotundatasheetsdev.blob.core.windows.net/tds/TDS%C2%A414280%C2%A4LADY%20Pure%20Color%C2%A4Nor%C2%A4NO.pdf',
      },
    },
    {
      fileName: 'FDV',
      fileType: 'FDV',
      language: 'Norwegian',
      country: 'Norway',
      cultureCode: 'no-NO',
      matchesSiteCulture: true,
      cta: {
        text: 'Last ned',
        url: 'https://jotundatasheetsdev.blob.core.windows.net/fdv/FDV%C2%A414280%C2%A4LADY%20Pure%20Color%C2%A4Nor%C2%A4NO.pdf',
      },
    },
    {
      fileName: 'Sikkerhetsdatablad',
      fileType: 'SDS',
      language: 'English',
      country: 'Norway',
      cultureCode: 'en-NO',
      matchesSiteCulture: false,
      cta: {
        text: 'Last ned',
        url: 'https://jotundatasheetsdev.blob.core.windows.net/sds/SDS%C2%A414280%C2%A4LADY%20Pure%20Color%C2%A4Euk%C2%A4NO.pdf',
      },
    },
    {
      fileName: 'Sikkerhetsdatablad',
      fileType: 'SDS',
      language: 'Norwegian',
      country: 'Norway',
      cultureCode: 'no-NO',
      matchesSiteCulture: true,
      cta: {
        text: 'Last ned',
        url: 'https://jotundatasheetsdev.blob.core.windows.net/sds/SDS%C2%A414280%C2%A4LADY%20Pure%20Color%C2%A4Nor%C2%A4NO.pdf',
      },
    },
  ],
  availableLanguages: ['English', 'Norwegian'],
};

export default dataSheetsMock;
