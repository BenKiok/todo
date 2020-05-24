const task = (taskTitle = `Untitled`, taskDate, taskDesc) => {
	let title = taskTitle;
	let date = taskDate;
	let description = taskDesc;
	let priority = 'None';

	return { title, date, description, priority };
}

const project = (projectName = 'default') => {
	let name = projectName;
	let tasks = [];

	const addTask = task => {
		tasks.push(task);
	}

	const removeTask = task => {
		tasks.splice(tasks[tasks.indexOf(task)], 1);
	}
	return { name, tasks, addTask, removeTask };
}

export { task, project };