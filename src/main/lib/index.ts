import { settings } from "@shared/settings";
import { isBlank } from "@shared/utils";
import { WorkProgressValues } from "@shared/work-types";
import { stringify } from "csv-stringify";
import { createWriteStream } from "fs";
import { ensureDir, readdir } from "fs-extra";
import { homedir } from "os";
import { join } from "path";

export const getSaveDir = () => {
	const defaultLocation = `${homedir()}/fluffWorkTracker/saves`;

	return isBlank(settings.saveLoaction) ? defaultLocation : settings.saveLoaction;
};

export const getCSVFileNames = async () => {
	const saveDir = getSaveDir();

	await ensureDir(saveDir);

	const csvFileNames = await readdir(saveDir, {
		encoding: settings.encoding
	});

	return csvFileNames.filter((filename) => filename.endsWith(".csv"));
};

export const writeCSV = async (filename: string, values: WorkProgressValues) => {
	const columns = Object.keys(values);
	const stringifier = stringify({ header: true, columns });

	const saveDir = getSaveDir();

	await ensureDir(saveDir);

	const writabelStream = createWriteStream(join(saveDir, filename));

	Object.values(values).forEach((value) => stringifier.write(value));
	return stringifier.pipe(writabelStream);
};
