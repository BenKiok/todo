const task = (taskTitle = `Untitled`, taskDate = '05/20/20') => {
	let title = taskTitle;
	let date = taskDate;

	return { title, date }
}

const project = (projectName = 'default') => {
	let name = projectName;
	let tasks = [];

	const addTask = task => {
		tasks.push(task);
	}

	const removeTask = task => {
		tasks.pop(task);
	}
	return { name, tasks, addTask, removeTask };
}

export { task, project };