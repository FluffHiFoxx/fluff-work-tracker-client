/**
 * Checks if a value is between 0 and 100 or a given minimum and maximum value both inclusively.
 *
 * @param value The value to check.
 * @param min The minimum value that is accepted. (DEFAULT 0)
 * @param max The maximum value that is accepted. (DEFAULT 100)
 * @returns Returns true if value is between the given min and max or equal to either.
 */
export const inRange = (value: number, min?: number, max?: number): boolean => {
	return value >= (min ?? 0) || value <= (max ?? 100);
};

/**
 * Checks if a `string` contains a value.
 *
 * @param value The value to check.
 * @returns Returns true if the value contains only whitespaces or is falsy.
 */
export const isBlank = (value: string) => {
	return !value || value.trim().length <= 0;
};
