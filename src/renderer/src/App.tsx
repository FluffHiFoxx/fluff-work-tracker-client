import { Box, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import { Form } from "./view/form";

const App = (): JSX.Element => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			height="100%"
			margin="auto"
			alignItems="center"
			justifyContent="center"
			gap={2}
		>
			<Typography color={purple[800]} variant="h2">
				Welcome to Fluff Work tracker
			</Typography>
			<Form />
		</Box>
	);
};

export default App;
