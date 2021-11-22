/**
 * For [...dynamic] slugs, the all key values are string arrays.
 */
export type NextSlugEndpointArgs<T> = {
  readonly [key in keyof T]: string[] | T[key];
};
/**
 * NextJS handlers provide all args from the query string, which means the keys
 * remain but given as strings.
 */
export type NextEndpointArgs<T> = {
  readonly [key in keyof T]: string | T[key];
};
/**
 * A handler function which accepts the same arguments as the underlying
 * function.
 */
export type NextEndpoint<T = Record<string,any>> =
  (args: NextEndpointArgs<T>) => unknown | Promise<unknown>;