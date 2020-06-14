export type FileUploadTypes = {
  onUploadFile(event: React.FormEvent<HTMLInputElement>): void;
  name: string;
  size: number;
  type: string;
};
