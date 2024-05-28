import { purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const fluffTheme = createTheme({
	spacing: (factor) => `${0.5 * factor}em`,
	palette: {
		primary: { main: purple[800] }
	},
	components: {
		MuiButton: {
			defaultProps: {
				variant: "contained"
			}
		}
	}
});

export default fluffTheme;
