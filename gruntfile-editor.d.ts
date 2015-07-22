declare module 'gruntfile-editor' {
	interface IGruntfileEditor {
		insertConfig(name: string, config: string): IGruntfileEditor;
		loadNpmTasks(pluginName: string): IGruntfileEditor;
		registerTask(name: string, tasks: string[], options: any): IGruntfileEditor;
		insertVariable(): IGruntfileEditor;
	}
}
