import { Nullish, inRange } from "@renderer/utils";
import { FormErrors, FormValidator, FormValues } from "@shared/useForm/form-types";
import { WorkProgressValues } from "@shared/work-types";
import { TFunction } from "i18next";
import { isNil } from "lodash";

export type WorkFormValues = FormValues & Nullish<WorkProgressValues>;

export const validator: FormValidator<WorkFormValues> = (values: WorkFormValues, t: TFunction) => {
	const errors = {} as FormErrors;

	if (isNil(values.project) || values.project?.trim().length <= 0) {
		errors["project"] = t("common.error.fieldEmpty");
	}

	if (isNil(values.task) || values.task?.trim().length <= 0) {
		errors["task"] = t("common.error.fieldEmpty");
	}

	if (isNil(values.taskPrecentage) || !inRange(values.taskPrecentage)) {
		errors["taskPrecentage"] = t("common.error.fieldOutOfBounds");
	}

	if (isNil(values.progress) || values.progress?.trim().length <= 0) {
		errors["progress"] = t("common.error.fieldEmpty");
	}
	return errors;
};
