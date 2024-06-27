import { WorkProgressValues } from "./work-types";

export type ReadCsv = () => Promise<string[]>;

export type WriteCsv = (filename: string, values: WorkProgressValues) => Promise<void>;
