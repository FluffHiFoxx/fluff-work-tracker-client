import { TFunction } from "i18next";
import { isEmpty } from "lodash";
import { useImmer } from "use-immer";
import { FormErrors, FormValidator, FormValues } from "./form-types";

export const useForm = <TFormValues extends FormValues>(
	t: TFunction,
	values: TFormValues,
	validator: FormValidator<TFormValues>,
	onSubmit: (values: TFormValues) => void
) => {
	const [errors, updateErrors] = useImmer<FormErrors>({});
	const submit = () => {
		updateErrors(() => validator(values, t));

		if (isEmpty(errors)) {
			onSubmit;
		}
	};

	return { errors, submit };
};
