export class Utils {
  static flattenQueryParams(queryParams: object): string {
    return Object.keys(queryParams || {})
      .sort()
      .map((k) => `${Utils.encodeURIComponent(k)}=${Utils.encodeURIComponent(queryParams[k])}`)
      .join('&');
  }

  static encodeURIComponent(str: string): string {
    return encodeURIComponent(str);
  }
}
