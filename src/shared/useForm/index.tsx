import { TFunction } from "i18next";
import { isEmpty } from "lodash";
import { useImmer } from "use-immer";
import { FormValidator, FormValues } from "./form-types";

export const useForm = <TFormValues extends FormValues>(
	t: TFunction,
	innitialValues: TFormValues,
	validator: FormValidator<TFormValues>,
	onSubmit: (values: TFormValues) => void
) => {
	const [formValues, updateFormValues] = useImmer<TFormValues>(innitialValues);

	const submit = () => {
		updateFormValues((values) => {
			values.errors = validator(formValues, t);
		});

		if (isEmpty(formValues.errors)) {
			onSubmit;
		}
	};

	return { formValues, submit, updateFormValues };
};
