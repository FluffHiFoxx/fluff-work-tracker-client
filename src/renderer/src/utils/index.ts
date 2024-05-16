import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const classes = (...args: ClassValue[]): string => {
	return twMerge(clsx(...args));
};
