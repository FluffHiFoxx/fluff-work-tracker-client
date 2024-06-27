import { ReadCsv, WriteCsv } from "@shared/csv-handler-types";
import { contextBridge, ipcRenderer } from "electron";

if (!process.contextIsolated) {
	throw new Error("Context isolation must be enabled in BrowserWindow");
}

try {
	contextBridge.exposeInMainWorld("context", {
		getCSVFileNames: (...args: Parameters<ReadCsv>) =>
			ipcRenderer.invoke("getCSVFileNames", ...args),
		writeCSV: (...args: Parameters<WriteCsv>) => ipcRenderer.invoke("getCSVFileNames", ...args)
	});
} catch (error) {
	console.error(error);
}
