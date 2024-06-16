import "@renderer/assets/index.css";

import App from "@renderer/App";
import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material";
import LanguageProvider from "./assets/locales";
import theme from "./assets/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<LanguageProvider>
			<ThemeProvider theme={theme}>
				{/* Start: animated background */}
				<div>
					<div className="wave"></div>
					<div className="wave"></div>
					<div className="wave"></div>
				</div>
				{/* End: animated background */}

				<App />
			</ThemeProvider>
		</LanguageProvider>
	</React.StrictMode>
);
