import { FormErrors, FormValidator, FormValues } from "@shared/useForm/form-types";
import { Nullish, inRange, isBlank } from "@shared/utils";
import { WorkProgressValues } from "@shared/work-types";
import { TFunction } from "i18next";
import { isNil } from "lodash";

export type WorkFormValues = FormValues & Nullish<WorkProgressValues>;

export const validator: FormValidator<WorkFormValues> = (values: WorkFormValues, t: TFunction) => {
	const errors = {} as FormErrors;

	if (isNil(values.project) || isBlank(values.project)) {
		errors["project"] = t("common.error.fieldEmpty");
	}

	if (isNil(values.task) || isBlank(values.task)) {
		errors["task"] = t("common.error.fieldEmpty");
	}

	if (isNil(values.taskPrecentage) || !inRange(values.taskPrecentage)) {
		errors["taskPrecentage"] = t("common.error.fieldOutOfBounds");
	}

	if (isNil(values.progress) || isBlank(values.progress)) {
		errors["progress"] = t("common.error.fieldEmpty");
	}
	return errors;
};
