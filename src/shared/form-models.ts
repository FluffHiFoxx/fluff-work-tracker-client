export type FormErrors = {
	[key: string]: string;
};

export type FormValues = {
	errors?: FormErrors;
};

export type FormValidator<T extends FormValues> = (values: T) => FormErrors;
