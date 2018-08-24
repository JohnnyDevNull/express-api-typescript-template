export interface BaseRestModel {
  meta: {
    code: any;
    message?: any;
    count?: number;
    hasMore?: boolean;
    limit?: number;
    offset?: number;
  };
  data?: any;
}
