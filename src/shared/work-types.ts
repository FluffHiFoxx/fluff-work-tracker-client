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
	project: string | null;
	task: string | null;
	taskPrecentage: number;
	progress: string | null;
};
