import SaveIcon from "@mui/icons-material/SaveAlt";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Form } from "@renderer/components";
import { isEmpty, isNil, trim } from "lodash";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useImmer } from "use-immer";
import { WorkFormValues, validator } from "./form-model";

const DEFAULT_FORM_VALUES: WorkFormValues = {
	project: null,
	task: null,
	taskPrecentage: 0,
	progress: null
};

export const WorkForm: React.FC = () => {
	const { t } = useTranslation();
	const [values, updateValues] = useImmer<WorkFormValues>(DEFAULT_FORM_VALUES);
	const [projectInput, setProjectInput] = useState<string>("");
	const [taskInput, setTaskInput] = useState<string>("");

	const handleProjectChange = (newValue: string | null) => {
		console.log("Project change", newValue, ", Task values:", values.task);

		if (isNil(newValue)) {
			updateValues((values) => {
				values.project = null;
				values.task = null;
			});
			setTaskInput("");
			return;
		}

		const cleanValue = trim(newValue);

		if (!isEmpty(cleanValue)) {
			updateValues((values) => {
				values.project = cleanValue;
				values.task = null;
			});
			setTaskInput("");
		}
	};

	const handleTaskChange = (newValue: string | null) => {
		console.log("Task change", newValue);

		if (isNil(newValue)) {
			updateValues((values) => {
				values.task = null;
			});
			return;
		}

		const cleanValue = trim(newValue);

		if (!isEmpty(cleanValue)) {
			updateValues((values) => {
				values.task = cleanValue;
			});
		}
	};

	const handlePercentageChange = (newValue: number | number[]) => {
		if (typeof newValue == "number") {
			updateValues((values) => {
				values.taskPrecentage = newValue;
			});
		}
	};

	const handleProgressChange = (newValue: string) => {
		updateValues((values) => {
			values.progress = newValue;
		});
	};

	return (
		// TODO: Switch empty function to saving function
		<Form
			values={values}
			validator={validator}
			onSubmit={function (values: WorkFormValues): {} {
				throw new Error("Function not implemented.");
			}}
		>
			<Box display="flex" flexDirection="column" alignItems="center" gap={1} paddingY={2}>
				<Box display="flex" gap={2} width="100%">
					<Autocomplete
						id="project"
						value={values.project}
						inputValue={projectInput}
						sx={{ flexGrow: 2 }}
						fullWidth
						freeSolo
						autoSelect
						options={[]}
						renderInput={(params) => (
							<TextField {...params} label={t("form.label.project")} />
						)}
						onChange={(_event, value) => handleProjectChange(value)}
						onInputChange={(_event, value) => setProjectInput(value)}
					/>
					<Autocomplete
						id="task"
						value={values.task}
						inputValue={taskInput}
						sx={{ flexGrow: 1 }}
						fullWidth
						freeSolo
						autoSelect
						options={[]}
						renderInput={(params) => (
							<TextField {...params} label={t("form.label.task")} />
						)}
						onChange={(_event, value) => handleTaskChange(value)}
						onInputChange={(_event, value) => setTaskInput(value)}
					/>
				</Box>

				<Box width="100%">
					<Box display="flex" gap={1} alignItems="center">
						<Typography variant="body2">
							{t("form.label.taskProgressPrecentage")}:
						</Typography>
						<Typography variant="body1" id="task.precentageDone" color="primary">
							{values.taskPrecentage ?? t("common.noData")}%
						</Typography>
					</Box>
					<Slider
						aria-label="task.precentageDone"
						value={values.taskPrecentage ?? 0}
						marks
						min={0}
						max={100}
						step={5}
						onChange={(_event, value) => handlePercentageChange(value)}
					/>
				</Box>

				<TextField
					id="progress"
					sx={{ width: 600 }}
					label={t("form.label.progress")}
					multiline
					maxRows={12}
					minRows={8}
					spellCheck={false}
					onChange={(event) => handleProgressChange(event.target.value)}
				/>
				<Button endIcon={<SaveIcon />} sx={{ width: 120 }} type="submit">
					{t("button.save")}
				</Button>
			</Box>
		</Form>
	);
};
