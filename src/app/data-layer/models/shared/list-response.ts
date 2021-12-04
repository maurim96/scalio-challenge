export interface ListResponse<T> {
  totalCount: number;
  incompleteResults: boolean;
  items: T[];
}
