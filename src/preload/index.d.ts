import { ReadCsv, WriteCsv } from "@shared/csv-handler-types";

declare global {
	interface Window {
		getCSVFileNames: ReadCsv;
		writeCSV: WriteCsv;
	}
}
