import SaveIcon from "@mui/icons-material/SaveAlt";
import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Form: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<Box
				component="form"
				display="flex"
				flexDirection="column"
				alignItems="center"
				gap={1}
				paddingY={2}
			>
				<Box display="flex" gap={2} width="100%">
					<Autocomplete
						sx={{ flexGrow: 2 }}
						freeSolo
						fullWidth
						options={[]}
						renderInput={(params) => (
							<TextField
								{...params}
								label={t("form.label.project")}
							/>
						)}
					/>
					<Autocomplete
						sx={{ flexGrow: 1 }}
						freeSolo
						fullWidth
						options={[]}
						renderInput={(params) => (
							<TextField
								{...params}
								label={t("form.label.task")}
							/>
						)}
					/>
				</Box>
				<TextField
					sx={{ width: 600 }}
					label={t("form.label.progress")}
					multiline
					maxRows={8}
					rows={4}
					spellCheck={false}
				/>
				<Button
					disableElevation
					endIcon={<SaveIcon />}
					sx={{ width: 120 }}
				>
					{t("button.save")}
				</Button>
			</Box>
		</>
	);
};
