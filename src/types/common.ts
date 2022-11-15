export interface TaggingItem {
  name: string;
  label: string;
  sort: number;
  value: string[];
  targets: unknown[];
}
export interface BaseListRequest {
  admin?: boolean;
  active?: boolean;
  schedule?: number;
  orderBy?: string;
  orderDirection?: string;
  contentTypes?: string;
  pageSize?: number;
  pageIndex?: number;
  keyword?: string;
  statuses?: string;
  feature?: boolean;
  seoStatus?: number;
}

export interface Rejector {
  displayName: string;
}

export enum RecipeMeasurement {
  IMPERIAL = 'imperial',
  METRIC = 'metric'
}