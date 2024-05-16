declare global {
	interface Window {
		// electron: ElectronAPI;
		api: unknown; // TODO: change based on exposeInMainWorld
	}
}
