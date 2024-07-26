export interface IDocument {
  readonly id: string;
  readonly parentId: string | null;
  readonly isFolder: boolean;
  readonly name: string;
  readonly lastModified: string;
  readonly lastModifiedBy: string;
  readonly fileSize: number;
  readonly mimeType?: string | null;
  readonly webUrl?: string | null;
  readonly downloadUrl?: string | null;
  readonly hasChildren: boolean;
}
