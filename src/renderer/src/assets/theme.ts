import grey from "@mui/material/colors/grey";
import purple from "@mui/material/colors/purple";
import { createTheme } from "@mui/material/styles";

const fluffTheme = createTheme({
	spacing: (factor) => `${0.5 * factor}em`,
	palette: {
		primary: { main: purple[800] }
	},
	shape: {
		borderRadius: 2
	},
	components: {
		MuiButton: {
			defaultProps: {
				variant: "contained",
				disableElevation: true
			}
		},
		MuiSlider: {
			styleOverrides: {
				root: {
					borderRadius: 6,
					"& .MuiSlider-track": {
						height: 16,
						borderBottomRightRadius: 0,
						borderTopRightRadius: 0
					},
					"& .MuiSlider-rail": {
						borderRadius: 2,
						height: 8
					},
					"& .MuiSlider-mark": {
						height: 8
					},
					"& .MuiSlider-markActive": {
						height: 16
					},
					"& .MuiSlider-thumb": {
						height: 18,
						width: 18,
						backgroundColor: grey[50],
						borderBottomLeftRadius: 6,
						borderTopLeftRadius: 6,
						borderBottomRightRadius: "100%",
						borderTopRightRadius: "100%",
						border: "4px solid currentColor",
						"&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
							boxShadow: "inherit"
						},
						"&::before": {
							display: "none"
						}
					}
				}
			}
		}
	}
});

export default fluffTheme;
