import { contextBridge } from "electron";

if (!process.contextIsolated) {
	throw new Error("Context isolation must be enabled in BrowserWindow");
}

try {
	contextBridge.exposeInMainWorld("context", {
		// TODO: implement
	});
} catch (error) {
	console.error(error);
}
