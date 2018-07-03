export interface BaseRestModel {
  meta: {
    count?: number;
    hasMore?: boolean;
  };
  code: any;
  data?: any;
  message?: any;
}
