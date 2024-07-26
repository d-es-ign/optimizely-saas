import { IDocument } from './IDocument';

export type IDirectory = Omit<IDocument, 'isFolder'>;
