import { FormErrors, FormValidator, FormValues } from "@shared/useForm/form-types";
import { WorkProgressValues } from "@shared/work-types";
import { TFunction } from "i18next";
import { isEmpty } from "lodash";

export type WorkFormValues = FormValues & WorkProgressValues;

export const validator: FormValidator<WorkFormValues> = (values: WorkFormValues, t: TFunction) => {
	const errors = {} as FormErrors;

	if (!isEmpty(values.project)) {
		errors["project"] = t("common.error.fieldEmpty");
	}

	if (!isEmpty(values.task)) {
		errors["task"] = t("common.error.fieldEmpty");
	}

	if (0 <= values.taskPrecentage && 100 >= values.taskPrecentage) {
		errors["taskPrecentage"] = t("common.error.fieldOutOfBounds");
	}

	if (!isEmpty(values.progress)) {
		errors["progress"] = t("common.error.fieldEmpty");
	}

	return errors;
};
