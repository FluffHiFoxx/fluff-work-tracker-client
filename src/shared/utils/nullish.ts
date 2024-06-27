/**
 * Turns fields to be able to contain `null` values,
 * besides the original defined by the given type.
 */
export type Nullish<T> = { [P in keyof T]: T[P] | null };
