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
	project: string;
	task: string;
	taskPrecentage: number;
	progress: string;
};
