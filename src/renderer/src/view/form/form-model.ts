import { FormValidator, FormValues } from "@shared/form-models";
import { WorkProgressValues } from "@shared/work-models";
import { isEmpty } from "lodash";

export type WorkFormValues = FormValues & WorkProgressValues;

export const validator: FormValidator<WorkFormValues> = (values: WorkFormValues) => {
	const errors = {};

	if (!isEmpty(values.project)) {
		errors["project"] = "";
	}

	if (!isEmpty(values.task)) {
		errors["task"] = "";
	}

	if (0 <= values.taskPrecentage && 100 >= values.taskPrecentage) {
		errors["taskPrecentage"] = "";
	}

	if (!isEmpty(values.progress)) {
		errors["progress"] = "";
	}

	return errors;
};
