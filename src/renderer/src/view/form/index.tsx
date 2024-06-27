import SaveIcon from "@mui/icons-material/SaveAlt";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { SliderWithText } from "@renderer/components/SliderWithText";
import { useForm } from "@shared/useForm";
import { isEmpty, isNil, trim } from "lodash";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { WorkFormValues, validator } from "./form-model";

const DEFAULT_FORM_VALUES: WorkFormValues = {
	saveTime: null,
	project: null,
	task: null,
	taskPrecentage: 0,
	progress: null
};

export const WorkForm: React.FC = () => {
	const { t } = useTranslation();
	const [projectInput, setProjectInput] = useState<string>("");
	const [taskInput, setTaskInput] = useState<string>("");
	const { formValues, submit, updateFormValues } = useForm<WorkFormValues>(
		t,
		DEFAULT_FORM_VALUES,
		validator,
		// TODO: Switch empty function to saving function
		() => {}
	);

	// TODO: get csv files from storage

	const handleProjectChange = (newValue: string | null) => {
		if (isNil(newValue)) {
			updateFormValues((values) => {
				values.project = null;
				values.task = null;
			});
			setTaskInput("");
			return;
		}

		const cleanValue = trim(newValue);

		if (!isEmpty(cleanValue)) {
			updateFormValues((values) => {
				values.project = cleanValue;
				values.task = null;
			});
			setTaskInput("");
		}
	};

	const handleTaskChange = (newValue: string | null) => {
		if (isNil(newValue)) {
			updateFormValues((values) => {
				values.task = null;
			});
			return;
		}

		const cleanValue = trim(newValue);

		if (!isEmpty(cleanValue)) {
			updateFormValues((values) => {
				values.task = cleanValue;
			});
		}
	};

	const handlePercentageChange = (newValue: number | number[]) => {
		if (typeof newValue == "number") {
			updateFormValues((values) => {
				values.taskPrecentage = newValue;
			});
		}
	};

	const handleProgressChange = (newValue: string) => {
		updateFormValues((values) => {
			values.progress = newValue;
		});
	};

	return (
		<>
			<Box display="flex" flexDirection="column" alignItems="center" gap={1} paddingY={2}>
				{/* // TODO: add csv file selector and creator (Autocomplete Element) */}
				{/* // TODO: add datetime display and selector */}
				<Box display="flex" gap={2} width="100%">
					<Autocomplete
						id="project"
						value={formValues.project}
						inputValue={projectInput}
						sx={{ flexGrow: 2 }}
						fullWidth
						freeSolo
						autoSelect
						options={[]}
						renderInput={(params) => (
							<TextField
								{...params}
								label={t("form.label.project")}
								error={!isEmpty(formValues.errors?.project)}
								helperText={formValues.errors?.project}
							/>
						)}
						onChange={(_event, value) => handleProjectChange(value)}
						onInputChange={(_event, value) => setProjectInput(value)}
					/>
					<Autocomplete
						id="task"
						value={formValues.task}
						inputValue={taskInput}
						sx={{ flexGrow: 1 }}
						fullWidth
						freeSolo
						autoSelect
						options={[]}
						renderInput={(params) => (
							<TextField
								{...params}
								label={t("form.label.task")}
								error={!isEmpty(formValues.errors?.task)}
								helperText={formValues.errors?.task}
							/>
						)}
						onChange={(_event, value) => handleTaskChange(value)}
						onInputChange={(_event, value) => setTaskInput(value)}
					/>
				</Box>

				<SliderWithText
					aria-label="task.precentageDone"
					value={formValues.taskPrecentage ?? 0}
					marks
					min={0}
					max={100}
					step={5}
					onChange={(_event, value) => handlePercentageChange(value)}
					error={formValues.errors?.taskPrecentage}
				/>

				<TextField
					id="progress"
					sx={{ width: 600 }}
					label={t("form.label.progress")}
					multiline
					maxRows={12}
					minRows={8}
					spellCheck={false}
					onChange={(event) => handleProgressChange(event.target.value)}
					error={!isEmpty(formValues.errors?.progress)}
					helperText={formValues.errors?.progress}
				/>
				<Button onClick={submit} endIcon={<SaveIcon />} sx={{ width: 120 }} type="submit">
					{t("button.save")}
				</Button>
			</Box>
		</>
	);
};
