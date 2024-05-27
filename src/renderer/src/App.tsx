import { Form } from "./view/form";

const App = (): JSX.Element => {
	return (
		<div className="flex flex-col gap-3 h-full items-center justify-center">
			<p className="text-4xl text-purple-700">Welcome to Fluff Work tracker</p>
			<Form />
		</div>
	);
};

export default App;
