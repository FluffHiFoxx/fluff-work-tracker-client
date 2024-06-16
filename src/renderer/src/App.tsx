import { Box } from "@mui/material";
import { WorkForm } from "./view/form";

const App = (): JSX.Element => (
	<Box
		display="flex"
		flexDirection="column"
		height="100%"
		margin="auto"
		alignItems="center"
		justifyContent="center"
		gap={2}
	>
		<WorkForm />
	</Box>
);

export default App;
