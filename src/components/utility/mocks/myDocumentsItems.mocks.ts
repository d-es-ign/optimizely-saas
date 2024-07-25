import { IDocument } from '@models/IDocument';

const rootFolders = [
  {
    id: '01X46GPZFEKV5QB4Y4PZCLGDOYYTRBPRD3',
    parentId: null,
    isFolder: true,
    name: 'Dept',
    hasChildren: false,
    lastModified: '2019-11-12T13:36:21+00:00',
    lastModifiedBy: 'Andy Alyth',
    fileSize: 1468244,
    mimeType: null,
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept',
    downloadUrl: null,
  },
  {
    id: '01X46GPZHFS7W4EAIUQZFITDFEZO53MAGL',
    parentId: null,
    isFolder: true,
    name: 'Protective',
    hasChildren: false,
    lastModified: '2019-11-12T15:22:39+00:00',
    lastModifiedBy: 'Andy Clyth',
    fileSize: 12268015,
    mimeType: null,
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Protective',
    downloadUrl: null,
  },
  {
    id: '1Q2W3E4R5T6Y7U8I9O0PLMKNJBHVGCFXDSZA',
    parentId: null,
    isFolder: true,
    name: 'Empty',
    hasChildren: false,
    lastModified: '2019-11-12T13:36:21+00:00',
    lastModifiedBy: 'Jasper van Es',
    fileSize: 15,
    mimeType: null,
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept',
    downloadUrl: null,
  },
];

const l2A = [
  {
    id: '01X46GPZDZK2Y2BJW355DJZRFQSP64LSVW',
    parentId: '01X46GPZHFS7W4EAIUQZFITDFEZO53MAGL',
    isFolder: true,
    name: 'Client Uploads',
    hasChildren: false,
    lastModified: '2019-11-12T13:37:53+00:00',
    lastModifiedBy: 'Andy Elyth',
    fileSize: 1083968,
    mimeType: null,
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/Client%20Uploads',
    downloadUrl: null,
  },
  {
    id: '01X46GPZF3R75QEB6VQJBJRXDHOEBCQJXA',
    parentId: '01X46GPZFEKV5QB4Y4PZCLGDOYYTRBPRD3',
    isFolder: true,
    name: 'fefew',
    hasChildren: false,
    lastModified: '2019-11-12T10:38:24+00:00',
    lastModifiedBy: 'Andy Dlyth',
    fileSize: 312678,
    mimeType: null,
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/fefew',
    downloadUrl: null,
  },
  {
    id: '01X46GPZH76YFJV4NI5JCJTWFYUBBTKO3S',
    parentId: '01X46GPZFEKV5QB4Y4PZCLGDOYYTRBPRD3',
    isFolder: false,
    name: '255px-Flag_of_Great_Britain_(1707–1800).svg.png',
    hasChildren: false,
    lastModified: '2009-11-08T14:42:24+00:00',
    lastModifiedBy: 'Andy Flyth',
    fileSize: 1110,
    mimeType: 'image/png',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/255px-Flag_of_Great_Britain_(1707%E2%80%931800).svg.png',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=9a0af6ff-a8f1-44ea-99d8-b8a043353b72&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1Mzc4ODkyIiwiZXhwIjoiMTU3NTM4MjQ5MiIsImVuZHBvaW50dXJsIjoiU1I4dEJWdWtaR1Z6STNtNmtxYk5zazhEQ2wvZzEvYXlkaDlyR1Y3L1N6dz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiTjJJek9ETXlPRGd0WVRWbVlTMDBObU5qTFdGaU5XVXRPRGN5WmpBd1pETXpOREEwIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.bEpXcE02MFZVWXprMmhiK0dZN05Nem95eituQlJHMDMzYTJiZjFjSkdCMD0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZGUY4LCQZLC4JC33PUQKMNFEEBX',
    parentId: '01X46GPZFEKV5QB4Y4PZCLGDOYYTRBPRD3',
    isFolder: false,
    name: 'Document.docx',
    hasChildren: false,
    lastModified: '2010-11-08T14:04:01+00:00',
    lastModifiedBy: 'Andy Glyth',
    fileSize: 17062,
    mimeType:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/Doc.aspx?sourcedoc=%7B2816C7D4-6265-45E2-BDBE-90531A521037%7D&file=Document.docx&action=default&mobileredirect=true',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=2816c7d4-6265-45e2-bdbe-90531a521037&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1Mzc4ODkyIiwiZXhwIjoiMTU3NTM4MjQ5MiIsImVuZHBvaW50dXJsIjoiVkMzMUh1Y0FEa1pEcGQzM05oQUFIRTdPM0hhR01yS2dCeEhCWTVKb25tbz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiTjJJek9ETXlPRGd0WVRWbVlTMDBObU5qTFdGaU5XVXRPRGN5WmpBd1pETXpOREEwIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.TWlLc3plZFVBRXBqbU1PY1JPV0xxbEZENjVJK2F1Q0cvSFBGazljbmZaMD0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZHMK3K7ICI5MJH2PR6234XCIIU5',
    parentId: '01X46GPZFEKV5QB4Y4PZCLGDOYYTRBPRD3',
    isFolder: false,
    name: 'Resistance List.pdf',
    hasChildren: false,
    lastModified: '2011-11-08T14:41:59+00:00',
    lastModifiedBy: 'Andy Hlyth',
    fileSize: 36364,
    mimeType: 'application/pdf',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/Resistance%20List.pdf',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=f4d556ec-1d09-4f62-a7c7-dadf2e24229d&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1Mzc4ODkyIiwiZXhwIjoiMTU3NTM4MjQ5MiIsImVuZHBvaW50dXJsIjoic3ZydnhRQzF0REdZSGZ1dENKam9yTHBxTnJpWkdwSmwyYmRjc2hnK21wTT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiTjJJek9ETXlPRGd0WVRWbVlTMDBObU5qTFdGaU5XVXRPRGN5WmpBd1pETXpOREEwIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.SFFXVlRrUUh6S1BZZmFrSVJlM2g2WE01SkxZcTFWTDNHL2NMV2pPT2l5OD0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZAHGOAL7LM6DJGYEWGHWNOUFSLB',
    parentId: '01X46GPZFEKV5QB4Y4PZCLGDOYYTRBPRD3',
    isFolder: false,
    name: 'Test Doc.docx',
    hasChildren: false,
    lastModified: '2012-11-08T14:04:02+00:00',
    lastModifiedBy: 'Andy Ilyth',
    fileSize: 2062,
    mimeType:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/Doc.aspx?sourcedoc=%7BBF803307-9EAD-4D1A-8258-C7B35D42C961%7D&file=Test%20Doc.docx&action=default&mobileredirect=true',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=bf803307-9ead-4d1a-8258-c7b35d42c961&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1Mzc4ODkyIiwiZXhwIjoiMTU3NTM4MjQ5MiIsImVuZHBvaW50dXJsIjoiNFZucnJZdkNpd2h0Z2xSRm5MWExXOEFPdkl2MFJ4Und0RXZ0SFBUb1NLMD0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiTjJJek9ETXlPRGd0WVRWbVlTMDBObU5qTFdGaU5XVXRPRGN5WmpBd1pETXpOREEwIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.Q0VuZzh6bjdseXNrSWhVY2VaTngzRno4eFZFV0xQb2FuYlpBMzhRcEtJTT0&ApiVersion=2.0',
  },
];

const l2B = [
  {
    id: '01X46GPZB4JCF6POCE4RB36HZW7YPTK2OK',
    parentId: '01X46GPZHFS7W4EAIUQZFITDFEZO53MAGL',
    isFolder: false,
    name: 'Jotun_History_09_short_WMV9_Widescreen_6_aos_c8d8a862.mp4',
    hasChildren: false,
    lastModified: '2019-11-12T15:24:38+00:00',
    lastModifiedBy: 'Andy Jlyth',
    fileSize: 12257805,
    mimeType: 'video/mp4',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Protective/Jotun_History_09_short_WMV9_Widescreen_6_aos_c8d8a862.mp4',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=e78b483c-44b8-43e4-bf1f-36fe1f3569ca&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1Mzg4NDcxIiwiZXhwIjoiMTU3NTM5MjA3MSIsImVuZHBvaW50dXJsIjoiOU15RWxOeXp6aGp2ZVJqd21WR3dMdE54anVzbjNlR1VXalFjQWp3ajJYdz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiTmpjNE5ERXhPVFF0TW1VNE1pMDBaRGM0TFRnM05qa3RNMkZoWVRrM09URXpNR0ZoIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.eVpWSGV0SkFhUE1mUnJ6ZDJHRUJYbG90TkNoV3NobTBEOGZ5K2V2Mnowbz0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZCBKBJZIQRQ45HZVALCJPFPFXI7',
    parentId: '01X46GPZHFS7W4EAIUQZFITDFEZO53MAGL',
    isFolder: false,
    name: 'Jotun_std_110_PMS.png',
    hasChildren: false,
    lastModified: '2019-11-12T15:24:43+00:00',
    lastModifiedBy: 'Andy Klyth',
    fileSize: 10210,
    mimeType: 'image/png',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Protective/Jotun_std_110_PMS.png',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=94535041-3042-4fe7-9a81-624bcaf2dd1f&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1Mzg4NDcxIiwiZXhwIjoiMTU3NTM5MjA3MSIsImVuZHBvaW50dXJsIjoiSzFzclN2cDVXZzZHZjA2OTVTdkxOaEhyUDA4c3VHNXVoYjZ3cVdwTDdzZz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiTmpjNE5ERXhPVFF0TW1VNE1pMDBaRGM0TFRnM05qa3RNMkZoWVRrM09URXpNR0ZoIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.eDIvZ2lLRno0K1hXNmlJQitNT0RqZDNJZ254U3lsQWQ1THpJVjNDc2VuST0&ApiVersion=2.0',
  },
];

const l3A = [
  {
    id: '01X46GPZAFKRAU7UXHXFE2BGLWHAJNVOE3',
    parentId: '01X46GPZDZK2Y2BJW355DJZRFQSP64LSVW',
    isFolder: false,
    name: 'Client Uploads: Japanese Katana Wallpaper HD For Desktop Of katana Sword 1.jpg',
    hasChildren: false,
    lastModified: '2024-11-13T11:11:10+00:00',
    lastModifiedBy: 'Andy Llyth',
    fileSize: 177850,
    mimeType: 'image/jpeg',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/Client%20Uploads/Japanese%20Katana%20Wallpaper%20HD%20For%20Desktop%20Of%20katana%20Sword%201.jpg',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=4f415405-e7d2-49b9-a099-763812dab89b&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NDk4IiwiZXhwIjoiMTU3NTQ1MDA5OCIsImVuZHBvaW50dXJsIjoidmU1aThPZG9mcENubkZwNTFxSFUzNko4TkNVWExUOWRFam5NUW9zeTIraz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiWVdWak9UVXpNbUl0WkdReVppMDBOVE15TFRrNE1qVXRZV1JqTXpoaE1HSmxZV0l3IiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.YkdlKzNWeDJoTWU3MVJhQ1IzYjRPYnlQR3ArTVVaaFkzaHJYRmc5cWlCZz0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZHQMBZ6OYUDHJG3EKPEGVYCVGFU',
    parentId: '01X46GPZDZK2Y2BJW355DJZRFQSP64LSVW',
    isFolder: false,
    name: 'Client Uploads: Japanese Katana Wallpaper HD For Desktop Of katana Sword 2.jpg',
    hasChildren: false,
    lastModified: '2023-11-13T11:11:10+00:00',
    lastModifiedBy: 'Andy Myth',
    fileSize: 177850,
    mimeType: 'image/jpeg',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/Client%20Uploads/Japanese%20Katana%20Wallpaper%20HD%20For%20Desktop%20Of%20katana%20Sword%202.jpg',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=e77360f0-8362-4d3a-b229-e435702a98b4&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NDk4IiwiZXhwIjoiMTU3NTQ1MDA5OCIsImVuZHBvaW50dXJsIjoidHlIWkhQVEU2UHV4UUhBZTEya081eHMvNVp3TmRRVlAydEdGZ1ZGY1JOOD0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiWVdWak9UVXpNbUl0WkdReVppMDBOVE15TFRrNE1qVXRZV1JqTXpoaE1HSmxZV0l3IiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.MlBOTTRFWHNIYnBiUXFkVWpRZXZNMFJQZFduRFQxTC8rUU4xTTlHbjluST0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZHKXLTDEGYMFVG2YAMAIYRUX2A5',
    parentId: '01X46GPZDZK2Y2BJW355DJZRFQSP64LSVW',
    isFolder: false,
    name: 'Client Uploads: Japanese Katana Wallpaper HD For Desktop Of katana Sword.jpg',
    hasChildren: false,
    lastModified: '2022-11-13T11:11:10+00:00',
    lastModifiedBy: 'Andy Nyth',
    fileSize: 177850,
    mimeType: 'image/jpeg',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/Client%20Uploads/Japanese%20Katana%20Wallpaper%20HD%20For%20Desktop%20Of%20katana%20Sword.jpg',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=32e6baea-0c1b-4d2d-ac01-8046234be81d&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NDk4IiwiZXhwIjoiMTU3NTQ1MDA5OCIsImVuZHBvaW50dXJsIjoiQlpxZDNqQSs2cmFkM3NiZC92TU82VkdHVUI2UHJrUXdhL3NXTnpZODRQST0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiWVdWak9UVXpNbUl0WkdReVppMDBOVE15TFRrNE1qVXRZV1JqTXpoaE1HSmxZV0l3IiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.MlV6M1gva3U4cE1FNm1rRVFodmpiMDhjdzhndzBxdzUxakFublk5SUJKQT0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZH4C2I7MOOPOJCK4MAXMEL2OPCI',
    parentId: '01X46GPZDZK2Y2BJW355DJZRFQSP64LSVW',
    isFolder: false,
    name: 'Client Uploads: Text Session Doc 1.txt',
    hasChildren: false,
    lastModified: '2019-07-12T16:24:13+00:00',
    lastModifiedBy: 'Andy Olyth',
    fileSize: 23,
    mimeType: 'text/plain',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/Client%20Uploads/Text%20Session%20Doc%201.txt',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=f69116fc-cf39-4472-ae30-176117a73c48&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NDk4IiwiZXhwIjoiMTU3NTQ1MDA5OCIsImVuZHBvaW50dXJsIjoiKytyNUo5Qjg2ejRJVnpJciswczhOY3RJaU1MVzZTbTRKV1BTSXA3bEpJOD0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiWVdWak9UVXpNbUl0WkdReVppMDBOVE15TFRrNE1qVXRZV1JqTXpoaE1HSmxZV0l3IiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.WEdNdmVWODAvM1YwWlQvNC9TU3Bua2NqSVdGdHlKN0RWZ2tlTTZ3eHJqcz0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZADHI3BNFONORFYZTGUJIWH5EMX',
    parentId: '01X46GPZDZK2Y2BJW355DJZRFQSP64LSVW',
    isFolder: false,
    name: 'Client Uploads: Text Session Doc 2.txt',
    hasChildren: false,
    lastModified: '2019-01-12T16:26:03+00:00',
    lastModifiedBy: 'Andy Plyth',
    fileSize: 23,
    mimeType: 'text/plain',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/Client%20Uploads/Text%20Session%20Doc%202.txt',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=16363a03-cd95-4b74-8ccc-d44a2c7e9197&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NDk4IiwiZXhwIjoiMTU3NTQ1MDA5OCIsImVuZHBvaW50dXJsIjoidUJBSXRRMENwWGs2bUtHVXJScFRsV0hEZG9NM1FZRzhaSkxCRm50d1Q2ND0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiWVdWak9UVXpNbUl0WkdReVppMDBOVE15TFRrNE1qVXRZV1JqTXpoaE1HSmxZV0l3IiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.b3I3TUFxRXZOQnFsbEZLZHlyTjkva1lGbi9jbUtRRUhJSndIR2xJS2FtZz0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZFMZJOMTBYM4BDYYJAEG6QVQNJM',
    parentId: '01X46GPZDZK2Y2BJW355DJZRFQSP64LSVW',
    isFolder: false,
    name: 'Client Uploads: Text Session Doc.txt',
    hasChildren: false,
    lastModified: '2019-11-21T16:23:43+00:00',
    lastModifiedBy: 'Andy Qlyth',
    fileSize: 23,
    mimeType: 'text/plain',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/Client%20Uploads/Text%20Session%20Doc.txt',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=c95ccaac-0c87-47e0-8c24-0437a158352c&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NDk4IiwiZXhwIjoiMTU3NTQ1MDA5OCIsImVuZHBvaW50dXJsIjoibFd6NG1lbEkxbFc0NFgzL0thMVgrbysweXhGK2VIUER0eUYza0M0SC9DTT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiWVdWak9UVXpNbUl0WkdReVppMDBOVE15TFRrNE1qVXRZV1JqTXpoaE1HSmxZV0l3IiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.SGtsUUUweTM0ekFSVUVYVzErMHpZbUllOHBjbFRkQ2ZNOGl2cDVreVh1Zz0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZGVOHZMXTKZ5JCZI44PB575WMEY',
    parentId: '01X46GPZDZK2Y2BJW355DJZRFQSP64LSVW',
    isFolder: false,
    name: 'tron_tonfas_by_jackbryanreynard-d52r2bi 1.png',
    hasChildren: false,
    lastModified: '2019-11-13T11:11:19+00:00',
    lastModifiedBy: 'Andy Ryth',
    fileSize: 180092,
    mimeType: 'image/png',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/Client%20Uploads/tron_tonfas_by_jackbryanreynard-d52r2bi%201.png',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=cbf271d5-59cd-45ea-9473-8f0f7fdb3098&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NDk4IiwiZXhwIjoiMTU3NTQ1MDA5OCIsImVuZHBvaW50dXJsIjoiSU42RDVBRkVOU0hsRjhYKzdBSkpMYkJ3UncrQWRMUW1vd1NZejJoc2tHUT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiWVdWak9UVXpNbUl0WkdReVppMDBOVE15TFRrNE1qVXRZV1JqTXpoaE1HSmxZV0l3IiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.OXA0WTUyeEkyOS9PSm9JdkRxOXRKNjVuVkRvckhLUENXMVhpOFptVFVJOD0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZE7LOR7O2MMGNB37N3WMP5DOTB3',
    parentId: '01X46GPZDZK2Y2BJW355DJZRFQSP64LSVW',
    isFolder: false,
    name: 'tron_tonfas_by_jackbryanreynard-d52r2bi 2.png',
    hasChildren: false,
    lastModified: '2019-11-14T12:03:13+00:00',
    lastModifiedBy: 'Andy Slyth',
    fileSize: 180092,
    mimeType: 'image/png',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/Client%20Uploads/tron_tonfas_by_jackbryanreynard-d52r2bi%202.png',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=f7a35b9f-8c69-4333-bfb7-7663fa374c3b&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NDk4IiwiZXhwIjoiMTU3NTQ1MDA5OCIsImVuZHBvaW50dXJsIjoiaFdOSnpzSUZTUXArdHBPMjltdzV4TDJuL2ppQ1pVNjVwL0tKVFhvYmdNMD0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiWVdWak9UVXpNbUl0WkdReVppMDBOVE15TFRrNE1qVXRZV1JqTXpoaE1HSmxZV0l3IiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.TFNBZVA0SE90cFYvMWZFMDQzdk91N0dyMkMxRmJqUUcrTWxpcUhWM1NCYz0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZE2GXIHVWZJRVEIBQRCJZPWGC63',
    parentId: '01X46GPZDZK2Y2BJW355DJZRFQSP64LSVW',
    isFolder: false,
    name: 'tron_tonfas_by_jackbryanreynard-d52r2bi.png',
    hasChildren: false,
    lastModified: '2019-11-13T11:10:47+00:00',
    lastModifiedBy: 'Andy Tlyth',
    fileSize: 180092,
    mimeType: 'image/png',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/Client%20Uploads/tron_tonfas_by_jackbryanreynard-d52r2bi.png',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=7ad0359a-29db-488d-80c2-224e5f630bdb&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NDk4IiwiZXhwIjoiMTU3NTQ1MDA5OCIsImVuZHBvaW50dXJsIjoiSk5SWll6S2JUbjBqKzM0K21WQmMzcEJtekZzUUdnZWVielR1R01yNWlSQT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiWVdWak9UVXpNbUl0WkdReVppMDBOVE15TFRrNE1qVXRZV1JqTXpoaE1HSmxZV0l3IiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.UkxDSzczcitIdlp4SUJJa3RQcisvSit6MElMaFIxK1dQZ3d0aFNlZVkzWT0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZHYCFGAYKHN2BAKPZQB4UHNBG4C',
    parentId: '01X46GPZDZK2Y2BJW355DJZRFQSP64LSVW',
    isFolder: false,
    name: 'v1.json',
    hasChildren: false,
    lastModified: '2019-11-12T15:15:28+00:00',
    lastModifiedBy: 'Andy Ulyth',
    fileSize: 10073,
    mimeType: 'application/json',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/Client%20Uploads/v1.json',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=0c4c11f8-ed28-40d0-a7e6-01e50ed09b82&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NDk4IiwiZXhwIjoiMTU3NTQ1MDA5OCIsImVuZHBvaW50dXJsIjoiWk44Q1JITERobWFKVnAwVEdUYVQ0ODYya0JGdVVSY1BncnB4NjNneDVBND0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiWVdWak9UVXpNbUl0WkdReVppMDBOVE15TFRrNE1qVXRZV1JqTXpoaE1HSmxZV0l3IiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.NzArM3FMbmVUclNDWVlUZzJDMGREWEJTdnpXdnAzTENsYTc3ZEI1UjNmYz0&ApiVersion=2.0',
  },
];

const l3B = [
  {
    id: '01X46GPZHCF43LIQW3MNF3F3WEIQHGO5F6',
    parentId: '01X46GPZF3R75QEB6VQJBJRXDHOEBCQJXA',
    isFolder: true,
    name: 'ewewew',
    hasChildren: false,
    lastModified: '2019-11-12T10:38:33+00:00',
    lastModifiedBy: 'Andy Vlyth',
    fileSize: 275723,
    mimeType: null,
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/fefew/ewewew',
    downloadUrl: null,
  },
  {
    id: '01X46GPZGRE2A44ZMNJBBYAXHYRUBIR7T5',
    parentId: '01X46GPZF3R75QEB6VQJBJRXDHOEBCQJXA',
    isFolder: false,
    name: 'android-chrome-192x192.png',
    hasChildren: false,
    lastModified: '2019-11-12T10:40:29+00:00',
    lastModifiedBy: 'Andy Wlyth',
    fileSize: 11193,
    mimeType: 'image/png',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/fefew/android-chrome-192x192.png',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=ce8126d1-8d65-4348-805c-f88d0288fe7d&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NTYyIiwiZXhwIjoiMTU3NTQ1MDE2MiIsImVuZHBvaW50dXJsIjoiSjVCaDNXeDZrdk9FZkRkanRiaTNJbEgwNEV1RE8rVXh6dzBzK0tJczBZbz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiTkRVellqRmlZelV0TlRnNVlpMDBNelk0TFdJM05UY3RZekptTVdJeFpXSXlZamRrIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.aXV2alRocFRpTjJVWFNYZFBncFUzZHFYM2dlSlI0WUZYUVZTR3I2UmlKST0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZGBRFOXD6CH6JE34SOP6MMPMYZP',
    parentId: '01X46GPZF3R75QEB6VQJBJRXDHOEBCQJXA',
    isFolder: false,
    name: 'android-chrome-256x256.png',
    hasChildren: false,
    lastModified: '2019-11-12T10:40:29+00:00',
    lastModifiedBy: 'Andy Xlyth',
    fileSize: 15385,
    mimeType: 'image/png',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/fefew/android-chrome-256x256.png',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=715d89c1-47f8-49f2-be49-cff318f6632f&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NTYyIiwiZXhwIjoiMTU3NTQ1MDE2MiIsImVuZHBvaW50dXJsIjoiSkViK0llZ1k0c3NDaHl2UGRoZVJHaUVzVmlWRHh2c3lmNGFJb0llK0JlVT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiTkRVellqRmlZelV0TlRnNVlpMDBNelk0TFdJM05UY3RZekptTVdJeFpXSXlZamRrIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.VVNwRDRrUlRNOGdxTEhvcWVJVkdRN3V1THpCdWd5YXpDZ2N0RisrRUc3RT0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZFWFC3VFAWMSFHLI4F75EYFPS36',
    parentId: '01X46GPZF3R75QEB6VQJBJRXDHOEBCQJXA',
    isFolder: false,
    name: 'apple-touch-icon.png',
    hasChildren: false,
    lastModified: '2019-11-12T10:40:28+00:00',
    lastModifiedBy: 'Andy Ylyth',
    fileSize: 10377,
    mimeType: 'image/png',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/fefew/apple-touch-icon.png',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=52b728b6-cc82-4e91-b470-bfe93057cb7e&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NTYyIiwiZXhwIjoiMTU3NTQ1MDE2MiIsImVuZHBvaW50dXJsIjoiL2k1dG56L0JSamcrWU4zUThRTEpoUVVRdnBqRTdNQUg0Yit6LzE5VS9Hdz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiTkRVellqRmlZelV0TlRnNVlpMDBNelk0TFdJM05UY3RZekptTVdJeFpXSXlZamRrIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.UWlHY2x4MjZBeE5MT2tneGhnRFptUDkxOUFxVGZWekdrdUZtTWljdndmTT0&ApiVersion=2.0',
  },
];

const l4A = [
  {
    id: '01X46GPZAFR6US43QI2NHZ5TSX4AFNQ3CU',
    parentId: '01X46GPZHCF43LIQW3MNF3F3WEIQHGO5F6',
    isFolder: true,
    name: 'Testing',
    hasChildren: false,
    lastModified: '2019-11-12T10:38:45+00:00',
    lastModifiedBy: 'Andy Zlyth',
    fileSize: 137884,
    mimeType: null,
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/fefew/ewewew/Testing',
    downloadUrl: null,
  },
  {
    id: '01X46GPZCJKLJNYTHHHRH3MR6AIYLZVQR4',
    parentId: '01X46GPZHCF43LIQW3MNF3F3WEIQHGO5F6',
    isFolder: false,
    name: 'footer-pattern_x1.png',
    hasChildren: false,
    lastModified: '2019-11-12T10:40:16+00:00',
    lastModifiedBy: 'Andy Balyth',
    fileSize: 34506,
    mimeType: 'image/png',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/fefew/ewewew/footer-pattern_x1.png',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=dcd25249-e74c-4f3c-b647-c046179ac23c&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NjExIiwiZXhwIjoiMTU3NTQ1MDIxMSIsImVuZHBvaW50dXJsIjoiT3F4amR5a0xOR29CalR3YlZkNEdlTVhCNmZKU2sxSVVRMmh1UVZNZHVYUT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiWkdSallqTTFZVEF0TkRFM01TMDBNems1TFRneVpEQXROVE5oWmpWa056RTNNbU01IiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.QzVuQnFMdVB0U3hhR3E0NVh5LzVQU3VDM2VSUHMxQytqdVo3Ni95WW9rUT0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZHIJKMKO7VF7VHYV4QYSFJM5DD7',
    parentId: '01X46GPZHCF43LIQW3MNF3F3WEIQHGO5F6',
    isFolder: false,
    name: 'footer-pattern_x2.png',
    hasChildren: false,
    lastModified: '2019-11-12T10:40:14+00:00',
    lastModifiedBy: 'Andy Belyth',
    fileSize: 93776,
    mimeType: 'image/png',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/fefew/ewewew/footer-pattern_x2.png',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=a7984ae8-a57e-4ffd-8af2-189152ce8c7f&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NjExIiwiZXhwIjoiMTU3NTQ1MDIxMSIsImVuZHBvaW50dXJsIjoiOVBhcWIyVzB3MGJISnpQd1hJNkZUZCtzYXpLWHhTRVBRSHdBSVF4akR3UT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiWkdSallqTTFZVEF0TkRFM01TMDBNems1TFRneVpEQXROVE5oWmpWa056RTNNbU01IiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.bXM2Mll6YzJaKzkwUHQ5OCtHYzlsb25VNkdNVzBFODFEdWtnRXhtM0oyVT0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZC6FK4GEHKSYJAJAQFARN7LSEPQ',
    parentId: '01X46GPZHCF43LIQW3MNF3F3WEIQHGO5F6',
    isFolder: false,
    name: 'logo.svg',
    hasChildren: false,
    lastModified: '2019-11-12T10:40:14+00:00',
    lastModifiedBy: 'Andy Bilyth',
    fileSize: 9557,
    mimeType: 'application/octet-stream',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/fefew/ewewew/logo.svg',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=62b82a5e-521d-40c2-9040-a08b7eb911f0&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NjExIiwiZXhwIjoiMTU3NTQ1MDIxMSIsImVuZHBvaW50dXJsIjoiZVVtMFE5R3k2bXd2V043dTlTbzdMK1JFREFqZER0NG1lZ2s0OFEranB1MD0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiWkdSallqTTFZVEF0TkRFM01TMDBNems1TFRneVpEQXROVE5oWmpWa056RTNNbU01IiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.OFl0SmtGcCtCL1lzWWhNU3R5NHl0RVhrUlVNUHVGMVp6NEhhYVBYMTBmST0&ApiVersion=2.0',
  },
];

const l5A = [
  {
    id: '01X46GPZDYILK724MFEVDIMQVZY45OYY2X',
    parentId: '01X46GPZAFR6US43QI2NHZ5TSX4AFNQ3CU',
    isFolder: false,
    name: 'footer-pattern_x1.png',
    hasChildren: false,
    lastModified: '2019-11-12T10:40:01+00:00',
    lastModifiedBy: 'Andy Bolyth',
    fileSize: 34506,
    mimeType: 'image/png',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/fefew/ewewew/Testing/footer-pattern_x1.png',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=fdd54278-8571-4625-8642-b9c73aec6357&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NjU5IiwiZXhwIjoiMTU3NTQ1MDI1OSIsImVuZHBvaW50dXJsIjoiRWtPdGd4QzhjWm9hVVZVUVpoTnFsK2lNbXA2dlBYb1o4Sk44QWRYOTNBMD0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiTmpnME5XWmhZelF0TmpoaE1TMDBNV1JtTFRsak0yWXRNamcyTmpCaVlUSTBOMk5pIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.ZnN5Tm1zbkRsU3VmTUJxKzljUkJZcmp6TStKZ3hGdVlpTDQ4RWRYcTM2Zz0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZBMASRLG34E5ZHKKMMT34YHGODN',
    parentId: '01X46GPZAFR6US43QI2NHZ5TSX4AFNQ3CU',
    isFolder: false,
    name: 'footer-pattern_x2.png',
    hasChildren: false,
    lastModified: '2019-11-12T10:39:58+00:00',
    lastModifiedBy: 'Andy Bulyth',
    fileSize: 93776,
    mimeType: 'image/png',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/fefew/ewewew/Testing/footer-pattern_x2.png',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=b3a2042c-846f-4eee-a531-93df3073386d&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NjU5IiwiZXhwIjoiMTU3NTQ1MDI1OSIsImVuZHBvaW50dXJsIjoiSk9zMHA1YnJkcGVCcGFsb1BOeERndnNLMDlMdnc1dWhDVFFrdTI3WXFQOD0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiTmpnME5XWmhZelF0TmpoaE1TMDBNV1JtTFRsak0yWXRNamcyTmpCaVlUSTBOMk5pIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.a2JwdlY3RkZ0cDZGNDNBRlNDbUxSakYwVU1BbDVIMnhSUytPU0k1UUNjST0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZFFNVVJJQNPPFHZXGRE6VZW3EYH',
    parentId: '01X46GPZAFR6US43QI2NHZ5TSX4AFNQ3CU',
    isFolder: false,
    name: 'logo.svg',
    hasChildren: false,
    lastModified: '2019-11-12T10:39:59+00:00',
    lastModifiedBy: 'Andy Bylyth',
    fileSize: 9557,
    mimeType: 'application/octet-stream',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/fefew/ewewew/Testing/logo.svg',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=946a6da5-afc1-4f79-9b9a-24f5736d9307&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NjU5IiwiZXhwIjoiMTU3NTQ1MDI1OSIsImVuZHBvaW50dXJsIjoiVlRVT0JzMW9SaDFocDB0c3hFc1M3RHRCbEpmak0zT1NDMDZzTGd5UUt0OD0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiTmpnME5XWmhZelF0TmpoaE1TMDBNV1JtTFRsak0yWXRNamcyTmpCaVlUSTBOMk5pIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.ck5MbTZheksxZFhMTUFLd0h3cldOcUFEOWE5eHl4NXQ4aTBGUTRXMmtKRT0&ApiVersion=2.0',
  },
  {
    id: '01X46GPZHADQ35XLV6Z5DJIRIJB5GYUPRF',
    parentId: '01X46GPZAFR6US43QI2NHZ5TSX4AFNQ3CU',
    isFolder: false,
    name: 'www.google.com.url',
    hasChildren: false,
    lastModified: '2019-11-12T10:39:05+00:00',
    lastModifiedBy: 'Andy Blyth',
    fileSize: 45,
    mimeType: 'application/octet-stream',
    webUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/Shared%20Documents/Dept/fefew/ewewew/Testing/www.google.com.url',
    downloadUrl:
      'https://jotuncustomerportal.sharepoint.com/sites/CustomerPortal/_layouts/15/download.aspx?UniqueId=db371ce0-beae-46cf-9445-090f4d8a3e25&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvam90dW5jdXN0b21lcnBvcnRhbC5zaGFyZXBvaW50LmNvbUBhMTdjNzQ0MC04NDdkLTRhNjgtYmNkYi0yMGQzZmM1N2FiMjAiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTc1NDQ2NjU5IiwiZXhwIjoiMTU3NTQ1MDI1OSIsImVuZHBvaW50dXJsIjoiMnIxemtrSHdHSFRrKzkzK1IyVE1ZbElvbThhaWJXcjNQVmNCVUNxanVIOD0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiTmpnME5XWmhZelF0TmpoaE1TMDBNV1JtTFRsak0yWXRNamcyTmpCaVlUSTBOMk5pIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlptWXhaakkxWlRJdFlqTmxZUzAwWVRFMExUaGpNekl0WlRJNU9EYzNaV1U0TlRFeiIsImFwcF9kaXNwbGF5bmFtZSI6IkpvdHVuIEN1c3RvbWVyIFBvcnRhbCBBcHAiLCJnaXZlbl9uYW1lIjoiRXhhbXBsZSIsImZhbWlseV9uYW1lIjoiVXNlciIsImFwcGlkIjoiYzliY2ZhOGYtZDFkNC00NDg2LWE0OWQtNTFmZWMzYmU0YzZlIiwidGlkIjoiYTE3Yzc0NDAtODQ3ZC00YTY4LWJjZGItMjBkM2ZjNTdhYjIwIiwidXBuIjoicHJvdGVjdGl2ZWRlYWxlckBqb3R1bmN1c3RvbWVycG9ydGFsLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDc5NEQwRUQzIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA3OTRkMGVkM0BsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIGdyb3VwLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.UWJFaTFDVFFaSlFOWHBOc2l0YzhPV0pEdVRBckwrL2pyM0RROXZYbENFVT0&ApiVersion=2.0',
  },
];

export const mockDocuments: IDocument[] = [
  ...rootFolders,
  ...l2A,
  ...l2B,
  ...l3A,
  ...l3B,
  ...l4A,
  ...l5A,
];
