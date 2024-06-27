export type Project = {
	ownerId: number;
	ownerName: string;
	id: number;
	name: string;
};

export type Task = {
	projectId: number;
	id: number;
	name: string;
	precentageDone: number;
};

export type WorkProgressValues = {
	saveTime: string; // TODO: replace with proper date time type
	project: string;
	task: string;
	taskPrecentage: number;
	progress: string;
};
