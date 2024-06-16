import { TFunction } from "i18next";

export type FormErrors = {
	[key: string]: string;
};

export type FormValues = {
	errors?: FormErrors;
};

export type FormValidator<TFormValues extends FormValues> = (
	values: TFormValues,
	t: TFunction
) => FormErrors;
