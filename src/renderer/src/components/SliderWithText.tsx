import Box from "@mui/material/Box";
import Slider, { SliderProps } from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

type Props = SliderProps & {
	error?: string;
};

export const SliderWithText: React.FC<Props> = ({ error, ...props }) => {
	const { t } = useTranslation();

	return (
		<Box width="100%">
			<Box display="flex" gap={1} alignItems="center">
				<Typography variant="body2">{t("form.label.taskProgressPrecentage")}:</Typography>
				<Typography
					variant="body1"
					id="task.precentageDone"
					color={!error ? "primary" : "error"}
				>
					{props.value ?? t("common.noData")}%
				</Typography>
			</Box>
			<Slider {...props} color={!error ? props.color : "error"} />
			<Typography variant="caption" color="error">
				{error}
			</Typography>
		</Box>
	);
};
