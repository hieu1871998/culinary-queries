export enum MediaType {
  IMAGE = 1,
  VIDEO
}

export interface Media {
  cdnLarge?: string;
  cdnMedium?: string;
  cdnOrigin?: string;
  cdnSmall?: string;
  contentType: string;
  credit: string;
  external?: boolean;
  filename: string;
  fileUrl?: string;
  guid: string;
  hasLink?: boolean;
  height?: number;
  id: string;
  originalFilename?: string;
  processing?: boolean;
  thumbnail?: Media;
  thumbnailCredit?: string;
  typeOfMedia: MediaType;
  uploadDate: string | number;
  url?: string;
  width?: number;
}

export interface OrderedMedia {
  media: Media;
  order: number;
};
